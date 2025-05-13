import React, { Component } from 'react';
import './signIn.css';
import childLogin from '../assests/childLogin.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          type: 'Login',
          id: 1,
          active: true
        },
        {
          type: 'Register',
          id: 2,
          active: false
        }
      ],
      email: '',
      username: '',
      password: '',
      windowWidth: window.innerWidth
    };
  }  

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  shifttTabs(selectedTab) {
    const updatedTabs = this.state.tabs.map(tab => ({
      ...tab,
      active: tab.id === selectedTab.id
    }));

    this.setState({ 
      tabs: updatedTabs,
      // Clear form fields when switching tabs
      email: '',
      username: '',
      password: ''
    });
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const activeTab = this.state.tabs.find(tab => tab.active);
    
    if (activeTab.type === 'Login') {
      // Handle login
      console.log('Login submitted:', this.state.email, this.state.password);
    } else {
      // Handle registration
      console.log('Registration submitted:', this.state.email, this.state.username, this.state.password);
    }
  }

  render() {
    const { email, username, password } = this.state;
    const activeTab = this.state.tabs.find(tab => tab.active);
    const isRegistering = activeTab.type === 'Register';
    
    return (
      <div className="sign-in-container">
        <div className="sign-in-form">
          <img src={childLogin} alt="Login visual" />
          <div className="signin-up-container">
            <h1>Welcome to Candels and Capitals</h1>
            <div className="sign-in-form-container">
              {this.state.tabs.map((item) => (
                <div
                  onClick={() => this.shifttTabs(item)}
                  className={`sign-in-form-tabs ${item.active ? 'active-tab' : ''}`}
                  key={item.id}
                >
                  <p>{item.type}</p>
                </div>
              ))}
            </div>

            <div className='login-form'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-field'>
                  <h6>User email</h6>
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder='Enter your email' 
                    required
                  />
                </div>
                
                {isRegistering && (
                  <div className='form-field'>
                    <h6>User Name</h6>
                    <input 
                      type="text" 
                      name="username"
                      value={username}
                      onChange={this.handleInputChange}
                      placeholder='Enter your username' 
                      required
                    />
                  </div>
                )}
                
                <div className='form-field'>
                  <h6>Password</h6>
                  <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                    placeholder='Enter your Password' 
                    required
                  />
                </div>

                <button className='submit-button' type='submit'>
                  {isRegistering ? 'Register' : 'Sign In'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
