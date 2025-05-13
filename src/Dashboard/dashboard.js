import React, { Component } from 'react';
import './dashboard.css';
import companyLogo from '../assests/companyLogo.png';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { withRouter } from './withRouter';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import Courses from './courses/courses';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        // Initialize selected option from URL query params if available
        const urlParams = new URLSearchParams(window.location.search);
        const sectionId = urlParams.get('section');
        
        this.state = {
            logoutDialogOpen: false,
            selectedOption: null,
            sidebarOptions: [
                {
                    title: 'Home',
                    link: '/',
                    icon: <HomeIcon />,
                    id: 1
                },
                {
                    title: 'Courses',
                    link: '/',
                    icon: <BookIcon />,
                    id: 2
                },
                {
                    title: 'Live Classes',
                    icon: <LiveTvIcon className='book-icon' />,
                    link: '/',
                    id: 3
                },
                {
                    title: 'Others',
                    link: '/',
                    icon: <AltRouteIcon className='book-icon' />,
                    id: 4
                },
            ]
        };
        
        // Set initial selected option based on URL if available
        if (sectionId) {
            const initialOption = this.state.sidebarOptions.find(opt => opt.id === parseInt(sectionId));
            if (initialOption) {
                this.state.selectedOption = initialOption;
            }
        }
    }
    
    componentDidMount() {
        // Check URL params when component mounts
        const urlParams = new URLSearchParams(window.location.search);
        const sectionId = urlParams.get('section');
        
        if (sectionId && !this.state.selectedOption) {
            const option = this.state.sidebarOptions.find(opt => opt.id === parseInt(sectionId));
            if (option) {
                this.setState({ selectedOption: option });
            }
        }
    }

    handleLogoutClick = () => {
        this.setState({ logoutDialogOpen: true });
    };

    handleCloseDialog = () => {
        this.setState({ logoutDialogOpen: false });
    };

    handleConfirmLogout = () => {
        this.setState({ logoutDialogOpen: false });
        this.props.navigate('/');
    };

    setSelectedOption = (option) => {
        this.setState({ selectedOption: option });
        
        // Update URL with query parameter
        const { navigate, location } = this.props;
        const newUrl = `${location.pathname}?section=${option.id}`;
        console.log(newUrl);
        // Use navigate to update URL without full page reload
        navigate(newUrl, { replace: true });
    };

    render() {
        const { logoutDialogOpen, selectedOption, sidebarOptions } = this.state;

        return (
            <div className='dashboard-outer-holder'>
                <div className='navigation-holder'>
                    <div className='TittleSection'>
                        <img src={companyLogo} alt="Logo" className='logo' />
                        <p className='tittle'>Candles and Capitals</p>
                    </div>

                    <div className='side-bar-options'>
                        {sidebarOptions.map((option, index) => (
                            <div 
                                key={index} 
                                className={`sidebar-option ${selectedOption && selectedOption.id === option.id ? 'active-option' : ''}`}  
                                onClick={() => this.setSelectedOption(option)}
                            >
                                {option.icon}
                                <p>{option.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className='footer'>
                        <div className="footer-content">
                            <img src='https://alorecdn.blob.core.windows.net/imagefrommediaupload/41080173482600266WhatsAppImage2025-02-05at12.42.27_a1400b6a.jpg' alt="User" />
                            <p>Nihtin Paidi</p>
                        </div>
                        <div className='log-out' onClick={this.handleLogoutClick}>
                            <LogoutIcon className='logout-icon' />
                        </div>
                    </div>
                </div>
                
                <div className='resultantDashBoard'>
                    {/* {selectedOption && (
                        <div>
                            <h2>{selectedOption.title} Section</h2>
                            <p>You are viewing the {selectedOption.title} section (ID: {selectedOption.id})</p>
                        </div>
                    )} */}

                    <Courses selectedOption={selectedOption} />
                </div>
                
                {/* Logout Confirmation Dialog */}
                <Dialog
                    open={logoutDialogOpen}
                    onClose={this.handleCloseDialog}
                >
                    <div className='pop-up-dialog'>
                        <div className='pop-up-dialog-content-header'>
                            <div className="icon-holder">
                                <LogoutIcon className='logout-icon' />
                            </div>
                            <div className="tittle-pop-up">
                                <h1>Logout</h1>
                                <p>Hold on</p>
                            </div>
                        </div>
                        <p>Are you sure you want to log out of your account?</p>

                        <div className='button-holder'>
                            <button onClick={this.handleConfirmLogout} className='primary-button pop-buttons'>Logout</button>
                            <button onClick={this.handleCloseDialog} className='primary-button pop-buttons'>Cancel</button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default withRouter(Dashboard);
