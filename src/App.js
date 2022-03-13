import { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ChartOptions from "./components/ChartOptions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// dummy data
const data1 = [
  {
    name: "Held",
    amt: 700,
  },
  {
    name: "Staked",
    amt: 200,
  },
  {
    name: "Burned",
    amt: 100,
  },
];

const data2 = [
  {
    name: "Held",
    amt: 20,
  },
  {
    name: "Staked",
    amt: 900,
  },
  {
    name: "Burned",
    amt: 80,
  },
];

function App() {
  const [graphData, setGraphData] = useState(data1);

  // simple function that swaps between two static datasets
  const graphChangeHandler = () => {
    if (graphData === data1) {
      setGraphData(data2);
    } else {
      setGraphData(data1);
    }
  };

  // render method for bar chart (variable data source)
  const renderBarChart = (
    <BarChart
      width={600}
      height={300}
      data={graphData}
      margin={{
        top: 20,
        right: 60,
        left: 30,
        bottom: 5,
      }}
    >
      <Bar dataKey="amt" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );

  // refresh the DOM whenever graphData changes (log for debugging)
  useEffect(() => {
    console.log("graph data is: ", graphData);
  }, [graphData]);

  return (
    <div className="bg-gradient-to-tr from-sol_black to-sol_primary h-screen overflow-y-auto">
      <Header />
      <Profile />

      <div className="flex items-center py-4">
        {/* options on left */}
        <div className="mx-12 block">
          <ChartOptions
            id="1"
            title="MINTED"
            description="All NFTs minted at the collection's genesis date."
          />
          <ChartOptions
            id="2"
            title="STAKED"
            description="All NFTs currently staked with known staking mechanisms."
          />
          <ChartOptions
            id="3"
            title="BURNED"
            description="All NFTs removed from total supply via burning mechanisms."
          />
          <ChartOptions
            id="4"
            title="HELD"
            description="All NFTs held in wallets."
          />
        </div>
        {/* chart on right */}
        <div className="breakdown ml-auto">{renderBarChart}</div>
      </div>
    </div>
  );
}

export default App;
