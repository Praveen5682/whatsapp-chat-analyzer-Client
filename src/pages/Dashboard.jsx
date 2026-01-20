import { useEffect, useState } from "react";
import "../index.css";
import FileUpload from "../components/FileUpload";
import UserActivityChart from "../components/UserActivityChart";
import ActiveUsersList from "../components/ActiveUsersList";

const dummyData = {
  graphData: [
    { date: "Mon", activeUsers: 12, newUsers: 3 },
    { date: "Tue", activeUsers: 18, newUsers: 2 },
    { date: "Wed", activeUsers: 10, newUsers: 1 },
    { date: "Thu", activeUsers: 22, newUsers: 4 },
    { date: "Fri", activeUsers: 25, newUsers: 5 },
    { date: "Sat", activeUsers: 8, newUsers: 0 },
    { date: "Sun", activeUsers: 15, newUsers: 2 },
  ],
  active4DaysUsers: ["Praveen Kumar", "John Doe", "Anitha", "Rahul"],
};

export default function Dashboard() {
  const [data, setData] = useState(null);

  // Load dummy data on page load
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <div className="container">
      <h1>WhatsApp Chat Analyzer</h1>
      <p className="subtitle">
        Upload a WhatsApp group chat export to analyze last 7 days activity
      </p>

      <FileUpload setData={setData} />

      {data && (
        <div className="flex-chart">
          {/* Chart */}
          <UserActivityChart data={data.graphData} />

          {/* Active users */}
          <div className="card">
            <h2 className="card-title">Users Active for 4+ Days</h2>
            <ActiveUsersList users={data.active4DaysUsers} />
          </div>
        </div>
      )}
    </div>
  );
}
