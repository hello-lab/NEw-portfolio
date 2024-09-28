"use client";
import Handss from "../components/ui/hand";
import Image from "next/image";
import table from "./images/tabl3.png";
import bookcase from "./images/bookshelf.jpg";
import peter from "./images/peter.png";
import chip from "./images/chips.png";
import rick from "./images/rick.png";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const scene1 = useRef(null);
  const objs = useRef(null);
  function rooms() {
    if (scene1.current) scene1.current.classList.remove("sadness2");
    if (scene1.current) scene1.current.classList.add("sadness");
    setTimeout(() => {
      if (scene1.current) {
        scene1.current.classList.add("uselessclass1");
        scene1.current.classList.remove("sadness");
      }
    }, 1400);
  }
  function roomsback() {
    if (scene1.current) scene1.current.classList.add("sadness2");
    setTimeout(() => {
      if (scene1.current) scene1.current.classList.remove("sadness");
    }, 1100);
  }

  const hando = useRef(null);
  const deckk = useRef(null);
  const [B, setB] = useState(0);

  return (
    <div className="main" ref={scene1}>
      <div ref={objs}>
        <div>
          {" "}
          <Handss />
        </div>

        <a className="tablep">
          <Image className="table" src={table} alt="cardimg" priority />
        </a>

        <div className="bookcase">
          <Image src={bookcase} />
        </div>
        <div className="chips">
          <Image className="chip" src={chip} alt="gpu" />
        </div>
        <div className="chips" style={{ right: "1vw", bottom: "2vh" }}>
          <Image className="chip" src={chip} alt="gpu" />
        </div>
        <div className="chips" style={{ right: "15vw", bottom: "1vh" }}>
          <Image className="chip" src={chip} alt="gpu" />
        </div>
        <div className="peterr">
          <Image className="peter" src={peter} alt="cardimg" />
        </div>
        <div className="rick">
          <Image className="ricky" src={rick} />
        </div>

        <div className="parallelogram">N</div>
      </div>
    </div>
  );
}
