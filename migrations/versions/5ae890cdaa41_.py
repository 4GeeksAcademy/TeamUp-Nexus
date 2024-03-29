"""empty message

Revision ID: 5ae890cdaa41
Revises: ccde861b56c4
Create Date: 2024-02-02 19:34:42.754875

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5ae890cdaa41'
down_revision = 'ccde861b56c4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_profile')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_profile',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('bio', sa.TEXT(), autoincrement=False, nullable=True),
    sa.Column('first_name', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('contact_number', sa.VARCHAR(length=20), autoincrement=False, nullable=False),
    sa.Column('street_address', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.Column('city', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('state', sa.VARCHAR(length=50), autoincrement=False, nullable=False),
    sa.Column('zip_code', sa.VARCHAR(length=10), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_profile_pkey'),
    sa.UniqueConstraint('email', name='user_profile_email_key')
    )
    # ### end Alembic commands ###
