import { useMutation, useQueryClient } from "@tanstack/react-query";
import "../index.css";
import chatUpload from "../services/chat/chatUpload";
import toast from "react-hot-toast";

export default function FileUpload() {
  const queryClient = useQueryClient();

  const uploadMutation = useMutation({
    mutationFn: chatUpload,
    onSuccess: (data) => {
      toast.success(data.message || "Chat uploaded successfully");
      queryClient.invalidateQueries(["chats"]);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to upload chat");
    },
  });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    uploadMutation.mutate(file);
  };

  return (
    <div className="upload-box">
      <label className="upload-btn">
        Upload WhatsApp Chat (.txt)
        <input type="file" accept=".txt" onChange={handleUpload} hidden />
      </label>
    </div>
  );
}
