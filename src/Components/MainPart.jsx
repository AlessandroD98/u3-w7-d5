import { Component } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import { IoAppsSharp } from "react-icons/io5";
import { IoGrid } from "react-icons/io5";
import FirstGallery from "./FirstGallery";
import SecondGallery from "./SecondGallery";
import ThirdGallery from "./ThirdGallery";

class MainPart extends Component {
  render() {
    return (
      <Container fluid>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex px-5">
            <h2>TV Shows</h2>
            <div className="dropdown ms-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres &nbsp;
              </button>
              <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-white bg-dark" href="1">
                  Comedy
                </a>
                <a className="dropdown-item text-white bg-dark" href="1">
                  Drama
                </a>
                <a className="dropdown-item text-white bg-dark" href="1">
                  Thriller
                </a>
              </div>
            </div>
          </div>
          <div className="px-5">
            <IoGrid className="IconTop" />
            <IoAppsSharp className="IconTop" />
          </div>
        </div>
        <h4 className="px-5">Trending Now</h4>
        <FirstGallery />
        <h4 className="px-5">Watch Again</h4>
        <SecondGallery />
        <h4 className="px-5">Anime</h4>
        <ThirdGallery />
        <Footer />
      </Container>
    );
  }
}
export default MainPart;
