import React from "react";
import list from "../../public/list.json";
import Crads from "./Crads";
import { Link } from "react-router-dom";

const Course = () => {
  console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! : )</span>
          </h1>
          <p className="mt-12">
            Unleash your next adventure with just a click. Our app puts a
            universe of stories at your fingertips. Browse millions of books,
            discover hidden gems with personalized recommendations, and satisfy
            your inner bookworm – anytime, anywhere. It's your personal library,
            always open, always waiting to fuel your imagination.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Crads key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
