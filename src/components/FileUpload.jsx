import axios from "axios";
import "../index.css";

export default function FileUpload({ setData }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat/upload",
        formData,
      );
      setData(res.data);
    } catch (err) {
      alert("Failed to analyze chat file");
    }
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
