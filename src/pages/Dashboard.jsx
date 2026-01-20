import { useState } from "react";
import "../index.css";
import FileUpload from "../components/FileUpload";
import UserActivityChart from "../components/UserActivityChart";
import ActiveUsersList from "../components/ActiveUsersList";

export default function Dashboard() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <h1>WhatsApp Chat Analyzer</h1>
      <p className="subtitle">
        Upload a WhatsApp group chat export to analyze last 7 days activity
      </p>

      <FileUpload setData={setData} />

      {data && (
        <>
          {/* Chart */}
          <UserActivityChart data={data.graphData} />

          {/* Active users */}
          <div className="card">
            <h2 className="card-title">Users Active for 4+ Days</h2>
            <ActiveUsersList users={data.active4DaysUsers} />
          </div>
        </>
      )}
    </div>
  );
}
