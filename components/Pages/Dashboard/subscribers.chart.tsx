"use client";
// import { subscribersAnalytics } from "@/actions/subscribers.analytics";
// import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { data } from "@/constants";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface subscribersAnalyticsData {
  month: string;
  count: string;
}

const SubscribersChart = () => {



//   const { subscribersData, loading } = useSubscribersAnalytics();

//   const data: subscribersAnalyticsData[] = [];

//   subscribersData &&
//     subscribersData?.last7Months?.forEach((item: subscribersAnalyticsData) => {
//       data.push({
//         month: item?.month,
//         count: item?.count,
//       });
    // });


  return (
    <div className="my-5 p-5 border border-a-4 rounded bg-a-2 text-a-1 w-full md:h-[55vh] xl:h-[60vh]">
      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>
      {/* {loading ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <h5>Loading...</h5>
        </div>
      ) : ( */}
        <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1"/>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="natural"
              dataKey="count"
              stroke="#EB4898"
              fill="#EB4898"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      {/* )} */}
    </div>
  );
};

export default SubscribersChart;