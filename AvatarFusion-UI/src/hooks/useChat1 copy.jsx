import { createContext, useContext, useEffect, useState } from "react";

const backendUrl = "http://localhost:3000";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  // State variables for managing chat data
  const [response, setResponse] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);

  const chat = async (message) => {
    setLoading(true);
    try {
      console.log("Sending message to server:", message);
      const data = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify( {message} ),
      });
     
      const responseData = await data.json();
      const resp = responseData.response;
      console.log('respond message',resp.text)
  console.log("Received response from server:", resp);
  setResponse((response) => [...response, ...resp]);
} catch (error) {
  console.error("Error occurred while sending message:", error);
}finally {
    setLoading(false);
}
  };
  {/*
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);
*/}
  const onMessagePlayed = () => {
    setResponse((response) => response.slice(1));
  };

  useEffect(() => {
    if (response.length > 0) {
      setResponse(response[0]);
    } else {
      setResponse(null);
    }
  }, [response]);

  return (
    <ChatContext.Provider
      value={{
        chat,
        message,
        onMessagePlayed,
        loading,
        cameraZoomed,
        setCameraZoomed,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
