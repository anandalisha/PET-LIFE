import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../Assets/back.jpeg";
import "../../Styles/Home.css";

function Home() {
  React.useEffect(() => {
    window && window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pet Life </h1><br></br>
        <p> For the love of pets...</p>
        <Link to="/menu">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
