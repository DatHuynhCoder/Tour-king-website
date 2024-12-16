import React, { useEffect, useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer} from "recharts"
import axios from "axios";
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
];

function Dailymetric() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8800/get-income-by-day').then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])  
  return (
    <>
      <div className = "admin-topcard">
        <h3>Doanh thu theo ngày</h3>
        <span>{data[data.length - 1]?.NgayMua?.slice(0, 10)} đến {data[0]?.NgayMua?.slice(0, 10)}</span>
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
              dataKey= "ThuNhap"
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