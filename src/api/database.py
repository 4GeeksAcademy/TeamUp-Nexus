from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

DATABASE_URL = "postgresql://user:password@localhost/mydatabase"

engine = create_engine(DATABASE_URL)
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

def init_db():
    # Import all modules here that might define models so that
    # they will be registered properly on the metadata.
    from .models import Base
    Base.metadata.create_all(bind=engine)
