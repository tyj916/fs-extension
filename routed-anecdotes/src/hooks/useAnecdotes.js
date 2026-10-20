import { useState, useEffect } from "react";
import anecdoteService from '../services/anecdotes'

const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([])

  useEffect(() => {
    anecdoteService.getAll().then(data => setAnecdotes(data))
  }, [])

  const addAnecdote = async (newAnecdote) => {
    const savedAnecdote = await anecdoteService.createNew(newAnecdote)
    setAnecdotes([...anecdotes, savedAnecdote])
  }

  return {
    anecdotes,
    addAnecdote,
  }
}

export default useAnecdotes
