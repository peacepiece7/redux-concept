import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { RootState } from './reducers'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Post } from './reducers/posts'

type Props = {
  value: any
  onIncrement: () => void
  onDecrement: () => void
}

function App({ value, onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const posts: Post[] = useSelector((state: RootState) => state.posts)
  const [todoValue, setTodoValue] = React.useState('')

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const fetchPosts = (): any => {
    return async function fetchPostsThunk(dispatch: any, getState: any) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', text: todoValue })
    setTodoValue('')
  }
  return (
    <div className='App'>
      Clicked : {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type='text' value={todoValue} onChange={handleChange} />
        <input type='submit' />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
