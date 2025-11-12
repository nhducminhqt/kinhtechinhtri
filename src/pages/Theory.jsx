import "./Theory.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Theory() {
  const [section1Ref, section1Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section2Ref, section2Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section3Ref, section3Visible] = useScrollReveal({
    triggerOnce: false,
  });
  const [section4Ref, section4Visible] = useScrollReveal({
    triggerOnce: false,
  });

  return (
    <div className="theory">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span> Lý Thuyết
          </h1>
          <p className="hero-subtitle">Kinh Tế Học Chính Trị Mác - Lênin</p>
          <p className="hero-date">
            "Từ cạnh tranh đến độc quyền - Quy luật của CNTB"
          </p>
        </div>
      </section>

      <div className="theory-timeline">
        {/* Section 1: Cạnh tranh */}
        <section
          ref={section1Ref}
          className={`content-section scroll-reveal ${
            section1Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">01</div>
          <h2>💥 Cạnh Tranh Trong Nền Kinh Tế Thị Trường</h2>

          <div className="content-body">
            <div className="timeline-container">
              {/* --- item 1 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>🎯 Khái Niệm Cạnh Tranh</h3>
                  <p>
                    Cạnh tranh là cuộc đấu tranh giữa các chủ thể kinh tế nhằm
                    giành điều kiện sản xuất và tiêu thụ thuận lợi, thu được lợi
                    nhuận cao hơn. Trong chủ nghĩa tư bản, cạnh tranh là quy
                    luật khách quan chi phối mọi hoạt động kinh tế.
                  </p>
                  <div className="highlight-box">
                    <strong>🎖️ Bản chất:</strong> Phản ánh mâu thuẫn giữa tính
                    chất xã hội của sản xuất và hình thức chiếm hữu tư nhân tư
                    bản chủ nghĩa.
                  </div>
                </div>
              </div>

              {/* --- item 2 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>🚩 Các Hình Thức Cạnh Tranh</h3>
                  <p>
                    Cạnh tranh diễn ra dưới nhiều dạng: nội bộ ngành, giữa các
                    ngành và giữa các quốc gia.
                  </p>
                  <div className="strategy-box">
                    <div className="strategy-item">
                      <span className="icon">🏭</span>{" "}
                      <strong>Nội bộ ngành:</strong> giữa các nhà tư bản cùng
                      ngành.
                    </div>
                    <div className="strategy-item">
                      <span className="icon">🔀</span>{" "}
                      <strong>Giữa các ngành:</strong> di chuyển tư bản để tìm
                      lợi nhuận cao hơn.
                    </div>
                    <div className="strategy-item">
                      <span className="icon">💪</span>{" "}
                      <strong>Giữa người mua & bán:</strong> xung quanh giá cả
                      và điều kiện giao dịch.
                    </div>
                  </div>
                </div>
              </div>

              {/* --- item 3 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>⚡ Vai Trò Hai Mặt Của Cạnh Tranh</h3>
                  <ul>
                    <li>
                      ✅ Thúc đẩy tiến bộ kỹ thuật, tăng năng suất lao động.
                    </li>
                    <li>
                      ✅ Tạo động lực đổi mới sản phẩm, nâng cao chất lượng.
                    </li>
                    <li>
                      ⚠️ Gây khủng hoảng, thất nghiệp, và tập trung tư bản vào
                      tay thiểu số.
                    </li>
                  </ul>
                </div>
              </div>

              {/* --- item 4 --- */}
              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3>🏆 Kết Quả Của Cạnh Tranh</h3>
                  <p>
                    Cạnh tranh tự do làm <strong>tăng quy mô sản xuất</strong>,{" "}
                    <strong>tập trung tư bản</strong> và là tiền đề hình thành{" "}
                    <strong>độc quyền</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="quote-box special">
              <p>
                <strong>
                  "Cạnh tranh tự do sinh ra sự tập trung sản xuất, và sự tập
                  trung sản xuất ở trình độ phát triển nhất định lại dẫn đến độc
                  quyền."
                </strong>{" "}
                — Lênin
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Độc quyền */}
        <section
          ref={section2Ref}
          className={`content-section scroll-reveal ${
            section2Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">02</div>
          <h2>🏢 Độc Quyền – Sự Tập Trung Sản Xuất Và Tư Bản</h2>

          <div className="content-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>📘 Khái Niệm Độc Quyền</h3>
                  <p>
                    Độc quyền là giai đoạn phát triển của tư bản chủ nghĩa khi
                    quá trình cạnh tranh dẫn đến sự tập trung tư bản và sản xuất
                    vào tay một số ít doanh nghiệp lớn thống trị thị trường.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>🏗️ Nguyên Nhân Hình Thành</h3>
                  <ul>
                    <li>Tích tụ và tập trung tư bản.</li>
                    <li>Phát triển của khoa học – kỹ thuật.</li>
                    <li>
                      Liên kết giữa tư bản công nghiệp, ngân hàng và thương
                      nghiệp.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>🔍 Biểu Hiện Của Độc Quyền</h3>
                  <ul>
                    <li>
                      Liên minh doanh nghiệp lớn thao túng giá cả, thị trường.
                    </li>
                    <li>Kiểm soát nguồn cung và tài nguyên chiến lược.</li>
                    <li>
                      Tác động đến chính sách nhà nước thông qua tư bản tài
                      chính.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3>💬 Nhận Xét Của Lênin</h3>
                  <p>
                    “Chủ nghĩa tư bản tự do cạnh tranh đã chuyển thành chủ nghĩa
                    tư bản độc quyền; sự thay đổi ấy là một trong những đặc điểm
                    cơ bản của giai đoạn hiện đại.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vai trò Nhà nước */}
        <section
          ref={section3Ref}
          className={`content-section scroll-reveal ${
            section3Visible ? "revealed" : ""
          }`}
        >
          <div className="timeline-number">03</div>
          <h2>⚖️ Vai Trò Của Nhà Nước Trong Nền Kinh Tế</h2>

          <div className="content-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>🏛️ Lý Do Cần Sự Điều Tiết</h3>
                  <p>
                    Nhà nước tham gia điều tiết kinh tế để hạn chế mặt tiêu cực
                    của cạnh tranh và độc quyền, bảo vệ công bằng xã hội và ổn
                    định vĩ mô.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>⚙️ Các Công Cụ Điều Tiết</h3>
                  <ul>
                    <li>Chính sách tài khóa, tiền tệ.</li>
                    <li>Luật chống độc quyền, bảo vệ người tiêu dùng.</li>
                    <li>Đầu tư công, trợ giá, và quy hoạch chiến lược.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>🌍 Liên Hệ Việt Nam</h3>
                  <p>
                    Việt Nam thực hiện nền kinh tế thị trường định hướng xã hội
                    chủ nghĩa, kết hợp <strong>cạnh tranh lành mạnh</strong> với{" "}
                    <strong>vai trò chủ đạo của Nhà nước</strong>.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">✓</div>
                <div className="timeline-content">
                  <h3>💡 Bài Học Rút Ra</h3>
                  <p>
                    Cạnh tranh tạo động lực phát triển, nhưng cần sự điều tiết
                    đúng đắn để bảo vệ lợi ích xã hội và hướng nền kinh tế đến
                    “dân giàu, nước mạnh, công bằng, văn minh”.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Theory;
