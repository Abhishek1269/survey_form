import React from 'react'

export default function Question(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="container card mt-2">
          <form onSubmit={props.submit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">What are you currently doing ?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q1" value="teaching"></input>
                <label className="form-check-label" htmlFor="teacher">
                  Teaching
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q1" value="student"></input>
                <label className="form-check-label" htmlFor="student">
                  Student
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q1" value="programmer"></input>
                <label className="form-check-label" htmlFor="programmer">
                  Programmer
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q1" value="other"></input>
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Please rate our course</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q2" value="Goor"></input>
                <label className="form-check-label" htmlFor="poor">
                  Poor
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q2" value="Good"></input>
                <label className="form-check-label" htmlFor="good">
                  Good
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="q2" value="Excellent"></input>
                <label className="form-check-label" htmlFor="excellent">
                  Excellent
                </label>
              </div>

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Write your review here</label>
              <textarea type="text" className="form-control" name='q3' placeholder="Write here...."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
