import "../index.css";
import FileUpload from "../components/FileUpload";
import UserActivityChart from "../components/UserActivityChart";
import ActiveUsersList from "../components/ActiveUsersList";
import { useQuery } from "@tanstack/react-query";
import getChatsData from "../services/chat/getChatsData";
import noDataImg from "../assets/no-data.png";

export default function Dashboard() {
  const { data } = useQuery({
    queryKey: ["chats"],
    queryFn: getChatsData,
  });

  const chats = data?.data || [];
  const latestChat = chats[0];

  return (
    <div className="container">
      <h1>WhatsApp Chat Analyzer</h1>
      <p className="subtitle">
        Upload a WhatsApp group chat export to analyze last 7 days activity
      </p>

      <FileUpload />

      {chats.length === 0 && (
        <div className="no-data">
          <img src={noDataImg} alt="No data available" />
          <p>No chat data available. Upload a WhatsApp chat to get started.</p>
        </div>
      )}
      {latestChat && (
        <div className="flex-chart">
          <UserActivityChart data={latestChat.graphData} />

          <div className="card">
            <h2 className="card-title">Users Active for 4+ Days</h2>
            <ActiveUsersList users={latestChat.active4DaysUsers} />
          </div>
        </div>
      )}
    </div>
  );
}
