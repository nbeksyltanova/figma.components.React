import React from "react";
import vertor from "../img/Vector 2.png";
import vector from "../img/Vector 1.png";
import bg from "../img/Photo.png";
import darle from "../img/Photo BG.png";
const Foto = () => {
  return (
    <div>
      <section className="darle-img">
        <div>
          <img className="vector-2" src={vertor} />
          {<img className="vector-1" src={vector} />}
          <img className="bg" src={bg} />
          <img className="bg-1" src={darle} />
        </div>
        <div className="footer"></div>
      </section>
    </div>
  );
};

export default Foto;
