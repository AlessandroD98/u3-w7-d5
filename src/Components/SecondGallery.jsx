import { Component } from "react";
import Slider from "./Slider";
import { Spinner } from "react-bootstrap";

class SecondGallery extends Component {
  state = {
    ArrOfFilms: [],
  };
  fetchHandle = async () => {
    const FirstLineOfFilms = [
      "how to train your dragon",
      "how to train your dragon 2",
      "How to Train Your Dragon: The Hidden World",
      "Harry Potter and the Sorcerer's Stone",
      "Harry Potter and the Chamber of Secrets",
      "Harry Potter and the Goblet of Fire",
      "Harry Potter and the Order of the Phoenix",
      "Harry Potter and the Prisoner of Azkaban",
      "Harry Potter and the Half-Blood Prince",
      "Harry Potter and the Deathly Hallows: Part 1",
      "Harry Potter and the Deathly Hallows: Part 2",
      "Iron Man",
      "Iron Man 2",
      "Iron Man 3",
      "avengers",
      "Avengers: Age of Ultron",
      "Avengers: Infinity War",
      "Avengers: Endgame",
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
export default SecondGallery;
