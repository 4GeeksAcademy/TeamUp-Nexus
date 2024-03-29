"""empty message

Revision ID: 407828bc5e10
Revises: 5ae890cdaa41
Create Date: 2024-02-03 14:09:11.349423

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '407828bc5e10'
down_revision = '5ae890cdaa41'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('player_profile',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('kd_ratio', sa.Float(), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('wins', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('secret_question1', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('secret_question2', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('secret_answer1', sa.VARCHAR(length=150), autoincrement=False, nullable=False),
    sa.Column('secret_answer2', sa.VARCHAR(length=150), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('player_profile')
    # ### end Alembic commands ###
