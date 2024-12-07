// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import ImageSlider from "../utilities/ImageSlider";

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, sender: "You" },{ text: "Welcome", sender: "System" }]);
//       setInput("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSend();
//     }
//   };

//   return (
//     <>
//     <ImageSlider/>
//     <section id="chat" className="p-4 bg-gray-100">
//       <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
//         Message <FontAwesomeIcon icon={faComments} className="ml-2 text-gray-600" />
//       </h2>

//       {/* Messages Container */}
//       <div
//         id="chat-messages"
//         className="bg-white border rounded-md shadow-md p-4 h-80 overflow-y-auto space-y-4"
//       >
//         {messages.length === 0 ? (
//           <p className="text-gray-500 text-center">No messages yet...</p>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-md ${
//                 msg.sender === "You"
//                   ? "bg-blue-500 text-white self-end text-right"
//                   : "bg-green-400 text-white self-start"
//               }`}
//             >
//               <span>{msg.sender}: </span>
//               <span>{msg.text}</span>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Chat Input */}
//       <div className="flex mt-4">
//         <input
//           type="text"
//           id="message-input"
//           placeholder="Type your message..."
//           className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//         <button
//           id="send-btn"
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
//           onClick={handleSend}
//         >
//           <FontAwesomeIcon icon={faPaperPlane} />
//         </button>
//       </div>
//     </section>
//     </>
    
//   );
// };

// export default Chat;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../utilities/ImageSlider";
import axios from "axios"; // Install axios using: npm install axios

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_VMIS_CHAT_API_KEY
  console.log(apiKey);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "You" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      try {
        setLoading(true);
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo", // Adjust model if necessary
            messages: [
              ...messages.map((msg) => ({
                role: msg.sender === "You" ? "user" : "assistant",
                content: msg.text,
              })),
              { role: "user", content: input },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              
            },
            
          }
        );

        const aiMessage = response.data.choices[0].message.content;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: aiMessage, sender: "System" },
        ]);
      } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "An error occurred. Please try again.", sender: "System" },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <ImageSlider />
      <section id="chat" className="p-4 bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          Message{" "}
          <FontAwesomeIcon icon={faComments} className="ml-2 text-gray-600" />
        </h2>

        {/* Messages Container */}
        <div
          id="chat-messages"
          className="bg-white border rounded-md shadow-md p-4 h-80 overflow-y-auto space-y-4"
        >
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">No messages yet...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white self-end text-right"
                    : "bg-green-400 text-white self-start"
                }`}
              >
                <span>{msg.sender}: </span>
                <span>{msg.text}</span>
              </div>
            ))
          )}
          {loading && (
            <p className="text-gray-500 text-center">Thinking...</p>
          )}
        </div>

        {/* Chat Input */}
        <div className="flex mt-4">
          <input
            type="text"
            id="message-input"
            placeholder="Type your message..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            id="send-btn"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            onClick={handleSend}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Chat;
