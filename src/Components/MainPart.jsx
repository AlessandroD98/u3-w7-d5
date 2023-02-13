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
            <div>
              <button>Genres</button>
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
