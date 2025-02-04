import { Canvas } from "@react-three/fiber";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useMemo, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import RandomDecoration from "../RandomDecoration";

const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const scrollableContent = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollableContent.current.scrollTo(latest * 4000, 0);
  });

  const projects = useMemo(() => {
    return [
      {
        name: "Portfolio v1",
        description:
          "Here's my first portfolio, created during my high school days. It was a playground for me to practice HTML and CSS, exploring the basics of web design. Though simple, it marked the beginning of my coding journey and laid the foundation for my future projects.",
        link: "https://vikripermana21.github.io/portfolio/",
      },
      {
        name: "Portfolio v2",
        description:
          "This portfolio represents my second endeavor in web design, crafted purely for enjoyment and as a platform for experimentation. It served as a playground for me to apply newfound knowledge and techniques acquired along my learning journey.",
        link: "https://vikripermana21.vercel.app",
      },
      {
        name: "Snekkk",
        description:
          "This is a non-commercial Spotify clone for educational purposes, showcasing basic music streaming functionalities. It's designed to help me learn web development through a practical project. Sadly :(, i cannot release this one due to Spotify permission",

        link: "",
      },
      {
        name: "`Hello 3D World`",
        description:
          "Utilizing React and Three.js, I developed a simple `hello world` 3D web application that seamlessly integrates dynamic user interfaces with real-time 3D graphics.",
        link: "https://hello-world-olive-two.vercel.app/",
      },
      {
        name: "`Hello 3D World` v2",
        description:
          "After Building `Hello 3D World` using R3F, i decide to deep dive into Three.js a bit further, and end up making this as my first journey in Three.js ",
        link: "https://three-js-journey-3d-text-sigma.vercel.app/",
      },
      {
        name: "The Haunted House",
        description:
          "I am learning about new things which is texture and material, and i wanted to implement those concept or fundamentals into projects, so i made this haunted house 3d modeling using Three.js",
        link: "https://16-haunted-house-psi.vercel.app/",
      },
      {
        name: "The Galaxy",
        description:
          "I am getting addicted to Three.js XD, and for now its particles!, and i decided to build a galaxy, u can tweak their configuration as well.",
        link: "https://18-galaxy-generator-umber.vercel.app/",
      },
      {
        name: "The Galaxy v2",
        description:
          "Now its time for me to touch the Shaders, yeah im so excited to learn Shaders!, and now the galaxy is my `victim` XD, i move each of them using shaders",
        link: "https://18-galaxy-generator-umber.vercel.app/",
      },
      {
        name: "The Position Examples",
        description:
          "Its just a simulation for helping my presentation about position, z-index, and position related attributes in CSS",
        link: "https://position-examples.vercel.app/",
      },
    ];
  }, []);
  return (
    <div ref={ref} className="h-[400vh] w-full text-white relative">
      <div className="absolute top-[0rem] left-[10rem] text-7xl xl:text-9xl text-three">
        <p className="font-bold">MOVE</p>
      </div>
      <div className="absolute top-[50rem] left-[50rem] text-7xl xl:text-9xl text-three">
        <p className="font-bold">UR</p>
      </div>
      <div className="absolute top-[100rem] right-[10rem] text-7xl xl:text-9xl text-three">
        <p className="font-bold">CURSOR</p>
      </div>
      <div className="h-screen w-screen sticky flex justify-center items-center top-0">
        <div
          className="h-1/2 w-full relative flex justify-center backdrop-invert"
          style={{
            background: `rgba(0,0,0,0.0)`,
          }}
        >
          <div className="absolute bottom-0 flex flex-col justify-center items-center p-5 font-bold font-mono gap-2 text-white">
            <FaAngleDown className="animate-bounce text-xl" />
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-full h-full">
              <Canvas>
                <RandomDecoration />
              </Canvas>
            </div>
          </div>
          <motion.div
            ref={scrollableContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 items-center gap-5 overflow-x-hidden px-20"
          >
            {projects.map((item, index) => (
              <motion.div
                key={index}
                className="border rounded-tr-xl border-white flex flex-col justify-between min-w-96 max-w-96 min-h-72 hover:scale-105 hover:bg-white hover:text-three transition-all cursor-pointer relative group overflow-hidden"
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <div className="flex justify-between p-2 font-bold relative z-20 border-b">
                  <p>#00{index}</p>
                  <p>{item.name}</p>
                </div>
                <div className="p-2 flex-1 flex items-start">
                  <p className="font-mono text-sm">{item.description}</p>
                </div>
                {/* <div className="p-2 flex justify-end border-t font-mono text-xs font-semibold">
                  <p>visit site</p>
                </div> */}
                <div className="absolute w-full h-full  items-center justify-center group-hover:flex hidden z-20 bg-white font-mono text-sm">
                  <div className="p-2 border">
                    {item.link !== "" ? (
                      <div className="flex items-center gap-2">
                        <MdArrowOutward />
                        <p>Preview</p>
                      </div>
                    ) : (
                      <p>404 Not Found</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
