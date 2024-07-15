import React from 'react';

// Define the props for the loading indicator component. 
// I left this empty as per the Vue component.
interface LoadingIndicatorProps {
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = (props: LoadingIndicatorProps) => {
    return (
        // Replace v-progress-circular with a div and used some Tailwind CSS classes to style the div.
        <div id="loadingContainer" className="flex flex-col items-center">
            <div className="loader bg-green-500"></div> 
        </div>
    );
}

export default LoadingIndicator;

