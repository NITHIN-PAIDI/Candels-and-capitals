import React, { Component } from 'react';
import './Home.css';
import companyLogo from '../assests/companyLogo.png'
import teenagegirl from '../assests/teenagegirl.svg'
import overLayImages from '../assests/overLayImages.svg'
import { withRouter } from '../../src/Dashboard/withRouter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Courses',
          url: '/courses',
        },
        {
          title: 'About',
          url: '/about',
        },
        {
          title: 'Contact',
          url: '/contact',
        },
      ],
      mobileMenuOpen: false
    };
  }
  
  toggleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenuOpen: !prevState.mobileMenuOpen
    }));
  }

  handleLoginClick = () => {
    this.props.navigate('/signin');
  }

  handleSignUpClick = () => {
    this.props.navigate('/signin?section=register');
  }

  handleNavLinkClick = (url) => {
    if (url === '/courses' && !this.props.isAuthenticated) {
      this.props.navigate('/signin');
    } else {
      this.props.navigate(url);
    }
  }
 
  render() {
    const { links, mobileMenuOpen } = this.state;
    const { isAuthenticated } = this.props;
    
    return (
      <div className="home-page">
        <div className='header'>
            <div className='logo home-page-logo'>
              <img src={companyLogo} alt="Logo" className='logo' />
              <p>Candles and Capitals</p>
            </div>
            
            {/* Hamburger Menu Button */}
            <div className="hamburger" onClick={this.toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            {/* Desktop Navigation */}
            <div className='nav-links'>
                {links.map((link, index) => (
                  <p 
                    className='link' 
                    key={index}
                    onClick={() => this.handleNavLinkClick(link.url)}
                  >
                    {link.title}
                  </p>
                ))}

                {isAuthenticated ? (
                  <button 
                    className='primary-button'
                    onClick={() => this.props.navigate('/dashboard')}
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button 
                      className='primary-button'
                      onClick={this.handleLoginClick}
                    >
                      Login
                    </button>
                    <button 
                      className='secondary-button'
                      onClick={this.handleSignUpClick}
                    >
                      Sign Up
                    </button>
                  </>
                )}
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <p 
              className='link' 
              key={index}
              onClick={() => this.handleNavLinkClick(link.url)}
            >
              {link.title}
            </p>
          ))}
          
          {isAuthenticated ? (
            <button 
              className='primary-button'
              onClick={() => this.props.navigate('/dashboard')}
            >
              Dashboard
            </button>
          ) : (
            <>
              <button 
                className='primary-button'
                onClick={this.handleLoginClick}
              >
                Login
              </button>
              <button 
                className='secondary-button'
                onClick={this.handleSignUpClick}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className='main-content'>
            <div className='content-1'>
                <h1 className='heading'>Master <span className='hightlight'>Stock Investing</span> Through Interactive Online Classes</h1>
                <div>
                    <p className="desciption">Candles and Capitals' platform teaches you stock concepts with ease.</p>
                </div>
                <div className='actions'>
                    <button 
                      className='primary-button'
                      onClick={isAuthenticated ? () => this.props.navigate('/dashboard') : this.handleLoginClick}
                    >
                      Get Started
                    </button>
                    <button className='secondary-button'>Book Demo</button>
                </div>
            </div>
            <div className='content-2'>
              <img src={teenagegirl} alt="Teenage Girl" className='girl-image' />
              <img src={overLayImages} alt="Company Logo" className="out-lets" />
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
