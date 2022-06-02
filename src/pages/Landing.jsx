import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage.js";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            KOD <span>Yaz</span> app
          </h1>
          <p>
            I'm baby prism retro cronut, salvia umami franzen XOXO tote bag
            tumblr DSA. Everyday carry kombucha cred, blue bottle fashion axe
            hexagon swag neutra edison bulb brunch man braid sriracha yuccie
            plaid.
          </p>
          <Link to="/register" className="btn btn-hero">
            Giriş Yap/Kayıt Ol
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
