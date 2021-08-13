import React from "react";

function Main(props) {
  return (
    <React.Fragment>
      <article className="relative border p-5 bg-gradient-to-br lg:mt-0 mt-9 gap-y-4 lg:gap-y-9 from-green-200 via-blue-200 h-96">
        <h1 className="font-bold text-2xl">{props.nama_masakan}</h1>
        <img className=" max-h-44" src={props.Image} />
        <p className="lg:mt-4 mt-3 truncate">{props.harga}</p>
        <p className="lg:mt-3 mt-2 mb-3 truncate">{props.rating}</p>
        <button className="absolute bottom-7     px-5 bg-gradient-to-r from-blue-400 to-blue-300 text-white py-2 rounded-md border">
            Selengkapnya
          </button>
        <div className="mt-5 ">
          
        </div>
      </article>
      </React.Fragment>
  );
}
export default Main;
