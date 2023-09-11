import React from "react";
import contactus from '../assets/images/contact.png'

const ContactUsPage = () => {
  return (
    <div className="container">
    <div className="columns">
        <div className="col-12 bg-info p-3 rounded ">
            <h3>Countact us</h3>
        </div>
    </div>
    <div className="row align-items-center ">
        <div className="col-md-7">
            <div className="mt-1">
                <h3 className="text-primary">how to contact us</h3>
                <h5>+989376030633</h5>
                <h5>+981341827021</h5>
                <h5>mohammadjahanchi@gmail.com</h5>
            </div>
        <div className="mt-2">
            <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Your Name:</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="please type your name" />
            </div>
            <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Your Message:</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="please type your Message" />
            </div>
            <button className="btn btn-outline-primary ms-3">Send</button>
        </div>
        </div>
        

        <div className="col-md-5 text-center ">
            <img src={contactus} alt="about" className="img-fluid about-img"></img>
        </div>

    </div>



</div>
  );
};

export default ContactUsPage;
