import "./App.css";
import Navbar from "./components/Navbar";

import almond from "./assets/almod.png";
import almond2 from "./assets/almod2.png";
import can from "./assets/can.png";
import choclate from "./assets/choclate.png";
import choclate2 from "./assets/choclate2.png";
import choclate3 from "./assets/choclate3.png";
import footer from "./assets/footer1.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "10% bottom",
        end: "80% 80%",
        scrub: true,
      },
    });

    t1.to(".can", { x: -200, y: 550, rotate: 40 });
    t1.to(".choclate", { x: -250, y: 920 }, "<");
    t1.to(".choclate2", { x: 200, y: 630, scale: 2 }, "<");
    t1.to(".almond", { x: 700, y: 650, rotate: 140 }, "<");
    t1.to(".almond2", { x: -900, y: 200, rotate: 120, scale: 1.5 }, "<");

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "20% bottom",
        end: "70% 80%",
        scrub: 1,
      },
    });

    t2.to(".can", { x: 20, y: 1170, rotate: 0 });
    t2.to(".choclate", { x: 100, y: 1180 }, "<");
    t2.to(".choclate2", { x: -170, y: 1180, scale: 1 }, "<");
    t2.from(".btn", { opacity: 0, x: -500 }, ">+1");
  });
  return (
    <div className="text-white w-screen font-montserrat">
      <Navbar />
      <main className="">
        <section className="hero">
          <h1 className="font-bold text-9xl">Naturalist</h1>
          <div className="[&>img]:absolute">
            <img
              className="top-10 left-20 z-10 rotate-45 almond"
              src={almond}
              width={100}
            />
            <img
              className="bottom-10 right-20 z-10 almond2"
              src={almond2}
              width={100}
            />
            <img
              className="top-10 right-[35%] z-10 choclate"
              src={choclate}
              width={300}
            />
            <img
              className="bottom-0 right-[38%] z-20 choclate2"
              src={choclate2}
              width={150}
            />
            <img className="top-0 right-[33%] z-10 can" src={can} width={430} />
          </div>
        </section>
        <section id="about">
          <div className="mt-20">
            <img src={choclate3} width={2200} />
          </div>
          <div className="space-y-6">
            <h2 className="font-bold text-5xl">Delicious</h2>
            <p>
              Crafted from the finest cocoa beans and blended with all-natural
              ingredients, this beverage offers an indulgent, guilt-free treat
              that embodies simplicity and authenticity. Whether you enjoy it
              hot or chilled, Naturalist promises a creamy, velvety texture that
              delights your senses and nourishes your soul!
            </p>
          </div>
        </section>
        <footer id="footer" className="relative">
          <img className="w-screen h-screen" src={footer} width={200} />
          <button className="btn">Get Started</button>
        </footer>
      </main>
    </div>
  );
}

export default App;
