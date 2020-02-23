import React from 'react';
import Alert from '../../components/alert/alert.component';
import Banner from '../../components/banner/banner.components';
import AboutUs from '../about-us/about-us.component';
import Footer from '../../components/footer/footer.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div>
        <Banner />  
        <AboutUs />
        <Footer />
    </div>
)

export default HomePage;