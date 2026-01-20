import { useMutation } from "@tanstack/react-query";
import "../index.css";
import chatUpload from "../services/chat/chatUpload";
import toast from "react-hot-toast";

export default function FileUpload({ setData }) {
  const uploadMutation = useMutation({
    mutationFn: chatUpload,
    onSuccess: (data) => {
      toast.success(data.message || "Chat uploaded successfully");
      setData(data);
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

      {uploadMutation.isLoading && <p>Uploading...</p>}
      {uploadMutation.isError && <p style={{ color: "red" }}>Upload failed!</p>}
      {uploadMutation.isSuccess && <p>Upload successful!</p>}
    </div>
  );
}
