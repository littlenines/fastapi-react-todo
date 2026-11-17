from sqlalchemy import RowMapping, text
from sqlmodel import Session

from .models import TodoCreate, TodoUpdate


def get_todos_sql(session: Session) -> RowMapping | None:
    return session.exec(text("SELECT id, title, done FROM todo ORDER BY id")).mappings().all()


def create_todo_sql(session: Session, data: TodoCreate) -> RowMapping | None:
    return session.exec(
            text(
                "INSERT INTO todo (title, done) "
                "VALUES (:title, :done) "
                "RETURNING id, title, done"
            ).bindparams(title=data.title, done=data.done)
        ).mappings().one()


def update_todo_sql(session: Session, todo_id: int, data: TodoUpdate) -> RowMapping | None:
    return session.exec(
            text(
                "UPDATE todo SET "
                "title = COALESCE(:title, title), "
                "done  = COALESCE(:done, done) "
                "WHERE id = :id "
                "RETURNING id, title, done"
            ).bindparams(title=data.title, done=data.done, id=todo_id)
        ).mappings().first()

def delete_todo_sql(session: Session, todo_id: int) -> bool:
    result = session.exec(text("DELETE FROM todo WHERE id = :id").bindparams(id=todo_id))

    return result.rowcount > 0