import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserActivityChart = ({ data }) => {
  if (!data) {
    return <p className="empty-text">No data available</p>;
  }

  return (
    <div className="card">
      <h2 className="card-title">Last 7 Days User Activity</h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={6}>
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />

          {/* Blue bar – Active users */}
          <Bar dataKey="activeUsers" name="Active Users" fill="#1e90ff" />

          {/* Orange bar – New users */}
          <Bar dataKey="newUsers" name="New Users" fill="#ffa500" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityChart;
