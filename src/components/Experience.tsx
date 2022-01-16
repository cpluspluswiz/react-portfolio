import '../styles/experience.css';
import marketBoxLogo from '../images/company-logos/marketBoxLogo.png'
import thinktumLogo from '../images/company-logos/thinktumLogos.png'

function Experience() {
  return (
  <div className="experience">
    <h3 id="experience-nav" className="tab-heading"><span className="list-num tab-num">03.&nbsp;</span>Experience</h3>
      <section id="companies">
        <div className="company-card">
          <div className="card-heading">
            <div className="company-title" style={{backgroundColor: "var(--marketBoxColor)"}}>MarketBox</div>
            <div className="card-body">
              <img className="company-logo" src={marketBoxLogo} alt="MarketBox"/>
              <h3 className="company-position"><i className="fas fa-hard-hat icon"></i> Front-End Engineer</h3>
              <p className="company-duration"><i className="fas fa-calendar-week icon"></i> Sep 2021 - Dec 2021</p>
              <p className="company-location"> <i className="fas fa-map-marked icon"></i> Toronto, ON</p>
              <div className="company-details">
                <ul className="list-work">
                  <li>Enhanced the UX and UI of the admin site using ReactJS and MaterialUI which resulted in the site being
                     more intuitive and user friendly and was highly appreciated by our clients.</li>
                  <li>Implemented a Booking filtration feature which allowed service providers to filter Bookings by Booking
                      Status and Booking date which saved Providers several minutes each time they searched for Bookings.</li>
                  <li>Enriched Provider portal with various features such as export Bookings, allowing clients to set up
                     virtual meeting rooms, view past and future orders etc.</li>
                  <li>Refactored and restructured code resulting in cleaner, more readable code and reduced overall codebase by 15%.</li>
                  <li>Diagnosed and fixed over 50 Bugs throughout the auth and public sites to improve the functionality and reliability of the application.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="company-card">
          <div className="card-heading">
            <div className="company-title" style={{backgroundColor: "var(--thinktumColor)"}}>Thinktum inc.</div>
            <div className="card-body">
              <img className="company-logo" src={thinktumLogo} alt="Thinktum"/>
              <h3 className="company-position"><i className="fas fa-hard-hat icon"></i> Full Stack Engineer</h3>
              <p className="company-duration"><i className="fas fa-calendar-week icon"></i> Jan 2021 - Apr 2021</p>
              <p className="company-location"> <i className="fas fa-map-marked icon"></i> Waterloo, ON</p>
              <div className="company-details">
                <ul className="list-work">
                  <li>Worked closely with the development team under an agile scrum environment to develop the 
                    front end and back end of a life insurance web application.</li>
                  <li>Developed various API endpoints to create features which allowed the web app to fetch and
                     then display PDFs, download PDFs, verify phone number and postal code, acknowledge life insurance policies etc</li>
                  <li>Integrated web application with various external APIs such as Twilio, Google ReCAPTCHA and other services.</li>
                  <li>Worked with the UX/UI team to create a clean and intuitive front end for customers using ReactJS.</li>
                  <li>Reduced Bugs and errors by writing extensive unit and integration tests for all new features that were implemented.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}

export default Experience;