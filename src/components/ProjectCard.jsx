import React, { useState } from "react";
import ReactPlayer from "react-player";

export function ProjectCard({
  images,
  videoUrl,
  name,
  summary,
  techDetails,
  techStack,
  startDate,
  endDate,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  // Check if the current image is a video
  const isVideo = images[currentImage]?.endsWith(".mp4");

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mx-auto my-6 max-w-5xl transition hover:shadow-lg">
      {/* Layout: text left, media right on large screens */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Text section */}
        <div className="flex flex-col justify-between lg:w-3/4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-700 mb-4">{summary}</p>

            <button
              onClick={() => setShowDetails((prev) => !prev)}
              className="bg-blue-600 text-white py-1 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              {showDetails ? "Hide Details ▲" : "Show Details ▼"}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 ${
                showDetails ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 italic text-sm">{techDetails}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <kbd
                  key={tech}
                  className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-md"
                >
                  {tech}
                </kbd>
              ))}
            </div>
          </div>

          <div className="text-right text-gray-500 text-sm mt-6">
            <p>
              {startDate} → {endDate}
            </p>
          </div>
        </div>

        {/* Media section (image carousel or video) */}
        <div className="relative lg:w-1/4 w-full">
          {isVideo ? (
            <video
              controls
              className="w-full rounded-md object-cover"
              src={images[currentImage]}
            />
          ) : (
            <>
              <img
                src={images[currentImage]}
                alt={name}
                className="w-full rounded-md object-cover"
              />
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
                onClick={prevImage}
              >
                ◀
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
                onClick={nextImage}
              >
                ▶
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


export default ProjectCard;