import React from 'react';
//import './Home.css';

const Home = props => {
  const { username, logOut } = props;

  return (
    <div>
      {username ? (
        <div className="container">
          <div className="grid-row">
            <h2 id="homeHeading">Welcome to NC News </h2>
            <h2 id="homeHeading">{username}</h2>
            <p id="homePara">
              Your source for the latest Northcoders news. Interesting articles
              and content related to various topics including programming,
              coding, cooking, games etc.
              <br /> NcNews focuses bringing the latest articles about various
              topics.
            </p>
          </div>
          <button onClick={logOut} className="buttonNav" id="button-logout">
            Log Out
          </button>
        </div>
      ) : (
        <h1 className="warning">Please Login</h1>
      )}
    </div>
  );
};

export default Home;
