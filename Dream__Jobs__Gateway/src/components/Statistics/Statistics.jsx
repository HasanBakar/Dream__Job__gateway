import React from "react";
import { PieChart, Pie,ResponsiveContainer,Tooltip } from "recharts";

const data = [
        {
            id: 1,
            assignment_name: "Milestone One",
            assignment_mark: 57
        },
        {
            id: 2,
            assignment_name: "Milestone Two",
            assignment_mark: 59
        },
        {
            id: 3,
            assignment_name: "Milestone Three",
            assignment_mark: 58
        },
        {
            id: 4,
            assignment_name: "Milestone Four",
            assignment_mark: 60
        },
        {
            id: 5,
            assignment_name: "Milestone Five",
            assignment_mark: 60
        },
        {
            id: 6,
            assignment_name: "Milestone Six",
            assignment_mark: 50
        },
        {
            id: 7,
            assignment_name: "Milestone Seven",
            assignment_mark: 60
        },
        {
            id: 8,
            assignment_name: "Milestone Eight",
            assignment_mark: 60
        }
    ];

const Statistics = () => {

    
// d.assignment_mark
// d.id
// d.assignment_name
    
    return (
       <div className="pie__chart__color text-center" >
        <h1 className="my-3">My all Assignment Marks in a pie chart</h1>
        <div className="flex justify-center items-center" >
            <PieChart width={400} height= {400}>
            <Pie
            dataKey="assignment_mark"
           
                data={data}
                isAnimationActive={true}
                startAngle={360}
                endAngle={0}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#22d3ee"
                label
                ></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
       </div>
    );
};

export default Statistics;