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
            <div className="row align-items-center ">
                <div className="col-md-7 "><p>Welcome to the Cryptocurrency website! We are a team of experts in the field of cryptocurrencies and blockchain technology, and we were founded in 2020. We believe that there are endless opportunities in the world of cryptocurrencies, and we aim to make these opportunities accessible to you.</p>
<hr></hr>
<strong>Our Mission:</strong>

<p>Our mission is to provide you with the tools and information necessary to participate in the cryptocurrency market. We collaborate with a team of financial analysts, blockchain developers, and security experts to bring you up-to-date and practical news and analyses.</p>

<strong>Why Us?</strong>

<p>Expert Team: Our team consists of experienced and specialized individuals in the field of cryptocurrencies.
Up-to-Date Information: We provide you with the latest news and market analyses.
Security: The security of your information and assets is our top priority.
We sincerely appreciate your trust and support. Stay with us and welcome to the exciting world of cryptocurrencies!</p></div>

                <div className="col-md-5 text-center ">
                    <img src={aboutImg} alt="about" className="img-fluid about-img"></img>
                </div>

            </div>



        </div>


    )
};
export default AboutUs;