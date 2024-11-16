import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts"

const data = [
    {
        cost: 1000,
    },
    {
        cost: 1005,
    },
    {
        cost: 1500,
    },
    {
        cost: 2600,
    },
    {
        cost: 2650,
    },
    {
        cost: 1000,
    },
    {
        cost: 1600,
    },
    {
        cost: 1600,
    },
    {
        cost: 1600,
    },
    {
        cost: 1600,
    },
    {
        cost: 1600,
    }
];

function Dailymetric() {
    return (
        <>
            <div className = "admin-topcard">
                <h3>Daily cost</h3>
                <span>Tháng 9 2024 - Tháng 10 2024</span>
                <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id = "colorcost" x1="0"  y1="0" x2="0" y2="1">
                                <stop offset="30%" stopColor="#8884d8" stopOpacity={0.4} />
                                <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.2}/>

                            </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area 
                            type = "monotone"
                            dataKey= "cost"
                            stroke="#8884d8"
                            strokeWidth={2}
                            strokeOpacity={1}
                            fill="url(#colorcost)"
                        />
                            
                        
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Dailymetric;