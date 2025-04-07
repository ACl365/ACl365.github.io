'use client';

import React from 'react';
import Plotly from 'plotly.js'; // Optional: If you need direct access to Plotly methods
import type { PlotParams } from 'react-plotly.js';

// Dynamically import the Plot component from react-plotly.js
// This prevents the large Plotly library from being included in the main server bundle
// Note: The dynamic import happens here for clarity, but often it's done where the component is *used*
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'), {
    ssr: false, // Ensure it only renders on the client-side
});

interface PlotlyChartProps {
    data: PlotParams['data'];
    layout?: Partial<PlotParams['layout']>; // Make layout optional and partial
    config?: Partial<PlotParams['config']>; // Make config optional and partial
    className?: string; // Allow passing custom classes
}

const PlotlyChart: React.FC<PlotlyChartProps> = ({
    data,
    layout = {}, // Default to empty object if not provided
    config = {}, // Default to empty object if not provided
    className = '',
}) => {
    // Default layout settings for consistency (can be overridden by props)
    const defaultLayout: Partial<PlotParams['layout']> = {
        margin: { l: 40, r: 40, t: 40, b: 40 }, // Adjust margins
        paper_bgcolor: 'rgba(0,0,0,0)', // Transparent background
        plot_bgcolor: 'rgba(0,0,0,0)', // Transparent plot area
        font: {
            family: 'var(--font-inter)', // Use CSS variable for font consistency
            color: '#333', // Default text colour (adjust for dark mode later)
        },
        // Add other default layout options if desired
    };

    // Default config settings
    const defaultConfig: Partial<PlotParams['config']> = {
        displayModeBar: false, // Hide the mode bar by default
        responsive: true,
    };

    // Merge default and provided layout/config
    const finalLayout = { ...defaultLayout, ...layout };
    const finalConfig = { ...defaultConfig, ...config };

    return (
        <div className={`plotly-chart-container ${className}`}>
            <Plot
                data={data}
                layout={finalLayout}
                config={finalConfig}
                style={{ width: '100%', height: '100%' }} // Ensure plot fills container
                useResizeHandler={true} // Let react-plotly handle resizing
            />
        </div>
    );
};

export default PlotlyChart;