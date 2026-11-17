from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session

from ..core.database import get_session
from . import repository
from .models import TodoCreate, TodoPublic, TodoUpdate

SessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(prefix="/todos", tags=["todos"])

@router.get("", response_model=list[TodoPublic], status_code=status.HTTP_200_OK)
def list_todos(session: SessionDep):
    return repository.get_todos_sql(session)

@router.post("", response_model=TodoPublic, status_code=status.HTTP_201_CREATED)
def add_todo(data: TodoCreate, session: SessionDep):
    row = repository.create_todo_sql(session, data)
    session.commit()
    return row

@router.patch("/{todo_id}", response_model=TodoPublic, status_code=status.HTTP_200_OK)
def update_todo(todo_id: int, data: TodoUpdate, session: SessionDep):
    row = repository.update_todo_sql(session, todo_id, data)

    if row is None:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Todo not found")
    
    session.commit()
    return row

@router.delete("/{todo_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(todo_id: int, session: SessionDep):
    result = repository.delete_todo_sql(session, todo_id)

    if not result:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Todo not found")
    session.commit()