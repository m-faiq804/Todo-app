from fastapi import FastAPI,Depends
import model,schema,crud
from database import engine,get_db
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

model.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def home_page():
    return {"Home Page!"}

@app.get('/todos/',response_model=list[schema.ReadTodoList])
def get_todos(db : Session = Depends(get_db)):
    return db.query(model.TodoList).all()   

@app.post('/todo/',response_model=schema.ReadTodoList)
def todo_create(todo : schema.CreateTodoList,db : Session = Depends(get_db)):
    return crud.create_todo(todo=todo,db=db)

@app.delete('/deleteTodo/{todo_id}',response_model=schema.ReadTodoList)
def todo_delete( todo_id : int,db : Session = Depends(get_db)):
    return crud.delete_todo(todo_id=todo_id,db=db)  