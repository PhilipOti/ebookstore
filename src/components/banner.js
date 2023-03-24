import React from "react";

function Banner() {
  return (
    <img
      src={process.env.PUBLIC_URL + "assets/images/books_banner1.svg"}
      alt="boy holding a book"
      className="p-5"
    />
  );
}

export default Banner;
