import React, { useState } from 'react';

// WorkExperienceCard component that reveals more details on toggle
function WorkExperienceCard({
    companyLogo,
    companyName,
    role,
    location,
    startDate,
    endDate,
    summary,
    roleOverview,
    tasks,
    techStack,
    keywords
}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="work-experience-card bg-white shadow-lg rounded-lg mb-6 p-6">
            {/* Grid Layout for logo and company name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <h3 className="text-2xl font-semibold text-blue-800">{companyName}</h3>
                    <p className="text-lg text-gray-600">{role}</p>
                    <p className="text-sm text-gray-500">{location}</p>
                    <p className="text-sm text-gray-500">{startDate} - {endDate}</p>
                </div>
                <div className="flex justify-end">
                    <img
                        src={companyLogo}
                        alt={`${companyName} Logo`}
                        className="w-auto h-16 max-w-full object-contain"
                    />
                </div>
            </div>

            {/* Toggle button for showing more details */}
            <button
                className="text-blue-600 text-sm font-medium"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? 'Show Less' : 'Show More'}
            </button>

            {/* Show more details when toggled */}
            {showDetails && (
                <div className="mt-4">
                    {/* Summary */}
                    <p className="text-gray-700 mb-4 font-semibold">{summary}</p>

                    {/* Detailed Role Overview */}
                    <p className="text-gray-700 mb-4">{roleOverview}</p>

                    {/* Bullet Points for Key Tasks and Achievements */}
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>

                    {/* Technology Stack tags */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-200 text-blue-800 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Keywords tags */}
                    <div className="mt-4">
                        <p className="font-semibold">Keywords:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkExperienceCard;

