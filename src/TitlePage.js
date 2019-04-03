import React, { Component } from 'react';
import './App.css';


class TitlePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className='title-header'>Katie Westbrook</h2>
          <img className='profile-pic' src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554309949/personal-site/profile_pic.jpg' alt="Katie Westbrook" />
        </header>

      </div>
    );
  }
}

export default TitlePage;
