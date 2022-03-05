import React, { useState } from 'react'
import { connect } from 'react-redux';
import Todo from './Todo';
import { addTodo } from './actions';

const TodoList = (props) => {

    const [todo, setTodo] = useState("");

    return (
        <>
            <div className='container'>
                <h1><span className="styling">TODO</span> List</h1>
                <div className="input_div">
                    <input onChange={e => setTodo(e.target.value)} value={todo} className="input" type="text"
                        placeholder="What do you want to do..." />
                    <button onClick={() => {
                        props.addTodo(todo);
                        setTodo("");
                    }} style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
                        className="addButton">+<i className="fas fa-plus"></i></button>
                </div>
                {
                    props.todos.length >= 1 ? props.todos.map((todo) => {
                        return (
                            <Todo todo={todo} key={todo.id} />
                        )
                    }) : <p style={{ color: "white" }}>There is Nothing Left To do</p>
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoList)
