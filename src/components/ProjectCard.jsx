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
    institutionLogo,
    links = [], // Accept a list of links with name and url
}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () =>
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    // Check if the current image is a video
    const isVideo = images[currentImage]?.endsWith(".mp4");
    const isEndDate = endDate !== "";

    return (
        <div className="flex items-center mx-auto my-6 max-w-full lg:max-w-screen-xl">
            {/* Institution logo outside the card on the left */}
            <div className="flex-shrink-0 mr-6 hidden lg:block">
                <img
                    src={institutionLogo}
                    alt="Institution Logo"
                    className="w-24 h-24 object-contain"
                />
            </div>

            {/* Project card */}
            <div className="bg-white rounded-lg shadow-md p-8 w-full transition hover:shadow-xl hover:bg-sky-50">
                {/* Layout: text left, media right on large screens */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Text section */}
                    <div className="flex flex-col justify-between lg:w-2/3">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">{name}</h2>
                            <p className="text-gray-700 mb-6">{summary}</p>

                            <button
                                onClick={() => setShowDetails((prev) => !prev)}
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-8 rounded-lg text-sm font-medium shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                {showDetails ? "Hide Details ▲" : "Show Details ▼"}
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden mt-6 ${showDetails ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <p className="text-gray-600 italic text-sm">{techDetails}</p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <kbd
                                        key={tech}
                                        className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md"
                                    >
                                        {tech}
                                    </kbd>
                                ))}
                            </div>
                        </div>

                        <div className="text-right text-gray-900 text-lg mt-6">
                            <p>
                                {isEndDate ? (
                                    `${startDate} → ${endDate}`
                                ) : (
                                    startDate
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Media section (image carousel or video) */}
                    <div className="relative lg:w-1/2 w-full p-15">
                        {isVideo ? (
                            <video
                                controls
                                className="w-full rounded-lg object-cover shadow-lg"
                                src={images[currentImage]}
                            />
                        ) : (
                            <img
                                src={images[currentImage]}
                                alt={name}
                                className="w-full rounded-lg object-cover shadow-lg"
                            />
                        )}

                        {/* Buttons for navigation */}
                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 focus:outline-none"
                            onClick={prevImage}
                        >
                            ◀
                        </button>
                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 focus:outline-none"
                            onClick={nextImage}
                        >
                            ▶
                        </button>
                    </div>
                </div>

                {/* Relevant Links */}
                {links.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-4">Relevant Links:</h3>
                        <div className="space-y-2">
                            {links.map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 pr-15"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
