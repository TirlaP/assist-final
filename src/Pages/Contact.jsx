import React from 'react'

const Contact = () => {
  return (
    <div>
      <form id="contact-form" >
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="location" required />
        </div>
        <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
            <label htmlFor="name">Phone Number</label>
            <input type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact