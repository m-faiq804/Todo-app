from sqlalchemy.orm import Session
import schema,model
from fastapi import HTTPException


def create_todo(todo : schema.CreateTodoList,db : Session):
    db_user = model.TodoList(**todo.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_todo(todo_id : int,db : Session):
    db_user = db.query(model.TodoList).filter(model.TodoList.id == todo_id).first()

    if not db_user:
        raise HTTPException(status_code=404, detail="Todo Not Found")
    
    db.delete(db_user)
    db.commit()
    return db_user