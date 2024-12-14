import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer} from "recharts"
import { BsThreeDots} from "react-icons/bs"

const data = [
    {
        name: "something",
        uv: 21.47,
        pv: 2400,
        fill: "#fdc5f5"
    },
    {
        name: "bamboo",
        uv: 25.4,
        pv: 2000,
        fill: "#f7aef8"
    },
    {
        name: "vienamairline",
        uv: 19,
        pv: 1000,
        fill: "#b388eb"
    }

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