import { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

// Gemini API configuration - using Google AI Studio endpoint
const API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY ||
  "AIzaSyC2KtK0V5m3yWdVlQjAa-8k0h97XALP4EE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI về Cạnh tranh – Độc quyền – Điều tiết Nhà nước trong môn Kinh tế học chính trị Mác – Lênin. Bạn có câu hỏi gì về chủ đề này không?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Rate limiting: tối thiểu 2 giây giữa các request
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < 2000) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⏳ Vui lòng chờ 2 giây trước khi gửi câu hỏi tiếp theo.",
        },
      ]);
      return;
    }

    setLastRequestTime(now);

    const userMessage = input.trim();
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // Create context-aware prompt for Gemini
      const prompt = `Bạn là một trợ lý AI thân thiện và hữu ích. Hãy trả lời câu hỏi sau một cách ngắn gọn, chính xác và dễ hiểu.

Câu hỏi: ${userMessage}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("RATE_LIMIT");
        }
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: text,
        },
      ]);
    } catch (error) {
      console.error("Gemini API Error:", error);

      let errorMessage =
        "Xin lỗi, tôi gặp lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại sau. 🙏";

      if (error.message === "RATE_LIMIT") {
        errorMessage =
          "⏱️ Bạn đã gửi quá nhiều yêu cầu! Vui lòng chờ 1 phút rồi thử lại. (Giới hạn: 60 requests/phút)";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Chiến dịch diễn ra khi nào?",
    "Ai là người chỉ huy?",
    "Tô Vĩnh Diện là ai?",
    "Ý nghĩa của chiến thắng?",
  ];

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button
        className={`chat-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat với AI"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-content">
              <span className="chat-icon">🤖</span>
              <div>
                <h3>Trợ lý AI</h3>
                <p>Cạnh tranh – Độc quyền – Điều tiết Nhà nước</p>
              </div>
            </div>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="suggested-questions">
              <p className="suggestions-title">💡 Câu hỏi gợi ý:</p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggestion-button"
                  onClick={() => {
                    setInput(question);
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Đặt câu hỏi của bạn..."
              rows="1"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Gửi tin nhắn"
            >
              {isLoading ? "⏳" : "📤"}
            </button>
          </div>

          <div className="chat-footer">
            <small>
              🤖 Trợ lý AI Cạnh tranh – Độc quyền – Điều tiết Nhà nước
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
