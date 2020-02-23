import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './banner.styles.scss';
const Banner = () => (
    <div className="container-fluid">
      <div className="row max-height justify-content-center align-items-center">
        <div className="col-10 mx-auto banner text-center">
          <h1 className="text-capitalize">
            welcome to <strong className="banner-title">grandma's</strong>
          </h1>
          <a href="#store" className="btn banner-link text-uppercase my-2">explore</a>
        </div>
        </div>
    </div>
);

export default Banner;