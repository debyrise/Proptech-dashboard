import { useRef } from "react";
import { Play } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", blue: 35, green: 28, red: 10 },
  { month: "Feb", blue: 28, green: 30, red: 12 },
  { month: "Mar", blue: 15, green: 20, red: 6 },
  { month: "Apr", blue: 18, green: 25, red: 8 },
  { month: "May", blue: 12, green: 22, red: 5 },
  { month: "Jun", blue: 40, green: 48, red: 9 },
  { month: "Jul", blue: 24, green: 35, red: 6 },
  { month: "Aug", blue: 22, green: 28, red: 7 },
  { month: "Sep", blue: 36, green: 32, red: 8 },
//   { month: "Oct", blue: 30, green: 26, red: 6 },
//   { month: "Nov", blue: 34, green: 29, red: 5 },
//   { month: "Dec", blue: 38, green: 33, red: 8 },
];

const SalesChart = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Play Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-gray-300 p-2 shadow hover:bg-gray-100"
      >
        <Play size={12} />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
      >
        {/* Give the chart a fixed width so only Jan–Sep fits in view */}
        <div className="h-[200px] w-[96%]"> {/* Adjust width to fit 9 months */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barSize={8}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 50]}
                ticks={[0, 10, 20, 30, 40, 50]}
                tickFormatter={(v) => `${v}m`}
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="blue" fill="#2563eb" radius={[2, 2, 0, 0]} />
              <Bar dataKey="green" fill="#22c55e" radius={[2, 2, 0, 0]} />
              <Bar dataKey="red" fill="#ef4444" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
