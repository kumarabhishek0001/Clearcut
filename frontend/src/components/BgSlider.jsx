
import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="px-4 mt-10 sm:mt-20">
      {/* Title */}
      <h1 className="mb-12 sm:mb-20 text-center text-2xl sm:text-3xl font-semibold leading-snug bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove Background With
        <br />
        High Quality and Accuracy
      </h1>

      {/* Image comparison container */}
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl">

        {/* Background image */}
        <img
          src={assets.image_w_bg}
          alt="Image with background"
          className="block w-full h-auto"
        />

        {/* Foreground image */}
        <img
          src={assets.image_wo_bg}
          alt="Image without background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        />

        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-20 slider"
          style={{
            appearance: "none",
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default BgSlider;
