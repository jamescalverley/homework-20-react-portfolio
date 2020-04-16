import React from 'react';
import '../components-style.css';

function ContactPage(){
  
  return (
    <div className="container">

      <div className="contact-heading">
        <h2>Contact me!</h2>
      </div>
      
      <div className="contact-form">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" className="form-control" id="inputName" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input type="password" className="form-control" id="inputEmail" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Message</label>
                <input type="message" className="form-control" id="inputMessage" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    </div>
  );
};

export default ContactPage;