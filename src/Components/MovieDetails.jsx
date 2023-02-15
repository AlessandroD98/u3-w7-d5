import { Col, Row, Container, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const params = useParams();
  const [singleFilm, setSingleFilm] = useState({});

  const fetchHandle = async () => {
    const UrlToFetch = "http://www.omdbapi.com/?apikey=3545b57e&i=" + params.filmId;
    try {
      const data = await fetch(UrlToFetch);
      if (data.ok) {
        const SingleFilm = await data.json();
        console.log("SingleFilm", SingleFilm);
        setSingleFilm({
          ...SingleFilm,
        });
      }
    } catch (error) {
      alert(error);
    }
    console.log("Dettagli film", singleFilm);
  };

  useEffect(() => {
    fetchHandle();
  }, [params.filmId]);

  return (
    <Container>
      <Row className="">
        {/* <Col xs={12} md={6} className="text-center"> */}
        {singleFilm.Title ? (
          // <Card>
          //   <Card.Img variant="top" src={singleFilm.Poster} />
          //   <Card.Body>
          //     <Card.Title>{singleFilm.Title}</Card.Title>
          //     <Card.Text></Card.Text>
          //   </Card.Body>
          // </Card>
          <Col xs={12} className="d-flex ContainerFilmDetails mt-5 justify-content-center">
            <Col md={6} className="ContainerImgDetails">
              <img src={singleFilm.Poster} alt="Copertina Film" />
            </Col>
            <Col xs={12} md={6} className="ms-3 text-start">
              <h2>Title: {singleFilm.Title}</h2>
              <p>
                <strong>Released:</strong> {singleFilm.Released}
              </p>
              <p>
                <strong>Duration:</strong> {singleFilm.Runtime}
              </p>
              <p>
                <strong>Genre:</strong> {singleFilm.Genre}
              </p>
              <p>
                <strong>Description:</strong> {singleFilm.Plot}
              </p>
              <p>
                <strong>Type:</strong> {singleFilm.Type}
              </p>
              <p>
                <strong>Rating:</strong> {singleFilm.imdbRating}/10
              </p>
            </Col>
          </Col>
        ) : (
          <Spinner animation="border" variant="danger" />
        )}
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default MovieDetails;
