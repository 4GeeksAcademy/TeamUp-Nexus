from Flask import Flask, request, jsonify
from .database import db_session, init_db
from .models import Player

app = Flask(__name__)

@app.route('/add_player', methods=['POST'])
def add_player():
    username = request.json['username']
    email = request.json['email']
    new_player = Player(username=username, email=email)
    db_session.add(new_player)
    db_session.commit()
    return jsonify({"message": "Player added successfully"}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
