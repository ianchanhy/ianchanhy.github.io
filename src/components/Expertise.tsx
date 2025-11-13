import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Pandas",
    "Numpy",
    "Statsmodels",
    "Streamlit",
    "scikit-learn",
    "Jupyter"
];

const labelsSecond = [
    "Statistical Arbitrage",
    "Pairs Trading",
    "Mean Reversion",
    "Cointegration",
    "Avellaneda-Stoikov"
];

const labelsThird = [
    "Git",
    "GitHub",
    "SQL",
    "yfinance",
    "REST APIs"
];

function Expertise() {
    return (
    <div className="container" id="about"> 
        <div className="skills-container">
            <h1>About</h1>

            <p style={{ textAlign: 'center', maxWidth: '720px', fontSize: '1.1rem', margin: '20px auto 0 auto' }}>
              I'm a natural problem-solver, and it turns out that financial markets are the ultimate puzzle. I'm an engineer by training, but I now spend my time building Python-based trading models and market simulators just to see what's possible.
            </p>

            <h2 style={{ marginTop: '60px', marginBottom: '30px' }}>Skills</h2>

            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Quantitative Programming</h3>
                    <p>Pivoting from a technical background in Biomedical Engineering, I am applying programming and data analysis skills to solve complex problems in quantitative finance.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Financial Modeling</h3>
                    <p>Building and backtesting quantitative models, with a focus on statistical arbitrage and market microstructure theory.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Concepts:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Tools & Engineering</h3>
                    <p>Proficient in the standard development toolkit, including version control, data retrieval, and analysis environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;