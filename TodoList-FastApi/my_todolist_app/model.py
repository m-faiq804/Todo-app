from sqlalchemy import Column,String,Integer,Text
from database import Base


class TodoList(Base):
    __tablename__ = 'todolist'
    id = Column(Integer, primary_key=True,index=True)
    title = Column(String(50), nullable=False)
    desc = Column(Text, nullable=False)