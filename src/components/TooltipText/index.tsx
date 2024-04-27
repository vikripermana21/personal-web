import React from "react";

const TooltipText = ({ text, tooltip }: { text: string; tooltip: string }) => {
  return (
    <div className="relative group cursor-pointer hover:underline">
      <p className="group">{text}</p>
      <div className="absolute z-20 opacity-0 group-hover:opacity-100 -top-full bg-framer px-3 py-1 text-white text-[12px]">
        <p>{tooltip}</p>
      </div>
    </div>
  );
};

export default TooltipText;
