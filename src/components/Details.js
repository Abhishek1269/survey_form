import React from 'react'

export default function Details(props) {
  return (
     <div className="container-fluid">
     <div className="container card mt-2">
     <form onSubmit={props.submit}>
  <div className="form-group">
    <label htmlFor="">Name</label>
    <input type="text" name='name' className="form-control" placeholder="Please enter your name" required></input>
  </div>
  <div className="form-group">
    <label htmlFor="">Email</label>
    <input type="text" name='email' className="form-control" placeholder="Enter your email" required></input>
  </div>
  <div className="form-group form-check">
  </div>
  <button type="submit" className="btn btn-primary">Next</button>
</form>
     </div>
   </div>
  )
}
