import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-screen h-screen fixed top-0 -z-10"
        >
          <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 100] }}>
            <HeroSection />
          </Canvas>
        </motion.div>
      </AnimatePresence>
      {/* Hero Section */}
      {/* Text Section */}
      <div className="h-fit xl:h-[400vh] [view-timeline-name:--reveal-wrapper]">
        <div className="h-screen w-screen sticky top-0 flex items-center justify-center lg:p-72 p-3">
          <motion.div className="relative z-20">
            <p className="font-mono lg:text-[24px] text-[12px] font-semibold xl:reveal-text z-20">
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
          </motion.div>
        </div>
      </div>
      {/* End Text Section */}
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
