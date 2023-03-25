import Accordion from "react-bootstrap/Accordion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function SingleBook({ books, loading }) {
  if (!loading) {
    return <h2>Loading</h2>;
  }

  const starsRating = (rating) => {
    const starsRatingList = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsRatingList.push(
          <AiFillStar key={i} className="ratingStar"></AiFillStar>
        );
      } else {
        starsRatingList.push(<AiOutlineStar key={i}></AiOutlineStar>);
      }
    }

    return starsRatingList;
  };

  return (
    <Accordion flush>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <Accordion.Item eventKey={book.id}>
              <Accordion.Header>
                <strong>
                  <em>{book.title}</em>
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                {book.description} <hr />
                <div className="d-md-flex justify-content-between">
                  <div>
                    <p>
                      <b>Author : </b>
                      {book.author}
                    </p>
                  </div>
                  <div>
                    <b>Rating:</b> {starsRating(book.rating)}
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>
        );
      })}
    </Accordion>
  );
}

export default SingleBook;
