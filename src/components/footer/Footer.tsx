
import design from './Footer.module.scss';
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiInstagram, FiTwitter } from 'react-icons/fi'


function Footer() {
  return (
    <div className={design.footer}>
      <div className={`container ${design.rows}`}>
        {/* Column1 */}
        <div className={`item item1${design.col}`}>
          <h4 className={design.title}>About Us</h4>
          <ul className={`list-unstyled`}>
            <li> Story</li>
            <li>Clients</li>
            <li>Testimonials</li>
          </ul>
        </div>
        {/* Column2 */}
        <div className={`item item2${design.col}`}>
          <h4 className={design.title}>Services</h4>
          <ul className="list-unstyled">
            <li> Consolting </li>
            <li> Development </li>
            <li> Design </li>
          </ul>
        </div>
        {/* Column3 */}
        <div className={` item item3`}>
          <h4 className={design.title}> Social </h4>
          <ul className="list-unstyled">
            <li>
              <AiOutlineFacebook /> Facebook{" "}
            </li>
            <li>
              {" "}
              <FiInstagram /> Instagram{" "}
            </li>
            <li>
              {" "}
              <FiTwitter /> Twitter{" "}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={`d-flex container flex-wrap ${design.p}`}>
        <p className="col-sm text-center">
          &copy;{new Date().getFullYear()} Nave Shifroni | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;


