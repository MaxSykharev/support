import React, { useEffect, useState } from "react";
import './styles.scss'
import { Button } from "@mui/material";

import firebase from "firebase";

export const Chat = () => {
  const [ticket, setTicket] = useState<any>([])
  const [todo, setTodo] = useState<any>('')
  const [todoList, setTodoList] = useState<any>([]);
  const handleOnChange = (e: any) => {
    setTicket(e.target.value);
  };

  useEffect(() => {
    const todoData = firebase.database().ref('ticket');
    todoData.on('value', (snapshot) => {
      const todo = snapshot.val();
      const todoList = [];
      for (let id in todo) {
        todoList.push({ id, ...todo[id] })
      }
      setTodoList(todoList)
    })
  }, []);

  const createTodo = (e: any) => {
    e.preventDefault()
    setTicket('')
    console.log("Create ticket, message:", ticket)

    const todoRef = firebase.database().ref('ticket')
    const todo: any = {
      ticket
    }
    todoRef.push(todo)
    setTodo(todo)

  }
  const deleteAllTodos = (todo: any) => {
    console.log('tickets removed');
    firebase.database().ref(`/ticket`).remove();
  }

  return (
    <>
      <form id='form'>
        <input id='inputTicket' onChange={handleOnChange} value={ticket} />
        <Button onClick={createTodo} variant="contained" disableElevation>sumbit</Button>
      </form>
      <div className="applications">
        <p>Tickets:</p>
        <Button onClick={deleteAllTodos} variant="contained" disableElevation>clear base</Button>
        {todoList ? todoList?.map((item: any, id: number) =>
          <div key={id} className='task'> <h4>ticket: {item.ticket}</h4> <span> id:{item.id}</span></div>
        ) : 'wait...'}
      </div>
    </>
  )
}