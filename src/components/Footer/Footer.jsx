import "./Footer.css";
export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <section className="footer-container">
            <div className="footer-data">
                <div className="footer-about">
                    <span className="footer-about-head">EduPortal School</span>
                    <p>"Shaping Minds, Building Future"</p>
                    <p>Kampala, Uganda</p>
                    <p>+256 700 000 000</p>
                    <p>Office hours</p>
                    <p>info@edup.sch.ug</p>
                </div>
                <div className="quick-links">
                    <span className="footer-about-head">Quick Links</span>
                    <p>Home</p>
                    <p>About</p>
                    <p>Academics</p>
                    <p>Gallery</p>
                    <p>Contact</p>
                </div>
                <div className="media">
                    <span className="footer-about-head">Follow Us</span>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Tiktok</p>
                    <p>X(Twitter)</p>
                </div>
            </div>
             <hr className="footer-hr"/>
            <p className="footer-copy">
              Built with ❤️, live from Darius. {currentYear}    
              EduPortal School. All Rights Reserved.
            </p>

        </section>
    )
}