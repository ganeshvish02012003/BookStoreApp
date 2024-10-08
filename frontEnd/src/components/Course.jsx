import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from '../../public/list.json'
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await  axios.get("http://localhost:8080/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold py-4">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here</span>{" "}
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            fuga tempora enim sapiente nisi veritatis excepturi, blanditiis
            assumenda rerum, quaerat unde exercitationem perspiciatis maiores,
            distinctio earum? Aspernatur, voluptate. Obcaecati, impedit modi?
            Eos, suscipit sunt. Inventore, numquam ratione aut perferendis nemo
            ducimus nobis impedit possimus facere delectus esse similique
            quibusdam labore.
          </p>
          <Link to="/">
            <button className="btn btn-secondary">Back</button>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
