import { ReactElement } from "react";

type ParallaxImageProps = {
  header: string;
  description: string;
  image: string;
  icons: ReactElement[];
  imageSide: "R" | "L";
};

const ParallaxImage = ({
  header,
  description,
  icons,
  image,
  imageSide,
}: ParallaxImageProps) => {
  return (
    <div
      className={`py-10 flex ${
        imageSide === "R" ? "flex-row" : "flex-row-reverse"
      } [view-timeline-name:--parallax-wrapper]`}
    >
      <div className="flex w-1/2 justify-center p-10">
        <div className="flex flex-col  parallax-image gap-3">
          <p className="text-size-sub-header font-serif font-semibold">
            {header}
          </p>
          <p className="max-w-80 text-slate-700">{description}</p>
          <div className="flex gap-5 text-size-sub-header text-icons">
            {icons.map((item: any) => item)}
          </div>
        </div>
      </div>
      <div className="p-10 w-1/2 z-20">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ParallaxImage;
