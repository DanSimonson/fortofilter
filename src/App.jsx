import React, { useState } from "react";
import { Button } from "flowbite-react";
import Posts from "./data/Posts";

export default function App() {
  const [forlooppost, setForlooppost] = useState([]);
  const [filterpost, setFilterpost] = useState([]);

  const getPostWithForLoop = async () => {
    for (let i = 0; i < Posts.length; i++) {
      if (Posts[i]._id === 2) {
        setForlooppost(Posts[i]);
        setFilterpost([]);
      }
    }
  };

  const getPostWithFilter = async () => {
    let foundPostArrayOfObjectsElement = Posts.filter((p) => p._id === 2);
    let newObj = foundPostArrayOfObjectsElement.shift();
    setFilterpost(newObj);
    setForlooppost([]);
  };
  const getPostWithFind = async () => {};
  const getPostWithForOf = async () => {};
  const getPostWithForIn = async () => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <Button
          onClick={getPostWithForLoop}
          outline
          className="w-40"
          gradientDuoTone="greenToBlue"
        >
          For Loop example
        </Button>

        {forlooppost.length === 0 ? (
          <div className="mt-8 flex justify-center">Post Title: ?</div>
        ) : (
          <div className="mt-8 flex justify-center" id="filter">
            Post Title: {forlooppost.title}
          </div>
        )}
      </div>
      <div
        id="filter"
        className="flex flex-col justify-center items-center pt-8 w-full"
      >
        <Button
          onClick={getPostWithFilter}
          outline
          gradientDuoTone="greenToBlue"
        >
          Filter example
        </Button>

        {filterpost.length < 1 ? (
          <div className="mt-8 flex justify-center">Post Title: ?</div>
        ) : (
          <div className="mt-8 flex justify-center">
            Post Title: {filterpost.title}
          </div>
        )}
      </div>
    </>
  );
}
