import React, { useState, useEffect } from 'react';
import './portfolioStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faTasks, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

const PortfolioStats = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [weeklyWorkingHours, setWeeklyWorkingHours] = useState(0);
  const [foundedDate, setFoudingDate] = useState(0);

  useEffect(() => {
    const animateCount = (targetValue, setValue) => {
      let currentValue = 0;
      const step = Math.ceil(targetValue / 200);

      const interval = setInterval(() => {
        currentValue += step;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(interval);
        }
        setValue(currentValue);
      }, 20);
    };

    let foundingYear = animateCount(2021, setFoudingDate);
    let projectInterval = animateCount(130, setCompletedProjects);
    let clientsInterval = animateCount(120, setClientsCount);
    let hoursInterval = animateCount(40, setWeeklyWorkingHours);

    return () => {
      clearInterval(foundingYear);
      clearInterval(projectInterval);
      clearInterval(clientsInterval);
      clearInterval(hoursInterval);
    };
  }, []);

  return (
    <div className="portfolio-stats-container">
    <div className="stat-column">
      <FontAwesomeIcon icon={faBuilding} size="2x" className="fa-icon" />
      <p className="stat-value">{foundedDate}</p>
      <p className="stat-description">Since 2021</p>
    </div>
    <div className="stat-column">
      <FontAwesomeIcon icon={faTasks} size="2x" className="fa-icon" />
      <p className="stat-value">{completedProjects}</p>
      <p className="stat-description">Projects delivered</p>
    </div>
    <div className="stat-column">
      <FontAwesomeIcon icon={faUsers} size="2x" className="fa-icon" />
      <p className="stat-value">{clientsCount}</p>
      <p className="stat-description">Satisfied clients</p>
    </div>
    <div className="stat-column">
      <FontAwesomeIcon icon={faClock} size="2x" className="fa-icon" />
      <p className="stat-value">{weeklyWorkingHours}</p>
      <p className="stat-description">Dedicated hours per week</p>
    </div>
  </div>
  );
};

export default PortfolioStats;
