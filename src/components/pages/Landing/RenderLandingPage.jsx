import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Top section of the Landing Page. Includes graphs and buttons */}
      {/* Separated each image into its own div so that the text aligns directly below the image */}
      <div className="graphs-section">
        <div>
          {/* Due to the nature of the images, different heights must be given to each image */}
          <img
            src={GrantRatesByOfficeImg}
            alt="bar graph"
            style={{ height: '175px', width: 'auto' }}
          />
          <p className="graph-text">Search Grant Rates By Office</p>
        </div>
        <div>
          {/* Had to institute a different left margin due to the invisible box surrounding the pie chart */}
          <img
            src={GrantRatesByNationalityImg}
            alt="pie chart"
            style={{ height: '180px', width: 'auto', marginLeft: '8.5%' }}
          />
          <p className="graph-text">Search Grant Rates By Nationality</p>
        </div>
        <div>
          <img
            src={GrantRatesOverTimeImg}
            alt="line graph"
            style={{ height: '177.5px', width: 'auto' }}
          />
          <p className="graph-text">Search Grant Rates Over Time</p>
        </div>
      </div>
      {/* Buttons below the graphs to download or view the data */}
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Download the Data
        </Button>
      </div>

      {/* Middle section of the Landing Page. Includes image and text */}
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom section of the Landing Pgae. Contains necessary statistics to highlight insights */}
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
