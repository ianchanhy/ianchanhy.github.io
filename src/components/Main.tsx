import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* Removed the image-wrapper div for privacy */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ianchanhy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* Removed LinkedIn Icon */}
          </div>
          <h1>Ian Chan H.Y.</h1>
          <p>Projects in Algorithmic Trading & Market Analysis</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ianchanhy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* Removed LinkedIn Icon */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;