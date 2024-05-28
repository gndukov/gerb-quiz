import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

export const Graph = ({ text, incorrect, correct }) => {
    const total = correct + incorrect;
    const correctPercentage = total === 0 ? 0 : (correct / total) * 100;
    const incorrectPercentage = total === 0 ? 0 : (incorrect / total) * 100;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        backgroundColor: "transparent", // Set background to transparent
        animationEnabled: true,
        title: {
            text,
            fontColor: "white", // Set title color to white
        },
        data: [{
            type: "doughnut",
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            indexLabelFontColor: "white",
            dataPoints: [
                { y: correctPercentage, name: "Вярни", color: "blue" },
                { y: incorrectPercentage, name: "Грешни", color: "red" }
            ]
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
        </div>
    );
};
