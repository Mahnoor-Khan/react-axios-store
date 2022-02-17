
import React, { Component, useEffect, useRef, useState } from 'react';
import style from './style.form.module.scss';
import { Input,Button } from 'antd';
import { useStore } from '../../rootStore';
// import todos from '../../store/todoStore'


const Form = () => {
    const Task=useRef('')
    const inputVal=(e)=>{
        Task.current.value=e.target.value
    }
    
    const {
        TodoListModal: { getTodo, getTOODO},
      } = useStore(null)

      useEffect(() => {
        async function load() {
          await getTodo()
        }
        load()
      }, [])

      console.log(getTOODO)
    const submit=()=>{
        // todos.setTitle(Task.current.value)
        // setListItem([...listItem , Task.current.value])
    }

    const deleteTask=(ind)=>{
        // listItem.splice(listItem.indexOf(listItem[ind]),1)
        // setListItem([...listItem])
    }

    const [listItem , setListItem]=useState([])
    return ( <>
    <div className={style.div1}>
        <Input placeholder="Basic usage" onChange={inputVal} ref={Task}/>
        <Button type="primary" onClick={submit} >Submit</Button>
        {/* <Button type="primary" onClick={setTitle} >Submit</Button> */}
        <ul className={style.list}>
        {listItem.map((item , ind)=>{
            return(
                <div key={ind}>
                    <li className={style.listLi}>{item}
                    <Button onClick={()=>deleteTask(ind)}>D</Button>
                    </li>
                </div>
            )
        })}
        </ul>

        {/* <h1>{todos.todoList} {todos.todoList}</h1> */}
        </div>
    </> );
}
 
export default Form;