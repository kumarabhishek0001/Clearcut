import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="px-4 lg:px-44 py-12 sm:py-16">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background
        <br />
        image in seconds
      </h1>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 mt-8 sm:mt-12">
        {/* Step 1 */}
        <div className="flex items-start gap-3 bg-white border border-gray-200 drop-shadow-md p-4 sm:p-5 rounded w-full md:flex-1 min-w-0">
          <img
            className="w-6 sm:w-7 shrink-0"
            src={assets.upload_icon}
            alt=""
          />
          <div>
            <p className="text-sm sm:text-base font-medium">
              Upload background
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later.This is a demo...
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-3 bg-white border border-gray-200 drop-shadow-md p-4 sm:p-5 rounded w-full md:flex-1 min-w-0">
          <img
            className="w-6 sm:w-7 shrink-0"
            src={assets.remove_bg_icon}
            alt=""
          />
          <div>
            <p className="text-sm sm:text-base font-medium">
              Remove background
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later.This is a demo...
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-3 bg-white border border-gray-200 drop-shadow-md p-4 sm:p-5 rounded w-full md:flex-1 min-w-0">
          <img
            className="w-6 sm:w-7 shrink-0"
            src={assets.download_icon}
            alt=""
          />
          <div>
            <p className="text-sm sm:text-base font-medium">
              Download image
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later.
              
              This is a demo...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;