from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    secret_question1 = db.Column(db.String(80), unique=False, nullable=False)
    secret_question2 = db.Column(db.String(80), unique=False, nullable=False)
    secret_answer1 = db.Column(db.String(150), unique=False, nullable=False)
    secret_answer2 = db.Column(db.String(150), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }

class PlayerProfile(db.Model):
    __tablename__ = "playerprofile"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    kd_ratio = db.Column(db.Float, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    wins = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Playerprofile {self.username}>'

class PlayerFav(db.Model):
    __tablename__ = "playerFav"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    kd_ratio = db.Column(db.Float, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    wins = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Playerfav {self.username}>'
