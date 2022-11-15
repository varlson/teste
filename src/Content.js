import React from "react";

export default function Content({ isOpen, setisOpen }) {
  return (
    <div className="relative  grid h-full">
      <span
        onClick={(e) => setisOpen(false)}
        className="right-3 top-1 grid content-center cursor-pointer p-2 absolute text-2xl font-bold text-red-500 border rounded-full  w-9 h-9 text-center"
      >
        X
      </span>

      <div className="self-end p-2 border">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quia
        omnis nemo possimus a enim praesentium unde laborum voluptate, aliquam
        deserunt sit reiciendis! Esse ut nam neque in nihil voluptatibus.
        Sapiente, laboriosam, dolores incidunt molestias autem enim, laudantium
        voluptatum deleniti ut facere error ad perspiciatis? Voluptatum
        aspernatur magni ea eum, nihil voluptate molestiae dicta nobis
        praesentium, ducimus quidem! Cupiditate, sed.
      </div>

      <div className="self-end p-2 justify-self-end grid grid-cols-2 z-index-10">
        <button
          onClick={(e) => setisOpen(false)}
          className="m-1 text-white bg-red-500 px-3 py-1 rounded-lg self-end"
        >
          Cancel
        </button>
        <button className="m-1 text-white bg-green-500 px-3 py-1 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
}
