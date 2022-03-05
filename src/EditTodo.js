import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { editTodo } from './actions';

const EditTodo = (props) => {

    var id = window.location.pathname.split('/')[2]

    const todos = props.todos.find(todo => todo.id == id ? todo : null);

    const [todo, setTodo] = useState({ id: todos.id, title: todos.title });

    const navigator = useNavigate();

    return (
        <div >
            <input onChange={e => setTodo({ ...todo, title: e.target.value })} value={todo.title} type="text" placeholder='todoyu düzenleyin' />
            <button onClick={e => {
                e.preventDefault();
                props.editTodo(todo);
                navigator("/");
            }} className='btn btn-warning'>Edit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { editTodo })(EditTodo)
