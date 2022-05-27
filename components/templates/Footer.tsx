import FooterLinks from "../molecules/FooterLinks";
import Logo from "../molecules/Logo";
import SocialLinks from "../molecules/SocialLinks";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_content">
          <div className="footer_nav">
            <Logo />
            <FooterLinks />
          </div>
          <div className="footer_text">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className="footer_bottom">
            <p>Copyright 2021. All Rights Reserved</p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
