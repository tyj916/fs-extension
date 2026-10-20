import { useState } from 'react'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (e) => setValue(e.target.value)

  const options = () => ({ type, value, onChange })

  const reset = () => setValue('')

  return {
    type,
    value,
    onChange,
    options,
    reset,
  }
}

export default useField