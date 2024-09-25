"use client";
import Image from "next/image";
import Script from "next/script";

import table from "./images/tabl3.png";
import Card from "./../components/ui/card";
import Ward from "./../components/ui/phoenuii";

import njs from "./images/nodejs.png";
import gpu from "./images/gpu1.png";
import ssd from "./images/ssd.png";
import peter from "./images/peter.png";
import hand1 from "./images/hand2.png";
import hand2 from "./images/hand1.png";
import chip from "./images/chips.png";
import uno from "./images/uno.png";
import brainiac from "./images/brainiac.png";
import process from "./images/process.png";
import python from "./images/python.png";
import hhi from "./images/hhi.png";
import win98 from "./images/win98.png";
import rick from "./images/rick.png";
import phonehand2 from "./images/phonehand2.png";
import redmi from "./images/redmi-removebg-preview.png";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [tit, settit] = useState(0);
  const [des, setdes] = useState(0);
  const [git, setgit] = useState("google.com");
  const [link, setlink] = useState("google.com");
  const [img, setimg] = useState(0);

  const hando = useRef(null);
  const deckk = useRef(null);
  const [B, setB] = useState(0);

  function kyspt2() {
    if (hando.current) hando.current.classList.add("up");
  }
  function kyspt3() {
    if (hando.current) hando.current.classList.remove("up");
    if (hando.current) hando.current.classList.add("upp");
  }
  function kys() {
    if (deckk.current) {
      // Access the div element using myDivRef.current
      console.log(deckk.current);
      deckk.current.classList.add("down");
      setTimeout(kyspt2, 1000);
      setTimeout(kyspt3, 3000);
    }
  }
  function kyspt4() {
    if (hando.current) hando.current.classList.add("downsynd");
    if (deckk.current) deckk.current.classList.add("up");
    setTimeout(() => {
      if (hando.current) {
        hando.current.classList.remove("downsynd");
        hando.current.classList.remove("upp");
      }
    }, 2000);
    setTimeout(() => {
      if (deckk.current) deckk.current.classList.remove("up");
    }, 2500);
    setTimeout(() => {
      if (deckk.current) deckk.current.classList.remove("down");
    }, 2500);
  }
  return (
    <div className="main">
      <a className="tablep">
        <Image className="table" src={table} alt="cardimg" priority />
      </a>
      <div ref={hando} className="handd ">
        <Ward img={img} tit={tit} desc={des} git={git} link={link} x={kyspt4} />
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
        <Image className="ricky" src={rick}/>
          
       
      </div>
      <div className="wholehand " ref={deckk}>
        <div className="hand">
          <Image className="hand1" src={hand1} alt="cardimg" />
        </div>
        <div className="deck">
          <div
            onClick={() => {
              console.log("hh");
              setdes(`A Windows 98-themed website evokes nostalgia by recreating the classic look and feel of the operating system. It features a retro interface with a Start menu, taskbar, and draggable pop-up windows that replicate the iconic blue-and-grey color scheme. This site combine the playful design with interactive nostalgia, offering a fun trip back to the late 90s tech aesthetic.
      This website is coded in pure vanilla js. The only libraries used are expressjs for routing and 2FA Authentictor code generator. 
      I made this when i was 15yrs old and this was my first major project and I had a lot of fun making it.
      You can use the following credentials to test it- Username:ezio ,OTP: 526915`);
              settit("WIN98 SHOWCASE WEBSITE");
              setgit("https://github.com/hello-lab/windows98-portfolio");
              setlink("https://win98.niyogi.hackclub.app");
              setimg(win98);
              console.log(des);
            }}
          >
            <Card
              img={win98}
              deg={"-15deg"}
              height={"-4vh"}
              lang={njs}
              kyss={kys}
              title={"WIN98 SHOWCASE WEBSITE"}
            />
          </div>
          <div
            onClick={() => {
              console.log("hh");
              setdes(`A Windows 98-themed website evokes nostalgia by recreating the classic look and feel of the operating system. It features a retro interface with a Start menu, taskbar, and draggable pop-up windows that replicate the iconic blue-and-grey color scheme. This site combine the playful design with interactive nostalgia, offering a fun trip back to the late 90s tech aesthetic.
      This website is coded in pure vanilla js. The only libraries used are expressjs for routing and 2FA Authentictor code generator. 
      I made this when i was 15yrs old and this was my first major project and I had a lot of fun making it.
      You can use the following credentials to test it- Username:ezio ,OTP: 526915`);
              settit("HARVEST HOPE INITIATVE WEBSITE");
              setgit("https://github.com/hello-lab/HARVEST-HOPES-INITIATIVE");
              setlink("https://hhi.niyogi.hackclub.app");
              setimg(hhi);
              console.log(des);
            }}
          >
            {" "}
            <Card
              img={hhi}
              deg={"-0deg"}
              height={"-6vh"}
              lang={njs}
              title={"HARVEST HOPE INITIATVE WEBSITE"}
              kyss={kys}
            />
          </div>
          <div
            onClick={() => {
              console.log("hh");
              setdes(`A Windows 98-themed website evokes nostalgia by recreating the classic look and feel of the operating system. It features a retro interface with a Start menu, taskbar, and draggable pop-up windows that replicate the iconic blue-and-grey color scheme. This site combine the playful design with interactive nostalgia, offering a fun trip back to the late 90s tech aesthetic.
      This website is coded in pure vanilla js. The only libraries used are expressjs for routing and 2FA Authentictor code generator. 
      I made this when i was 15yrs old and this was my first major project and I had a lot of fun making it.
      You can use the following credentials to test it- Username:ezio ,OTP: 526915`);
              settit("PROCESS MONTORING SYSTEM");
              setgit("https://github.com/hello-lab/process-monitoring-system");
              setlink("https://uno.niyogi.hackclub.app");
              setimg(process);
              console.log(des);
            }}
          >
            {" "}
            <Card
              img={process}
              deg={"15deg"}
              height={"-7vh"}
              lang={python}
              title={'"PROCESS MONTORING SYSTEM"'}
              kyss={kys}
            />
          </div>
          <div
            onClick={() => {
              console.log("hh");
              setdes(`A Windows 98-themed website evokes nostalgia by recreating the classic look and feel of the operating system. It features a retro interface with a Start menu, taskbar, and draggable pop-up windows that replicate the iconic blue-and-grey color scheme. This site combine the playful design with interactive nostalgia, offering a fun trip back to the late 90s tech aesthetic.
      This website is coded in pure vanilla js. The only libraries used are expressjs for routing and 2FA Authentictor code generator. 
      I made this when i was 15yrs old and this was my first major project and I had a lot of fun making it.
      You can use the following credentials to test it- Username:ezio ,OTP: 526915`);
              settit("BRAINIAC");
              setgit("https://github.com/hello-lab/Brainiac");
              setlink("https://brainiac.niyogi.hackclub.app");
              setimg(brainiac);
            }}
          >
            {" "}
            <Card
              img={brainiac}
              deg={"30deg"}
              height={"-8vh"}
              lang={python}
              title={"BRAINIAC"}
              kyss={kys}
            />
          </div>
          <div
            onClick={() => {
              console.log("hh");
              setdes(`A Windows 98-themed website evokes nostalgia by recreating the classic look and feel of the operating system. It features a retro interface with a Start menu, taskbar, and draggable pop-up windows that replicate the iconic blue-and-grey color scheme. This site combine the playful design with interactive nostalgia, offering a fun trip back to the late 90s tech aesthetic.
      This website is coded in pure vanilla js. The only libraries used are expressjs for routing and 2FA Authentictor code generator. 
      I made this when i was 15yrs old and this was my first major project and I had a lot of fun making it.
      You can use the following credentials to test it- Username:ezio ,OTP: 526915`);
              settit("UNO WEBSITE");
              setgit("https://github.com/hello-lab/uno-website");
              setlink("https://uno.niyogi.hackclub.app/index.html");
              setimg(uno);
              console.log(des);
            }}
          >
            {" "}
            <Card
              img={uno}
              deg={"45deg"}
              height={"-9vh"}
              lang={njs}
              title={"UNO WEBSITE"}
              kyss={kys}
            />
          </div>
        </div>
        <div className="backhand">
          <Image className="hand2" src={hand2} alt="cardimg" priority />
        </div>
      </div>
      <div className="parallelogram">N</div>
    </div>
  );
}
