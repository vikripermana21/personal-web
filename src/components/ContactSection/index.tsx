import { AnimatePresence, useInView, motion } from "motion/react";
import { useMemo, useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  const contactList = useMemo(
    () => [
      {
        name: "vkrprmn",
        type: "instagram",
        url: "https://www.instagram.com/vkrprmn",
      },
      {
        name: "vikri permana",
        type: "linkedin",
        url: "https://www.linkedin.com/in/vikri-permana-37b088255/",
      },
      {
        name: "vikripermana21",
        type: "github",
        url: "https://github.com/vikripermana21",
      },
      {
        name: "vikripermana91@gmail.com",
        type: "email",
        url: "mailto://vikripermana91@gmail.com",
      },
    ],
    []
  );
  return (
    <div
      ref={ref}
      className="w-screen h-screen mt-[-100vh] bg-three z-20 relative flex items-center justify-center font-mono text-white "
    >
      <div className="absolute bottom-0 w-full flex justify-center p-2 text-white font-mono font-extralight">
        <p>Made with ❤️ - Vikri Permana 2025</p>
      </div>
      <div className="flex-col gap-5">
        {contactList.map((item, index) => (
          <AnimatePresence mode="wait">
            {isInView && (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="text-7xl font-serif font-bold relative w-fit group cursor-pointer"
                onClick={() => window.open(item.url, "_blank")}
              >
                <p>{item.name}</p>
                <div className="absolute bottom-0 h-2 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-all origin-left"></div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
