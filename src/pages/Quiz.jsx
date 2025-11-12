import { useState } from "react";
import "./Quiz.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizRef, quizVisible] = useScrollReveal({ triggerOnce: false });

  const questions = [
    {
      question: "Cạnh tranh trong kinh tế thị trường là gì?",
      options: [
        "Cuộc đấu tranh giữa các chủ thể kinh tế vì lợi nhuận",
        "Sự hợp tác giữa các doanh nghiệp",
        "Chính sách của nhà nước",
        "Hình thức độc quyền",
      ],
      correctAnswer: 0,
      explanation:
        "Cạnh tranh là cuộc đấu tranh giữa các chủ thể kinh tế nhằm giành được điều kiện sản xuất và tiêu thụ có lợi hơn, từ đó thu được lợi nhuận cao hơn. Đây là quy luật khách quan của kinh tế thị trường.",
    },
    {
      question: "Theo Lênin, độc quyền hình thành từ đâu?",
      options: [
        "Chính sách nhà nước",
        "Sự tập trung sản xuất và tư bản",
        "Cạnh tranh quốc tế",
        "Đầu tư nước ngoài",
      ],
      correctAnswer: 1,
      explanation:
        "Theo Lênin, độc quyền sinh ra từ sự tập trung sản xuất và tư bản đến một trình độ nhất định. 'Cạnh tranh tự do sinh ra sự tập trung sản xuất, và sự tập trung sản xuất ở trình độ phát triển nhất định lại dẫn đến độc quyền.'",
    },
    {
      question: "Cartel là hình thức độc quyền nào?",
      options: [
        "Sáp nhập hoàn toàn các doanh nghiệp",
        "Thỏa thuận về giá cả và phân chia thị trường",
        "Liên hiệp tiêu thụ chung",
        "Tập đoàn đa ngành",
      ],
      correctAnswer: 1,
      explanation:
        "Cartel (Các-ten) là hình thức độc quyền trong đó các doanh nghiệp độc lập thỏa thuận với nhau về giá cả, sản lượng, phân chia thị trường nhưng vẫn giữ tính độc lập về pháp lý và sản xuất.",
    },
    {
      question: "Vai trò tích cực của cạnh tranh là gì?",
      options: [
        "Tạo ra độc quyền",
        "Thúc đẩy tiến bộ kỹ thuật và đổi mới",
        "Làm phá sản doanh nghiệp",
        "Tăng giá cả hàng hóa",
      ],
      correctAnswer: 1,
      explanation:
        "Cạnh tranh có vai trò tích cực trong việc thúc đẩy tiến bộ kỹ thuật, buộc các nhà tư bản phải cải tiến công nghệ, nâng cao năng suất lao động, đa dạng hóa sản phẩm và cải thiện chất lượng để giành lợi thế cạnh tranh.",
    },
    {
      question: "Điều tiết nhà nước trong kinh tế là gì?",
      options: [
        "Nhà nước thay thế thị trường",
        "Can thiệp có chủ đích để định hướng và khắc phục mặt trái của thị trường",
        "Loại bỏ hoàn toàn cơ chế thị trường",
        "Tư nhân hóa tất cả doanh nghiệp",
      ],
      correctAnswer: 1,
      explanation:
        "Điều tiết nhà nước là sự can thiệp có chủ đích của nhà nước vào nền kinh tế thông qua các chính sách, công cụ nhằm định hướng, khắc phục hạn chế của cơ chế thị trường và thúc đẩy phát triển kinh tế - xã hội.",
    },
    {
      question:
        "Theo Lênin, có bao nhiêu dấu hiệu cơ bản của chủ nghĩa đế quốc?",
      options: ["3 dấu hiệu", "4 dấu hiệu", "5 dấu hiệu", "6 dấu hiệu"],
      correctAnswer: 2,
      explanation:
        "Lênin chỉ ra 5 dấu hiệu cơ bản của chủ nghĩa đế quốc: (1) Tập trung sản xuất tạo độc quyền, (2) Tư bản tài chính, (3) Xuất khẩu tư bản, (4) Liên minh độc quyền quốc tế, (5) Chia chác lãnh thổ thế giới.",
    },
    {
      question: "Luật Cạnh tranh của Việt Nam được ban hành năm nào?",
      options: ["2015", "2016", "2017", "2018"],
      correctAnswer: 3,
      explanation:
        "Luật Cạnh tranh năm 2018 của Việt Nam quy định về các hành vi cạnh tranh không lành mạnh, độc quyền, thỏa thuận hạn chế cạnh tranh và biện pháp xử lý, nhằm bảo vệ môi trường kinh doanh lành mạnh.",
    },
    {
      question: "Hậu quả tiêu cực của độc quyền là gì?",
      options: [
        "Thúc đẩy cạnh tranh",
        "Giảm giá hàng hóa",
        "Thao túng giá cả và kìm hãm tiến bộ kỹ thuật",
        "Tăng cường đổi mới sáng tạo",
      ],
      correctAnswer: 2,
      explanation:
        "Độc quyền gây ra hậu quả tiêu cực: thao túng giá cả để thu lợi nhuận siêu ngạch, kìm hãm tiến bộ kỹ thuật do thiếu áp lực cạnh tranh, và làm sâu sắc thêm mâu thuẫn giai cấp do tập trung của cải.",
    },
    {
      question: "Công cụ điều tiết kinh tế của nhà nước bao gồm?",
      options: [
        "Chỉ có công cụ hành chính",
        "Chỉ có công cụ kinh tế",
        "Cả công cụ hành chính và kinh tế",
        "Chỉ có thuế",
      ],
      correctAnswer: 2,
      explanation:
        "Nhà nước điều tiết kinh tế bằng cả công cụ hành chính (luật pháp, quy định, cấp phép) và công cụ kinh tế (chính sách tài khóa, tiền tệ, thuế, trợ cấp...). Trong nền kinh tế thị trường, ưu tiên sử dụng công cụ kinh tế.",
    },
    {
      question:
        "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?",
      options: [
        "Kinh tế kế hoạch hóa tập trung",
        "Kinh tế thị trường tự do hoàn toàn",
        "Kết hợp thị trường với định hướng xã hội chủ nghĩa",
        "Kinh tế tư bản chủ nghĩa",
      ],
      correctAnswer: 2,
      explanation:
        "Kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình vừa tôn trọng quy luật thị trường, vừa phát huy vai trò điều tiết của Nhà nước dưới sự lãnh đạo của Đảng, nhằm phát triển nhanh, bền vững và công bằng xã hội.",
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="quiz">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Kiểm Tra Kiến Thức
          </h1>
          <p className="hero-subtitle">
            Cạnh tranh - Độc quyền - Điều tiết Nhà nước
          </p>
          <p className="hero-date">Thử thách tri thức của bạn!</p>
        </div>
      </section>

      <div
        ref={quizRef}
        className={`quiz-container scroll-reveal ${
          quizVisible ? "revealed" : ""
        }`}
      >
        {showScore ? (
          <div className="score-section">
            <h2>🎉 Hoàn thành!</h2>
            <div className="score-display">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <p className="score-message">
              {score === questions.length &&
                "🏆 Xuất sắc! Bạn là chuyên gia về Cạnh tranh – Độc quyền – Điều tiết Nhà nước!"}
              {score >= questions.length * 0.8 &&
                score < questions.length &&
                "⭐ Rất tốt! Bạn có kiến thức vững về Cạnh tranh – Độc quyền – Điều tiết Nhà nước!"}
              {score >= questions.length * 0.6 &&
                score < questions.length * 0.8 &&
                "👍 Khá tốt! Hãy tìm hiểu thêm nhé!"}
              {score < questions.length * 0.6 &&
                "📚 Hãy đọc lại phần lý thuyết để hiểu rõ hơn!"}
            </p>
            <div className="score-actions">
              <button onClick={restartQuiz} className="btn-restart">
                🔄 Làm lại
              </button>
              <a href="/theory" className="btn-learn">
                📚 Học thêm
              </a>
            </div>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-header">
              <div className="question-count">
                <span className="current">{currentQuestion + 1}</span>
                <span className="total">/{questions.length}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="question-text">
              {questions[currentQuestion].question}
            </div>

            <div className="options-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={`option-button ${
                    selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : "incorrect"
                      : ""
                  } ${
                    showExplanation &&
                    index === questions[currentQuestion].correctAnswer
                      ? "correct"
                      : ""
                  }`}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {showExplanation &&
                    index === questions[currentQuestion].correctAnswer && (
                      <span className="checkmark">✓</span>
                    )}
                  {selectedAnswer === index &&
                    index !== questions[currentQuestion].correctAnswer && (
                      <span className="crossmark">✗</span>
                    )}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation-section">
                <h3>💡 Giải thích:</h3>
                <p>{questions[currentQuestion].explanation}</p>
                <button onClick={handleNextQuestion} className="btn-next">
                  {currentQuestion === questions.length - 1
                    ? "🏁 Xem kết quả"
                    : "➡️ Câu tiếp theo"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
