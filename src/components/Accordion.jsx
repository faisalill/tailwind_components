import React from "react";

const Accordion = () => {
  return (
    <>
      <div className="mb-2 ">Accordion (hover)</div>
      <div className=" h-max w-92 p-1">
        <div className="group bg-black text-white p-2">
          <button className="bg-black text-white">Selection 1</button>
          <p className="hidden group-hover:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            necessitatibus quia. Dicta omnis illum magni optio rem ad nobis
            aspernatur quae tempora, sint consequatur natus, deleniti nisi error
            facere quo.
          </p>
        </div>
        <div className="group bg-black text-white p-2">
          <button className="bg-black text-white">Selection 2</button>
          <p className="hidden group-hover:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            necessitatibus quia. Dicta omnis illum magni optio rem ad nobis
            aspernatur quae tempora, sint consequatur natus, deleniti nisi error
            facere quo.
          </p>
        </div>
        <div className="group bg-black text-white p-2">
          <button className="bg-black text-white">Selection 3</button>
          <p className="hidden group-hover:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
            necessitatibus quia. Dicta omnis illum magni optio rem ad nobis
            aspernatur quae tempora, sint consequatur natus, deleniti nisi error
            facere quo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
