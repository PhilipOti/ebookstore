import React,{useState} from 'react'
import {books} from "../data/books"
import { Pagination } from './pagination'
import SingleBook from './singlebook'

function Bookcatalogue() {

    const booksCatalogue = books
    const [currentPage,setCurrentPage] = useState(1)
    const booksPerPage = 5
    const loading = true


    // get current books
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = booksCatalogue.slice(indexOfFirstBook, indexOfLastBook); 

    const paginate = (number) => setCurrentPage(number)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3"> BookList</h1>
      {/* <Posts posts={currentBooks} loading={loading} /> */}
      <SingleBook books={currentBooks} loading={loading}></SingleBook>
      <Pagination
        postsPerPage={booksPerPage}
        totalPosts={booksCatalogue.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Bookcatalogue