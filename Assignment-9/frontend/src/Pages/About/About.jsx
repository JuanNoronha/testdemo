import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar';
import "./About.css";

function About() {
    return (
        <div>
            <Navbar title="about" />
            <div className="container-fluid">
                <div className="aboutUs">
                    <center><h1>Your Ultimate Job Portal for Finding Opportunities Online</h1></center>
                    <center><h3>JobZone offers you a brand new, ultra-convenient way to find and post job opportunities online. We specialize in connecting employers with talented professionals across all industries, whether you're looking for full-time, part-time, remote, or freelance work, you can easily connect with the best talent available.</h3></center>
                </div>
            </div>
        </div>
    )
}

export default About

