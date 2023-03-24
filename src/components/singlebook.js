import Accordion from "react-bootstrap/Accordion";

function SingleBook({books,loading}) {
    if (!loading) {
      return <h2>Loading</h2>;
    }
  return (
    <Accordion flush>
        {books.map((book)=>{
            return (
              <Accordion.Item eventKey={book.id}>
                <Accordion.Header>{book.title}</Accordion.Header>
                <Accordion.Body>
                  {book.description}
                </Accordion.Body>
              </Accordion.Item>
            );
        })}
      
    </Accordion>
  );
}

export default SingleBook;
