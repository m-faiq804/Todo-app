from pydantic import BaseModel,Field


class CreateTodoList(BaseModel):
    title : str = Field(min_length=4, max_length=50)
    desc : str =  Field(min_length=5, max_length=100)

class ReadTodoList(CreateTodoList):
    id : int
    class config:
        orm_mode = True