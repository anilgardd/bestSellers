import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Stephen King",
    title: "Holly",
    img: "https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg",
  },

  {
    author: "Rebecca Yarros ",
    title: "Fourth Wing",
    img: "https://m.media-amazon.com/images/I/91n7p-j5aqL._SY466_.jpg",
  },
];

const BookList = () => {
  return <section className="booklist">{books}</section>;
};
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<BookList />);
