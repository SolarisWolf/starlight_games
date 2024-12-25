import React from "react";
import GameCard from "../components/GameCard";
import "../styles/aat.css"; // One level up if styles is outside the pages folder
import Header from "../components/Header";
import Footer from "../components/Footer";

const games = [
  {
    title: "Marvel's Spider-Man 2",
    image: "/assets/1sp1.jpg", // Corrected path
    link: "/sp2",
  },
  { title: "GTA V", image: "/assets/1gtav.jpg", link: "/gtav" },
  { title: "Minecraft", image: "/assets/1mine.jpg", link: "/mine" },
  { title: "PUBG", image: "/assets/1pubg.jpg", link: "/pubg" },
  { title: "Among Us", image: "/assets/1amogus.jpg", link: "/amogus" },
  { title: "Outlast", image: "/assets/1out.jpeg", link: "/out" },
  { title: "Only Up!", image: "/assets/1ou.jpg", link: "/ou" },
  {
    title: "Microsoft Flight Simulator",
    image: "/assets/1mfs.jpg", // Corrected path
    link: "/mfs",
  },
];

const HomePage = () => (
  <div>
    <Header />
    <br />
    <br />
    <br />
    <img id="heropage" src="/assets/hero page.png" alt="Hero" />
    <br />
    <br />
    <h1>Available Games</h1>
    <section id="now_showing">
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          image={game.image}
          link={game.link}
        />
      ))}
    </section>
    <Footer />
  </div>
);

export default HomePage;
