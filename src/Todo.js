import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo, completeTodo } from "./actions/index"

const Todo = (props) => {

    return (
        <>
            <div onClick={() => props.completeTodo(props.todo.id)} key={props.todo.id} className="item">
                <input type="text" className={`${props.todo.complete ? "yapildi" : "item_input"}`}
                    value={props.todo.title} disabled />
                <Link to={`/edittodo/${props.todo.id}`} className="editButton">
                    EDIT
                </Link>
                <button onClick={() => props.deleteTodo(props.todo.id)} className="removeButton">REMOVE</button>
            </div>
        </>
    )
}

export default connect(null, { deleteTodo, completeTodo })(Todo)
