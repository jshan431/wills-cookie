import React from 'react';
import './about-us.styles.scss';
import Image from '../../assets/img/sweets-1.jpeg';
const AboutUs = () => (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-5">
          <h1 className="text-capitalize">about <strong className="banner-title">us</strong></h1>
          <p className="my-4 text-muted w-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae est hic iusto cupiditate modi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, facere.
          </p>
          <a href="#" className="btn btn-black text-uppercase">explore</a>
        </div>
        <div className="col-10 mx-auto col-md-6 my-5 align-self-center">
          <div className="about-img__container">
            <img src={Image} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div> 
);

export default AboutUs;

//src/assets/img/sweets-1.jpeg