
import React, { useState } from 'react'
import Todo from './components/Todo.js'

const List = (props) => {
    return (
        <div>
            {props.list.map((item, index) => {
                return <Todo item={item} key={index} />
            })}
        </div>
    )
}

export default List