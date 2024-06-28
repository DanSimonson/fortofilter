import React, { useState } from "react";
import { Button } from "flowbite-react";
import Posts from "./data/Posts";

export default function App() {
  const [forlooppost, setForlooppost] = useState([]);
  const [filterpost, setFilterpost] = useState([]);
  const [findpost, setFindpost] = useState([]);
  const [forofpost, setForofpost] = useState([]);
  const [forinpost, setForinpost] = useState([]);

  const getPostWithForLoop = async () => {
    for (let i = 0; i < Posts.length; i++) {
      if (Posts[i]._id === 2) {
        setForlooppost(Posts[i]);
        setFilterpost([]);
        setFindpost([]);
        setForofpost([]);
        setForinpost([]);
      }
    }
  };

  const getPostWithFilter = async () => {
    let foundPostArrayOfObjectsElement = Posts.filter((p) => p._id === 2);
    let newObj = foundPostArrayOfObjectsElement.shift();
    setFilterpost(newObj);
    setForlooppost([]);
    setFindpost([]);
    setForofpost([]);
    setForinpost([]);
  };
  const getPostWithFind = async () => {
    let foundPostArrayOfObjectsElement = Posts.find((p) => p._id === 2);
    setFindpost(foundPostArrayOfObjectsElement)
    setForlooppost([]);
    setFilterpost([]);
    setForofpost([]);
    setForinpost([]);
  };

  const getPostWithForOf = async () => {
    for (let Post of Posts) {
      if (Post._id === 2) {
        setForofpost(Post);
        setForlooppost([]);
        setFilterpost([]);
        setForinpost([]);
        setFindpost([]);
      }
    }
  };
  const getPostWithForIn = async () => {
    for (let PostIndex in Posts) {
      if (Posts[PostIndex]._id === 2) {
        setForinpost(Posts[PostIndex]);
        setForofpost([]);
        setForlooppost([]);
        setFilterpost([]);
        setFindpost([]);
      }
    }
  };
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
      <div className="flex flex-col justify-center items-center pt-8 w-full">
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
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <Button onClick={getPostWithFind} outline gradientDuoTone="greenToBlue">
          Find example
        </Button>

        {findpost.length < 1 ? (
          <div className="mt-8 flex justify-center">Post Title: ?</div>
        ) : (
          <div className="mt-8 flex justify-center">
            Post Title: {findpost.title}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <Button
          onClick={getPostWithForOf}
          outline
          gradientDuoTone="greenToBlue"
        >
          For Of example
        </Button>

        {forofpost.length < 1 ? (
          <div className="mt-8 flex justify-center">Post Title: ?</div>
        ) : (
          <div className="mt-8 flex justify-center">
            Post Title: {forofpost.title}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center pt-8 w-full">
        <Button
          onClick={getPostWithForIn}
          outline
          gradientDuoTone="greenToBlue"
        >
          For In example
        </Button>

        {forinpost.length < 1 ? (
          <div className="mt-8 flex justify-center">Post Title: ?</div>
        ) : (
          <div className="mt-8 flex justify-center">
            Post Title: {forinpost.title}
          </div>
        )}
      </div>
    </>
  );
}
