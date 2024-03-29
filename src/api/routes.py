"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, PlayerProfile
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email is None or password is None:
        return jsonify({"msg": "Bad email or password"}), 401

    user = User.query.filter(User.email == email).first()
    if user is None or user.password != password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/signup", methods=["POST"])
def sign_up():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    questions = request.json.get("securityQuestions", None)
    if email is None or password is None or questions is None:
        return jsonify({"msg": "Bad email, security questions or password"}), 401

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify("This user already exists"), 409
    user = User(email=email, password=password, is_active=True, secret_question1=questions["q1"], secret_question2=questions["q2"], secret_answer1=questions["a1"], secret_answer2=questions["a2"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Success"}), 200

@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    dictionary = {
        "message": "hello " + email
    }
    return jsonify(dictionary)

@api.route("/forget-password", methods=["POST"])
def forgot_password():
    email = request.json.get("email", None)
    security_questions = request.json.get("securityQuestions", None)

    if email is None or security_questions is None:
        return jsonify({"msg": "Please provide a valid email and security questions"}), 400
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "User does not exist"}), 404

    # scenario where they select the questions in the same order as when they signed up and they have the right answer
    if security_questions.q1 == user.secret_question1 and security_questions.a1 == user.secret_answer1:
        if security_questions.q2 == user.secret_question2 and security_questions.a2 == user.secret_answer2:
            return jsonify({"msg": "success"}), 200
    # scenario where they invert the order of the questions, but they have the right answers
    elif security_questions.q1 == user.secret_question2 and security_questions.a1 == user.secret_answer2:
        if security_questions.q2 == user.secret_question1 and security_questions.a2 == user.secret_answer1:
            return jsonify({"msg": "success"}), 200
    else:
        return jsonify({"msg": "the information provided does not match our database"}), 409

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///player_profiles.db'
db.init_app(app)

# Create the PlayerProfile table
with app.app_context():
    db.create_all()

@app.route('/player-profiles', methods=['POST'])
def create_player_profile():
    data = request.json
    new_profile = PlayerProfile(
        username=data['username'],
        kd_ratio=data['kd_ratio'],
        level=data['level'],
        wins=data['wins']
    )
    db.session.add(new_profile)
    db.session.commit()
    return jsonify({'message': 'Player profile created successfully'}), 201

@app.route('/player-profiles', methods=['GET'])
def get_player_profiles():
    profiles = PlayerProfile.query.all()
    result = []
    for profile in profiles:
        result.append({
            'id': profile.id,
            'username': profile.username,
            'kd_ratio': profile.kd_ratio,
            'level': profile.level,
            'wins': profile.wins
        })
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
