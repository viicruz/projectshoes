import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    data: '01/03/2023',
    "Calçados vendidos": Math.floor(Math.random() * 1000) + 250,
  },
  {
    data: "02/03/2023",
    "Calçados vendidos": Math.floor(Math.random() * 1000) + 250,
  },
  {
    data: "03/03/2023",
    "Calçados vendidos": Math.floor(Math.random() * 1000) + 250,
  },
  {
    data: "04/03/2023",
    "Calçados vendidos": Math.floor(Math.random() * 1000) + 250,
  },
  {
    data: "05/03/2023",
    "Calçados vendidos": Math.floor(Math.random() * 1000) + 250,
  }
];

export default function Charts() {
  return (
    <div className="w-full p-4 flex flex-col justify-start items-start">
      <h2>Vendas de Calçados por dia: </h2>
      <div className="w-full h-96 flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Calçados vendidos" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
