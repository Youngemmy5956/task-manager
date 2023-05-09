import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function AddTask({onSave}) {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
        // alert('Fill in your task and date or close the form!')
        Swal.fire({
            title: 'Error!',
            text: 'Fill in your task and date or close the form!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    } else if (!text && day) {
        // alert('Fill in your task!')
        Swal.fire({
            title: 'Error!',
            text: 'Fill in your task!',
            icon: 'Ooops',
            confirmButtonText: 'Cool'
          })
    } else if (text && !day) {
        // alert('Fill in your date!')
        Swal.fire({
            title: 'Error!',
            text: 'Fill in your date!',
            icon: 'Ooops',
            confirmButtonText: 'Cool'
          })
        
    } else {
        onSave({ text, day });
    }
    setText('');
    setDay('');
}


  
  return (
      <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Day & Time</label>
              <input type="date" placeholder="add day & time" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>
          <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
  )
}