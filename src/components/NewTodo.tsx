import React, { useRef } from 'react'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent)  => {
        e.preventDefault()
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText)
    }

  return (
    <div>
        <h1>Add Todo</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="todo-text"></label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo