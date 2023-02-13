import { Col, Row } from "react-bootstrap";
import PForTheFooter from "./PForTheFooter";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <Row className="mt-5">
        <Col className="col-6 offset-3">
          <Row>
            <Col className="text-start mb-2">
              <FaFacebookF className="Icon" />
              <FaInstagram className="Icon" />
              <FaTwitter className="Icon" />
              <FaYoutube className="Icon" />
            </Col>
          </Row>
          <Row>
            <PForTheFooter p1="Audio and Subtitles" p2="Media Center" p3="Privacy" p4="Contact us" />
            <PForTheFooter p1="Audio Description" p2="Investor Relations" p3="Legal Notices" />
            <PForTheFooter p1="Help Center" p2="Jobs" p3="Cookie Preferences" />
            <PForTheFooter p1="Gift Cards" p2="Terms of Use" p3="Corporate Information" />
          </Row>
          <Row>
            <Col className="mb-2">
              <button className="mt-3">Service Code</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="LastFooterP mt-2 mb-2">© 1997-2023 Netflix, Inc.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}
export default Footer;
