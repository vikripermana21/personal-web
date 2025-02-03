import { Canvas } from "@react-three/fiber";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useMemo, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import RandomDecoration from "../RandomDecoration";

const ProjectSection = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const scrollableContent = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    scrollableContent.current.scrollTo(latest * 1500, 0);
  });
  //   const { animateCursor } = useCursorContext();
  //   const mouseEnterHandler = () => {
  //     animateCursor("buttonHover");
  //   };

  const projects = useMemo(() => {
    return [
      {
        name: "Portfolio v1",
        description:
          "Here's my first portfolio, created during my high school days. It was a playground for me to practice HTML and CSS, exploring the basics of web design. Though simple, it marked the beginning of my coding journey and laid the foundation for my future projects.",
        // image: Project1,
        // icons: [
        //   <RiReactjsLine className="hover:text-react transition-all" />,
        //   <SiStyledcomponents className="hover:text-styled-components transition-all" />,
        //   <RiBootstrapFill className="hover:text-bootstrap transition-all" />,
        // ],
        link: "https://vikripermana21.github.io/portfolio/",
      },
      {
        name: "Portfolio v2",
        description:
          "This portfolio represents my second endeavor in web design, crafted purely for enjoyment and as a platform for experimentation. It served as a playground for me to apply newfound knowledge and techniques acquired along my learning journey.",
        // image: Project2,
        // icons: [
        //   <RiVuejsLine className="hover:text-vue transition-all" />,
        //   <SiTailwindcss className="hover:text-tailwind transition-all" />,
        //   <FiFramer className="hover:text-framer transition-all" />,
        // ],
        link: "https://vikripermana21.vercel.app",
      },
      {
        name: "Snekkk",
        description:
          "This is a non-commercial Spotify clone for educational purposes, showcasing basic music streaming functionalities. It's designed to help me learn web development through a practical project. Sadly :(, i cannot release this one due to Spotify permission",
        // image: Project3,
        // icons: [
        //   <RiReactjsLine className="hover:text-react transition-all" />,
        //   <SiTailwindcss className="hover:text-tailwind transition-all" />,
        //   <FiFramer className="hover:text-framer transition-all" />,
        // ],
        link: "",
      },
      {
        name: "First Ever 3D Web",
        description:
          "Utilizing React and Three.js, I developed a simple `hello world` 3D web application that seamlessly integrates dynamic user interfaces with real-time 3D graphics.",
        // image: Project4,
        // icons: [
        //   <RiReactjsLine className="hover:text-react transition-all" />,
        //   <TbBrandThreejs className="hover:text-three transition-all" />,
        // ],
        link: "https://hello-world-olive-two.vercel.app/",
      },
    ];
  }, []);
  return (
    <div ref={ref} className="h-[400vh] text-white relative">
      <div className="h-screen w-screen sticky flex justify-center items-center top-0">
        <div className="h-1/2 w-full flex bg-three p-5">
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
                // onMouseEnter={mouseEnterHandler}
                className="border rounded-tr-xl border-white flex flex-col justify-between min-w-96 max-w-96 min-h-72 hover:scale-105 hover:bg-white hover:text-three transition-all cursor-pointer"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute bottom-0 flex flex-col justify-center items-center p-5 font-bold font-mono gap-2 text-three">
          <p>Scroll Down</p>
          <FaAngleDown className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
