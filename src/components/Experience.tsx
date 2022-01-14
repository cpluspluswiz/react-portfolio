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
              <h3 className="company-position"><i className="fas fa-hard-hat icon"></i> Full Stack Engineer</h3>
              <p className="company-duration"><i className="fas fa-calendar-week icon"></i> September - December 2021</p>
              <p className="company-location"> <i className="fas fa-map-marked icon"></i> Location</p>
              <div className="company-details">
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</li>
                  <li>Mauris tellus ligula, vehicula vitae enim non, consequat volutpat velit. In lacus turpis,
                    malesuada ac arcu nec, condimentum consectetur turpis</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</li>
                  <li>Mauris tellus ligula, vehicula vitae enim non, consequat volutpat velit. In lacus turpis,
                    malesuada ac arcu nec, condimentum consectetur turpis</li>
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
              <p className="company-duration"><i className="fas fa-calendar-week icon"></i> January - April 2021</p>
              <p className="company-location"> <i className="fas fa-map-marked icon"></i> Location</p>
              <div className="company-details">
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</li>
                  <li>Mauris tellus ligula, vehicula vitae enim non, consequat volutpat velit. In lacus turpis,
                    malesuada ac arcu nec, condimentum consectetur turpis</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut tortor arcu. 
                    Aenean risus nulla, pharetra a fringilla sit amet, aliquam tristique ante.</li>
                  <li>Mauris tellus ligula, vehicula vitae enim non, consequat volutpat velit. In lacus turpis,
                    malesuada ac arcu nec, condimentum consectetur turpis</li>
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