import { Component } from "react";
import Slider from "./Slider";
import { Spinner } from "react-bootstrap";
class ThirdGallery extends Component {
  state = {
    ArrOfFilms: [],
  };
  fetchHandle = async () => {
    const FirstLineOfFilms = [
      "One Piece",
      "Naruto",
      "Naruto: Shippuden",
      "Bleach",
      "My Hero Academia",
      "Katanagatari",
      "Attack on Titan",
      "Code Geass",
      "Vinland Saga",
      "One Punch Man",
      "Mob Psycho 100",
      "Overlord",
      "Demon Slayer: Kimetsu no Yaiba",
      "Jujutsu Kaisen",
      "Hunter x Hunter",
      "Made in Abyss",
      "Arcane",
      "Fate/stay night [Unlimited Blade Works]",
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
export default ThirdGallery;
