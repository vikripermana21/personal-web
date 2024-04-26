import { ReactElement, useMemo, useState } from "react";
import "./App.css";
import HeroImage from "/images/hero-image.png";
import { FaChevronDown } from "react-icons/fa";
import ParallaxImage from "./components/ParallaxImage";
import Project1 from "/images/project-1.png";
import Project2 from "/images/project-2.png";
import Project3 from "/images/project-3.png";
import { RiBootstrapFill, RiReactjsLine, RiVuejsLine } from "react-icons/ri";
import { SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { FiFramer } from "react-icons/fi";

function App() {
  const projects = useMemo(() => {
    return [
      {
        description:
          "Here's my first portfolio, created during my high school days. It was a playground for me to practice HTML and CSS, exploring the basics of web design. Though simple, it marked the beginning of my coding journey and laid the foundation for my future projects.",
        image: Project1,
        icons: [
          <RiReactjsLine className="hover:text-react transition-all" />,
          <SiStyledcomponents className="hover:text-styled-components transition-all" />,
          <RiBootstrapFill className="hover:text-bootstrap transition-all" />,
        ],
      },
      {
        description:
          "This portfolio represents my second endeavor in web design, crafted purely for enjoyment and as a platform for experimentation. It served as a playground for me to apply newfound knowledge and techniques acquired along my learning journey.",
        image: Project2,
        icons: [
          <RiVuejsLine className="hover:text-vue transition-all" />,
          <SiTailwindcss className="hover:text-tailwind transition-all" />,
          <FiFramer className="hover:text-framer transition-all" />,
        ],
      },
      {
        description:
          "This is a non-commercial Spotify clone for educational purposes, showcasing basic music streaming functionalities. It's designed to help developers learn web development through a practical project. Sadly :(, i cannot release this one due to Spotify permission",
        image: Project3,
        icons: [
          <RiReactjsLine className="hover:text-react transition-all" />,
          <SiTailwindcss className="hover:text-tailwind transition-all" />,
          <FiFramer className="hover:text-framer transition-all" />,
        ],
      },
    ];
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen w-screen flex relative z-20">
        <img
          src={HeroImage}
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <div className="z-30 w-full h-full bg-black/15 flex py-10 px-36 justify-end flex-col gap-10">
          <p className="text-size-header font-serif font-semibold leading-header text-white">
            Hello, <br /> I'm Vikri
          </p>
          <FaChevronDown className="text-white text-size-icons animate-bounce" />
        </div>
      </div>
      {/* Hero Section */}
      {/* Text Section */}
      <div className="mt-[-100vh] h-[400vh] [view-timeline-name:--reveal-wrapper]">
        <div className="h-screen w-screen sticky top-0 flex items-center justify-cente p-72">
          <div>
            <p className="font-mono text-[24px] font-semibold reveal-text">
              Meet the unstoppable learner, Vikri Permana! This English-speaking
              dynamo tackles challenges with unwavering grit, soaking up
              knowledge like a sponge. When work's done, he flips the switch to
              gamer mode, crushing opponents with strategic brilliance. But
              Vikri’s not all work and play; he chills out with a soundtrack of
              diverse tunes, sometimes even adding his own musical flair. A true
              force to be reckoned with, Vikri proves that curiosity,
              dedication, and a killer playlist are the perfect recipe for
              success.
            </p>
          </div>
        </div>
      </div>
      {/* End Text Section */}
      {projects.map(
        (
          item: {
            description: string;
            image: string;
            icons: ReactElement[];
          },
          index
        ) => (
          <ParallaxImage
            header={`PRJCT 00${index + 1}`}
            imageSide={index % 2 === 0 ? "R" : "L"}
            description={item.description}
            image={item.image}
            icons={item.icons}
          />
        )
      )}
      <div className="w-screen h-screen flex justify-center items-center">
        <p>Hello World</p>
      </div>
    </>
  );
}

export default App;
