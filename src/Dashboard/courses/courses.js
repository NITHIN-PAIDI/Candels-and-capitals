import React, { Component } from 'react';
import './courses.css';
import { withRouter } from '../withRouter';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Courses extends Component {
    render() {
        const { selectedOption } = this.props;
        
        // Settings for the slider
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3, // Changed from 'auto' to a specific number
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        // Sample course data - replace with your actual data
        const courses = [
            {
                id: 1,
                title: "StockMarket Fundamentals",
                description: "Learn the basics of stock market investing and trading strategies.",
                imageUrl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fccbp_prod%2Fmedia%2Fprograms%2FOther%2BCourses%2FMERN%2Fjava_funda.png"
            },
            {
                id: 2,
                title: "Technical Analysis",
                description: "Master chart patterns and technical indicators for better trading decisions.",
                imageUrl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fccbp_prod%2Fmedia%2Fprograms%2FOther%2BCourses%2FMERN%2Fjava_funda.png"
            },
            {
                id: 3,
                title: "Options Trading",
                description: "Learn advanced options strategies for income generation and hedging.",
                imageUrl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fccbp_prod%2Fmedia%2Fprograms%2FOther%2BCourses%2FMERN%2Fjava_funda.png"
            },
            {
                id: 4,
                title: "Risk Management",
                description: "Discover how to protect your capital with proper risk management techniques.",
                imageUrl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fccbp_prod%2Fmedia%2Fprograms%2FOther%2BCourses%2FMERN%2Fjava_funda.png"
            },
            {
                id: 5,
                title: "Futures Trading",
                description: "Learn how to trade futures contracts in various markets.",
                imageUrl: "https://res.cloudinary.com/learning-platform/image/fetch/dpr_auto,w_auto,f_auto,q_auto/https%3A%2F%2Fmedia-content.ccbp.in%2Fccbp_prod%2Fmedia%2Fprograms%2FOther%2BCourses%2FMERN%2Fjava_funda.png"
            }
        ];

        return (
            <div className='courses-outer-holder'>
                <div>
                <div className='category-title'>
                    <p>Category 1</p>
                </div>
                
                <div className='course-slider-container'>
                    <Slider {...settings}>
                        {courses.map(course => (
                            <div key={course.id} className="course-slide">
                                <div className='course-card-holder'>
                                    <div className='top-section'>
                                        <img src={course.imageUrl} alt={course.title} />
                                    </div>
                                    <div className='bottom-section'>
                                        <p className='course-title'>{course.title}</p>
                                        <p className='course-description'>{course.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                </div>


                
            </div>
        );
    }
}

export default withRouter(Courses);
