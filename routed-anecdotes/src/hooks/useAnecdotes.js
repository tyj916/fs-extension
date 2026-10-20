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

  const deleteAnecdote = async (anecdote) => {
    await anecdoteService.remove(anecdote)
    setAnecdotes(anecdotes.filter(a => a.id !== anecdote.id))
  }

  return {
    anecdotes,
    addAnecdote,
    deleteAnecdote,
  }
}

export default useAnecdotes
