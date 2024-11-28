import React from 'react'
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

function Home() {
    const imageUrls = [
        {
            id: 1,
            url: "1.webp",
            title: "Google",
        },
        {
            id: 2,
            url: "2.webp",
            title: "Amazon"
        },
        {
            id: 3,
            url: "3.avif",
            title: "Flipkart"
        },
        {
            id: 4,
            url: "4.webp",
            title: "Walmart"
        },
        {
            id: 5,
            url: "5.jpeg",
            title: "Nvdia"
        },
        {
            id: 6,
            url: "6.webp",
            title: "Yahoo"
        },
        {
            id: 7,
            url: "7.webp",
            title: "Xbox"
        },
        {
            id: 8,
            url: "8.jpg",
            title: "Sony"
        },
        {
            id: 9,
            url: "9.jpg",
            title: "Riot Games"
        },
    
        {
            id: 10,
            url: "10.avif",
            title: "Oracle"
        },
    
        {
            id: 11,
            url: "11.jpg",
            title: "Microsoft"
        },
        {
            id: 12,
            url: "12.png",
            title: "Wipro"
        },
    
    
    ];
    return (
        <div>
            <Navbar title="home" />
            <div className="title-header"> JobZone</div>

            <div className="games-title">
                <h1>Top Careers</h1>
            </div>
            <div className="games-container">
                {imageUrls.map(imageUrl => (<Card
                    key={imageUrl.id}
                    src={imageUrl.url}
                    title={imageUrl.title}
                    buttonText="PLEASE APPLY "
                    imageStyle="auto"
                    galleryStyle="auto"
                />))}
            </div>
        </div>
    )
}

export default Home

