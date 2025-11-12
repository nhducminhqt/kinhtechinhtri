import "./Home.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Home() {
  const [introRef, introVisible] = useScrollReveal({ triggerOnce: false });
  const [statsRef, statsVisible] = useScrollReveal({ triggerOnce: false });
  const [significanceRef, significanceVisible] = useScrollReveal({
    triggerOnce: false,
  });
  const [quoteRef, quoteVisible] = useScrollReveal({ triggerOnce: false });
  const [ctaRef, ctaVisible] = useScrollReveal({ triggerOnce: false });

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Cạnh Tranh - Độc Quyền - Điều Tiết Nhà Nước
          </h1>
          <p className="hero-date">Kinh Tế Học Chính Trị Mác - Lênin</p>
          <p className="hero-subtitle">
            "Từ cạnh tranh đến độc quyền: Quy luật của chủ nghĩa tư bản"
          </p>
          <p className="hero-author">- V.I. Lênin</p>
        </div>
      </section>

      <section
        ref={introRef}
        className={`intro-section scroll-reveal ${
          introVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="intro-card">
            <h2>🏆 Hiểu Rõ Nền Kinh Tế Thị Trường</h2>
            <p className="intro-text">
              Cạnh tranh, độc quyền và điều tiết Nhà nước là ba phạm trù cơ bản
              trong nền kinh tế thị trường. Từ lý thuyết của Mác - Lênin đến
              thực tiễn Việt Nam, việc hiểu rõ mối quan hệ giữa ba yếu tố này
              giúp chúng ta nhận thức đầy đủ về bản chất của chủ nghĩa tư bản và
              con đường phát triển kinh tế thị trường định hướng xã hội chủ
              nghĩa ở Việt Nam.
            </p>
            <div className="intro-image">
              <img src="/dbp1.jpg" alt="Kinh tế thị trường" />
            </div>
          </div>
          <div
            ref={statsRef}
            className={`stats-grid scroll-reveal ${
              statsVisible ? "revealed" : ""
            }`}
          >
            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src="/clock.png"
                  alt="Cạnh tranh tự do"
                  className="stat-img"
                />
              </div>
              <div className="stat-number">🔄</div>
              <div className="stat-label">Cạnh tranh tự do</div>
              <div className="stat-detail">Giai đoạn CNTB ban đầu</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img src="/battle.png" alt="Độc quyền" className="stat-img" />
              </div>
              <div className="stat-number">🏢</div>
              <div className="stat-label">Độc quyền hình thành</div>
              <div className="stat-detail">Cuối thế kỷ 19</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <img
                  src="/earth.png"
                  alt="Điều tiết Nhà nước"
                  className="stat-img"
                />
              </div>
              <div className="stat-number">⚖️</div>
              <div className="stat-label">Điều tiết Nhà nước</div>
              <div className="stat-detail">Can thiệp vào kinh tế</div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={significanceRef}
        className={`significance-section scroll-reveal ${
          significanceVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <h2 className="section-title">🌟 Các Khái Niệm Cơ Bản</h2>

          <div className="significance-grid">
            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">🔄</span>
                <h3>Cạnh Tranh</h3>
              </div>
              <ul>
                <li>Đấu tranh giữa các chủ thể kinh tế vì lợi nhuận</li>
                <li>Động lực thúc đẩy phát triển sản xuất</li>
                <li>Từ cạnh tranh tự do đến cạnh tranh độc quyền</li>
                <li>Quy luật khách quan của kinh tế thị trường</li>
              </ul>
            </div>

            <div className="significance-card">
              <div className="card-header">
                <span className="card-icon">�</span>
                <h3>Độc Quyền</h3>
              </div>
              <ul>
                <li>Sự thống trị thị trường của các tập đoàn lớn</li>
                <li>Hình thành từ sự tập trung sản xuất và tư bản</li>
                <li>Kiểm soát giá cả và thu lợi nhuận siêu ngạch</li>
                <li>Đặc trưng của chủ nghĩa tư bản hiện đại</li>
              </ul>
            </div>

            <div className="significance-card highlight">
              <div className="card-header">
                <span className="card-icon">⚖️</span>
                <h3>Điều Tiết Nhà Nước</h3>
              </div>
              <ul>
                <li>Can thiệp của Nhà nước vào nền kinh tế</li>
                <li>Khắc phục mặt trái của cơ chế thị trường</li>
                <li>Bảo vệ cạnh tranh lành mạnh, hạn chế độc quyền</li>
                <li>Định hướng phát triển bền vững và công bằng</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={quoteRef}
        className={`quote-section scroll-reveal ${
          quoteVisible ? "revealed" : ""
        }`}
      >
        <div className="container">
          <div className="quote-card">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Độc quyền sinh ra từ cạnh tranh, cạnh tranh tự do sinh ra sự tập
              trung sản xuất, và sự tập trung sản xuất ở trình độ phát triển
              nhất định của nó dẫn đến độc quyền. Độc quyền là đặc trưng kinh tế
              cơ bản của chủ nghĩa tư bản giai đoạn cao nhất – chủ nghĩa đế
              quốc.
            </p>
            <p className="quote-author">
              — V.I. Lênin, "Chủ nghĩa đế quốc là giai đoạn cao nhất của CNTB"
            </p>
            <div className="intro-image">
              <img src="/anh_lenin_2.webp" alt="Kinh tế học chính trị" />
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`cta-section scroll-reveal ${ctaVisible ? "revealed" : ""}`}
      >
        <div className="container">
          <div className="cta-grid">
            <a href="/theory" className="cta-card">
              <span className="cta-icon">📚</span>
              <h3>Lý thuyết</h3>
              <p>Tìm hiểu chi tiết lý thuyết Mác - Lênin</p>
            </a>
            <a href="/practice" className="cta-card">
              <img src="/vn.png" alt="VN" className="flag-icon" />
              <h3>Thực tiễn VN</h3>
              <p>Ứng dụng tại Việt Nam</p>
            </a>
            <a href="/quiz" className="cta-card">
              <span className="cta-icon">🎲</span>
              <h3>Quiz</h3>
              <p>Kiểm tra kiến thức của bạn</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
