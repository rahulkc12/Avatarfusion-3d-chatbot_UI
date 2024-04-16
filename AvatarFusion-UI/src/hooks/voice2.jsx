import React, { useState, useEffect } from "react";
import { useChat } from "../hooks/useChat";

const Voice = () => {
  const { chat } = useChat();
  const [listening, setListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  useEffect(() => {
    let recognition = null;

    const startRecognition = () => {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
        chat(transcript); // Send recognized text to backend
        recognition.stop(); // Stop recognition after successful result
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error occurred: ", event.error);
        setListening(false);
      };

      recognition.onend = () => {
        setListening(false);
        recognition = null; // Clean up recognition instance
      };

      recognition.start();
    };

    if (listening) {
      startRecognition();
    }

    return () => {
      if (recognition) {
        recognition.stop(); // Stop recognition on component unmount
      }
    };
  }, [chat, listening]);

  return (
    <div>
      <button onClick={() => setListening(true)} disabled={listening}>
        {listening ? "Listening..." : "Start Listening"}
      </button>
      {recognizedText && <p>Recognized Text: {recognizedText}</p>}
    </div>
  );
};

export default Voice;
