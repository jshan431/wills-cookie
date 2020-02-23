import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './alert.styles.scss';
const Banner = () => (
    <div>
        <Alert variant="danger" dismissible>
        <Alert.Heading>
          I am an alert of type <span className="dangerText">danger</span>! But
          my color is Teal!
        </Alert.Heading>
        <p>
          By the way the button you just clicked is an{' '}
          <span className="infoText">Info</span> button but is using the color
          Tomato. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium debitis deleniti distinctio impedit officia reprehenderit
          suscipit voluptatibus. Earum, nam necessitatibus!
        </p>
      </Alert>
    </div>
);

export default Banner;