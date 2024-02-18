import React from 'react';
import home from "../Assets/clipart.png";
const Form = () => {
  return (
    <div className="form-container"> 
        
        <form className="form" action="https://formsubmit.co/asimn6062@gmail.com" method="POST">
        <h3 className='heading_form mx-2 mb-3'>Provide details</h3>
            <div className="form-group">
        
                <div className="half">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="half mx-2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
                </div>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" required />
            </div>
            <div className="form-group">
            <label htmlFor="explanation">Message</label>
            <textarea id="explanation" name="explanation" rows="4" required></textarea>
            </div>
            <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
      <div className="form-image">
        <img src={home} alt="Form" />
      </div>
    </div>
  );
};

export default Form;
