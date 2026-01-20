import axiosInstance from "../axiosMiddleware";

const getChatsData = async () => {
  try {
    const response = await axiosInstance.get("/chat/chats");

    return response?.data;
  } catch (error) {
    console.log("Failed to fetch chats data", error);
  }
};

export default getChatsData;
