import React, { useState, useRef, useEffect } from "react";
import { VictoryChart, VictoryLine } from "victory";


const Dashboard = () => {
    return (
        <div className="Dashboard">
            <h2>Dashboard</h2>
            <div className="Graphs">
                <VictoryChart
                    style={{
                       parent: {background: "#fff"}
                    }}>
                    <VictoryLine
                        data={[
                            {x: 1, y: Math.sin(1)},
                            {x: 2, y: Math.sin(2)},
                            {x: 3, y: Math.sin(3)},
                            {x: 4, y: Math.sin(4)},
                            {x: 5, y: Math.sin(5)},
                            {x: 6, y: Math.sin(6)}
                        ]} />
                </VictoryChart>
                <VictoryChart
                    style={{
                       parent: {background: "#fff"}
                    }}>
                    <VictoryLine
                        data={[
                            {x: 1, y: Math.cos(1)},
                            {x: 2, y: Math.cos(2)},
                            {x: 3, y: Math.cos(3)},
                            {x: 4, y: Math.cos(4)},
                            {x: 5, y: Math.cos(5)},
                            {x: 6, y: Math.cos(6)}
                        ]} />
                </VictoryChart>
                <VictoryChart
                    style={{
                       parent: {background: "#fff"}
                    }}>
                    <VictoryLine
                        data={[
                            {x: 1, y: Math.log(1)},
                            {x: 2, y: Math.log(2)},
                            {x: 3, y: Math.log(3)},
                            {x: 4, y: Math.log(4)},
                            {x: 5, y: Math.log(5)},
                            {x: 6, y: Math.log(6)}
                        ]} />
                </VictoryChart>
                <VictoryChart
                    style={{
                       parent: {background: "#fff"}
                    }}>
                    <VictoryLine
                        data={[
                            {x: 1, y: Math.exp(1)},
                            {x: 2, y: Math.exp(2)},
                            {x: 3, y: Math.exp(3)},
                            {x: 4, y: Math.exp(4)},
                            {x: 5, y: Math.exp(5)},
                            {x: 6, y: Math.exp(6)}
                        ]} />
                </VictoryChart>
            </div>
        </div>
    );
}

export default Dashboard;
