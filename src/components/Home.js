import React from "react";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Greatness <span>starts</span> with <br />
            teamwork and <span>Creativity</span>
          </h1>
          <p>
            "Streamline, manage, and optimize your IT processes effortlessly.
            Experience seamless collaboration, real-time monitoring, and
            innovative solutions — all in one platform."
          </p>
          <button className="cta-button">Get started now</button>
        </div>
        <div className="hero-image">
          <img src="/business.jpg" alt="Teamwork" />
        </div>
      </header>
      <h2 className="define">What defines us?</h2>
      <section className="about-section">
  <div className="hero1-image">
    <img src="/Rectangle.jpg" alt="Teamwork" />
  </div>
  <div className="about-text">
    <p>
      <strong>SRNR IT Solutions Pvt Ltd</strong> is one of the latest
      software startup organizations to develop better Software
      Applications, Software Development, Software Consultancy, and
      Software Training. Beyond the type and size of your business, our
      certified and skilled developers are here to help you with solutions
      to your business problems through advanced software solutions.
    </p>
    <p>
      Our HR Team is always consistent and ready to help you with skilled knowledge 
      candidates in your growing business part and also, we handover all HR Policies,
      HR Services find the right HR Solutions to customize into suit your business.
    </p>
    <p>
      Provide Human Resources expertise that understands business needs. We are providing
      multi resourcement and manpower in unorganized manufacture sectors within your 
      time period. We can provide resourcement with security for us.
    </p>
    <button className="cta-button">Know more </button>

  </div>
  
</section>
         </div>
  );
};

export default Home;