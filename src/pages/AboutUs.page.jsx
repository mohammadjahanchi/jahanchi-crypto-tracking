import React from "react";

import aboutImg from '../assets/images/about.png'
const AboutUs = () => {
    return (
        <div className="container">
            <div className="columns">
                <div className="col-12 bg-info p-3 rounded ">
                    <h3>About us</h3>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam pariatur voluptatum sint tenetur, quia dolore eius, ratione placeat corporis facilis accusamus quo dolores sed officia iure totam modi nemo error.</div>

                <div className="col-md-6 bg-success ">
                    <img src={aboutImg} alt="about"></img>
                </div>

            </div>



        </div>


    )
};
export default AboutUs;