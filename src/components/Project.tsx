import React from "react";
import Button from '@mui/material/Button'; // Import the Button component
import GitHubIcon from '@mui/icons-material/GitHub'; // Import the GitHub icon
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            {/* --- Project 1: Market Maker --- */}
            <div className="project">
                <a href="https://github.com/ianchanhy/Market-Maker-Simulator" target="_blank" rel="noreferrer"><h2>Market-Maker Simulator</h2></a>
                <p>An interactive dashboard (Streamlit) simulating a market maker's "brain" using the 2008 Avellaneda-Stoikov model. It calculates optimal quoting prices based on inventory risk, volatility, and adverse selection.</p>
                
                {/* --- ADDED BUTTON --- */}
                <Button 
                  variant="outlined" 
                  startIcon={<GitHubIcon />} 
                  href="https://github.com/ianchanhy/Market-Maker-Simulator"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ marginTop: '15px' }} // Adds some space above the button
                >
                  View Code
                </Button>
            </div>

            {/* --- Project 2: StatArbitrage --- */}
            <div className="project">
                <a href="https://github.com/ianchanhy/Black-Gold-StatArbitrage-Engine" target="_blank" rel="noreferrer"><h2>Black-Gold StatArbitrage Engine</h2></a>
                <p>A Python backtest of a cointegration-based pairs trading strategy on the "Black Gold" pair: crude oil (USO) vs. energy stocks (XLE). Tests for cointegration and trades z-score deviations.</p>
                
                {/* --- ADDED BUTTON --- */}
                <Button 
                  variant="outlined" 
                  startIcon={<GitHubIcon />} 
                  href="https://github.com/ianchanhy/Black-Gold-StatArbitrage-Engine"
                  target="_blank"
                  rel="noreferrer"
                  sx={{ marginTop: '15px' }} // Adds some space above the button
                >
                  View Code
                </Button>
            </div>

        </div>
    </div>
    );
}

export default Project;