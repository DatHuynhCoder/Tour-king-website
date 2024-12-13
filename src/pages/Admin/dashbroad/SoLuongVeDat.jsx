import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer} from "recharts"
import { BsThreeDots} from "react-icons/bs"

const data = [
    {
        name: "1-5",
        uv: 21.4,
        pv: 2400,
        fill: "#fdc5f5"
    },
    {
        name: "6-10",
        uv: 25.4,
        pv: 5000,
        fill: "#f7aef8"
    },
    {
        name: "11-15",
        uv: 19,
        pv: 1000,
        fill: "#b388eb"
    },
    {
        name: "16-20",
        uv: 50,
        pv: 2400,
        fill: "#82ca9d"
    },
    {
        name: "21-25",
        uv: 70,
        pv: 2400,
        fill: "#8093f1"
    },
    {
        name: "26-30",
        uv: 10,
        pv: 2400,
        fill: "#72ddf7"
    },

]

function MusicMetric() {
    return (
        <>
            <div className = "music_metric">
                <div className = "music_metric_info">
                    <div>
                        <h3>Monthly Cost</h3>
                        <span>Tháng 9 2024 - Tháng 10 2024</span>
                    </div>
                    <div className = "SLVD_icon">
                        <BsThreeDots />
                    </div>
                </div>
                <ResponsiveContainer width = "100%" height = "80%">
                    <RadialBarChart cx = "50%" cy = "50%" innerRadius="10%" outerRadius="70%" data = {data}>

                        <RadialBar minAngle={15} clocckWise dataKey="uv"/>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default MusicMetric;