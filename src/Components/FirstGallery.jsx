import { Component } from "react";
import Slider from "./Slider";
import { Spinner } from "react-bootstrap";

class FirstGallery extends Component {
  state = {
    ArrOfFilms: [],
  };
  fetchHandle = async () => {
    const FirstLineOfFilms = [
      "Kung Fu Panda",
      "Kung Fu Panda 2",
      "Kung Fu Panda 3",
      "the iron giant",
      "american sniper",
      "interstellar",
      "bridge to terabithia",
      "batman begins",
      "the dark knight",
      "the dark knight rises",
      "joker",
      "zodiac",
      "one piece film gold",
      "one piece stampede",
      "shutter island",
      "now you see me",
      "now you see me 2",
      "avengers",
    ];
    for (let i = 0; i < FirstLineOfFilms.length; i++) {
      const NameToFetch = FirstLineOfFilms[i];
      const UrlToFetch = "http://www.omdbapi.com/?apikey=3545b57e&t=" + NameToFetch;
      try {
        const data = await fetch(UrlToFetch);
        if (data.ok) {
          const SingleFilm = await data.json();
          console.log("SingleFilm", SingleFilm);
          this.setState({
            ArrOfFilms: [...this.state.ArrOfFilms, SingleFilm],
          });
        }
      } catch (error) {
        alert(error);
      }
    }
    console.log(this.state.ArrOfFilms);
  };
  componentDidMount = () => {
    this.fetchHandle();
  };
  render() {
    return (
      <>
        {this.state.ArrOfFilms.length > 0 ? (
          <Slider Films={this.state.ArrOfFilms} />
        ) : (
          <Spinner animation="border" variant="danger" />
        )}
      </>
    );
  }
}
export default FirstGallery;
