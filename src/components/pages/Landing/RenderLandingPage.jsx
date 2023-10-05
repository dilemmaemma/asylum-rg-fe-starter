import 'bootstrap/dist/css/bootstrap.min.css';
import Login_Button from '../Auth0/Login_Button';
import Logout_Button from '../Auth0/Logout_Button';
import React from 'react';
import axios from 'axios';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

const handleDownload = () => {
  // Define the URL to fetch data from
  const apiUrl = 'https://hrf-asylum-be-b.herokuapp.com/cases';

  axios
    .get(apiUrl)
    .then(response => {
      // Check if the response status is OK (status code 200)
      if (response.status === 200) {
        // Get the data from the response
        const data = response.data;

        // Converted the data to a JSON string
        const plainTextData = JSON.stringify(data, null, 2);

        // Create a Blob (Binary Large Object) from the JSON data
        const blob = new Blob([plainTextData], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create an anchor element for the download link
        const downloadLink = document.createElement('a');

        // Set the href attribute to the Blob's URL
        downloadLink.href = url;

        // Set the download attribute to specify the filename
        downloadLink.download = 'asylum_data.txt';

        // Simulate a click on the anchor element to trigger the download
        downloadLink.click();

        // Clean up by revoking the URL
        URL.revokeObjectURL(url);
      } else {
        console.error(`Error: Received status code ${response.status}`);
      }
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
};

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  // Destructure useAuth in order to be able to use isAuthenticated call
  const { isAuthenticated } = useAuth0();
  const style = { backgroundColor: '#404C4A', color: '#FFFFFF' };

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
      <div className="buttons">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={style}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
        </div>
        <div className="download-data-btn-container">
          {isAuthenticated && (
            <Button
              id="download-button"
              type="default"
              style={style}
              onClick={handleDownload}
            >
              Download the Data
            </Button>
          )}
        </div>
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
        {/* Bottom section of the Landing Page. Contains necessary statistics to highlight insights */}
        <div className="bottom-section">
          <h2>Systemic Disparity Insights</h2>
          {/* Insight portion that shows the statistical representation of the graphs */}
          <div className="insights">
            <div>
              <h2>36%</h2>
              <p className="insights-text">
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
            <div>
              <h2>5%</h2>
              <p className="insights-text">
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>
            <div>
              <h2>6x Lower</h2>
              <p className="insights-text">
                Between fiscal year 2017 and 2020, the New York asylum office's
                average grant rate was six times lower than the San Francisco
                asylum office.
              </p>
            </div>
          </div>
          {/* Button container to control margin of the 'Read More' button */}
          <div className="read-more-btn-container">
            <Button
              type="default"
              style={style}
              // This button should not take the user anywhere yet, so the onClick is commented out
              // onClick={() => history.push('/graphs')}
            >
              Read More
            </Button>
          </div>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
