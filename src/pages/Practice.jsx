import "./Practice.css";
import useScrollReveal from "../hooks/useScrollReveal";

function Practice() {
  const [modernRef, modernVisible] = useScrollReveal({ triggerOnce: false });
  const [lessonsRef, lessonsVisible] = useScrollReveal({ triggerOnce: false });
  const [gratitudeRef, gratitudeVisible] = useScrollReveal({
    triggerOnce: false,
  });

  return (
    <div className="practice">
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="star">⭐</span>
            Thực Tiễn Việt Nam
            <img src="/vn.png" alt="VN" className="flag-icon-hero" />
          </h1>
          <p className="hero-subtitle">
            Kinh Tế Thị Trường Định Hướng Xã Hội Chủ Nghĩa
          </p>
          <p className="hero-date">
            "Cạnh tranh lành mạnh - Phát triển bền vững"
          </p>
        </div>
      </section>

      <div className="practice-container">
        <section
          ref={modernRef}
          className={`modern-section scroll-reveal ${
            modernVisible ? "revealed" : ""
          }`}
        >
          <h2>❤️ Kinh Tế Thị Trường Ở Việt Nam</h2>
          <div className="intro-quote">
            <p>
              "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa với
              nhiều hình thức sở hữu, nhiều thành phần kinh tế; các thành phần
              kinh tế hoạt động theo pháp luật, bình đẳng, hợp tác và cạnh tranh
              lành mạnh."
            </p>
          </div>

          <p className="section-intro">
            Từ sau Đổi Mới 1986, Việt Nam đã chuyển từ nền kinh tế kế hoạch hóa
            tập trung sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.
            Đây là bước ngoặt lịch sử, kết hợp hài hòa giữa cơ chế thị trường
            với định hướng xã hội chủ nghĩa, giữa phát triển kinh tế với thực
            hiện tiến bộ, công bằng xã hội.
          </p>

          <div className="modern-aspects">
            <div className="aspect-card">
              <div className="aspect-icon">🏛️</div>
              <h3>Cạnh Tranh Lành Mạnh Tại Việt Nam</h3>
              <p>
                Luật Cạnh tranh năm 2018 của Việt Nam quy định rõ ràng về{" "}
                <strong>
                  các hành vi cạnh tranh không lành mạnh và biện pháp xử lý
                </strong>{" "}
                nhằm bảo vệ quyền lợi doanh nghiệp và người tiêu dùng.
              </p>
              <div className="landmarks">
                <div className="landmark-item">
                  <span className="landmark-icon">⚖️</span>
                  <strong>Luật Cạnh tranh 2018</strong>
                  <p>Khung pháp lý đầy đủ</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">�</span>
                  <strong>Cơ quan quản lý</strong>
                  <p>Cục Quản lý cạnh tranh</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">🛡️</span>
                  <strong>Bảo vệ quyền lợi</strong>
                  <p>Người tiêu dùng, DN nhỏ</p>
                </div>
                <div className="landmark-item">
                  <span className="landmark-icon">�</span>
                  <strong>Giám sát thị trường</strong>
                  <p>Phát hiện thao túng giá</p>
                </div>
              </div>
              <p>
                <strong>Cục Quản lý cạnh tranh (Bộ Công Thương)</strong> – là cơ
                quan chuyên trách kiểm tra, giám sát các hành vi vi phạm luật
                cạnh tranh, bảo vệ môi trường kinh doanh lành mạnh và minh bạch.
              </p>
            </div>

            <div className="aspect-card">
              <div className="aspect-icon">🎉</div>
              <h3>Chống Độc Quyền và Bảo Vệ Người Tiêu Dùng</h3>
              <p>
                Nhà nước Việt Nam đã ban hành nhiều chính sách nhằm ngăn chặn
                độc quyền, thao túng giá cả, và bảo vệ quyền lợi người tiêu dùng
                trong nền kinh tế thị trường.
              </p>
              <div className="activities">
                <div className="activity-badge">⚖️ Luật Cạnh tranh</div>
                <div className="activity-badge">�️ Luật Bảo vệ NTD</div>
                <div className="activity-badge">📋 Luật Doanh nghiệp</div>
                <div className="activity-badge">� Luật Giá</div>
                <div className="activity-badge">🔍 Thanh tra</div>
              </div>
              <p className="highlight-text">
                Đặc biệt, các chương trình như{" "}
                <strong>"Kiểm soát thị trường"</strong>,
                <strong>"Bình ổn giá"</strong> được triển khai thường xuyên,
                giúp ngăn chặn tình trạng độc quyền, thao túng giá và bảo vệ
                quyền lợi chính đáng của người tiêu dùng.
              </p>
            </div>

            <div className="aspect-card highlight">
              <div className="aspect-icon">💻</div>
              <h3>Vai Trò Điều Tiết Của Nhà Nước Việt Nam</h3>
              <p>
                Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, Nhà
                nước Việt Nam đóng vai trò quan trọng trong việc điều tiết và
                định hướng phát triển:
              </p>
              <div className="youth-quote">
                <p>
                  <strong>
                    "Nhà nước điều tiết nền kinh tế bằng pháp luật, chiến lược,
                    quy hoạch, kế hoạch, chính sách, các công cụ và nguồn lực"
                  </strong>
                </p>
                <p className="quote-detail">Hiến pháp 2013, Điều 51</p>
              </div>
              <p>
                Nhà nước sử dụng đa dạng công cụ: chính sách tài khóa, chính
                sách tiền tệ, thuế, đầu tư công, bảo hộ, trợ cấp... nhằm phát
                huy lợi thế cạnh tranh, khuyến khích đổi mới sáng tạo, và bảo
                đảm phát triển bền vững, công bằng xã hội.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={lessonsRef}
          className={`lessons-section scroll-reveal ${
            lessonsVisible ? "revealed" : ""
          }`}
        >
          <h2>🌟 Thành Tựu Và Thách Thức</h2>
          <p className="section-intro">
            Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam đã đạt
            được nhiều thành tựu quan trọng, đồng thời cũng đối mặt với những
            thách thức cần giải quyết.
          </p>

          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-icon">🤝</div>
              <h3>Thành Tựu Kinh Tế Ấn Tượng</h3>
              <p className="lesson-subtitle">Tăng trưởng bền vững</p>
              <p>
                Từ năm 1986 đến nay, GDP của Việt Nam tăng hơn 70 lần, thu nhập
                bình quân đầu người tăng từ dưới 100 USD lên hơn 4.000 USD. Việt
                Nam đã thoát khỏi nhóm nước nghèo, trở thành nền kinh tế có thu
                nhập trung bình.
              </p>
              <div className="lesson-quote">
                <p>
                  <strong>
                    "Việt Nam là một trong những nền kinh tế năng động nhất khu
                    vực Châu Á - Thái Bình Dương"
                  </strong>{" "}
                  - theo đánh giá của Ngân hàng Thế giới và các tổ chức quốc tế.
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">❤️</div>
              <h3>Môi Trường Cạnh Tranh Được Cải Thiện</h3>
              <p className="lesson-subtitle">Minh bạch và công bằng hơn</p>
              <p>
                Việt Nam đã cải thiện đáng kể môi trường kinh doanh, xếp hạng
                70/190 nền kinh tế trong báo cáo Doing Business. Luật pháp ngày
                càng hoàn thiện, thủ tục hành chính được đơn giản hóa, tạo điều
                kiện cho doanh nghiệp phát triển.
              </p>
              <div className="modern-connection">
                <p>
                  <strong>Chuyển đổi số:</strong> Việt Nam đẩy mạnh chính phủ
                  điện tử, chính phủ số, tăng cường minh bạch trong quản lý nhà
                  nước và tạo thuận lợi cho hoạt động kinh doanh.
                </p>
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-icon">🚩</div>
              <h3>Thách Thức Cần Giải Quyết</h3>
              <p className="lesson-subtitle">Vẫn còn nhiều vấn đề tồn tại</p>
              <p>
                Bên cạnh thành tựu, Việt Nam vẫn đối mặt với những thách thức:
                cạnh tranh không lành mạnh, độc quyền trong một số ngành, tham
                nhũng, khoảng cách giàu nghèo, ô nhiễm môi trường...
              </p>
              <div className="lesson-quote">
                <p>
                  Cần tiếp tục hoàn thiện thể chế kinh tế thị trường, tăng cường
                  hiệu quả điều tiết của Nhà nước, thúc đẩy{" "}
                  <strong>
                    cạnh tranh lành mạnh, minh bạch và phát triển bền vững
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="vnr-responsibility">
            <h3>
              🎓 Liên hệ: Sinh viên VNR và Trách Nhiệm Trong Kinh Tế Thị Trường
            </h3>
            <p>
              Đối với sinh viên Học viện Chính trị Quốc gia Hồ Chí Minh (VNR) và
              giới trẻ nói chung, việc hiểu rõ về cạnh tranh, độc quyền và điều
              tiết nhà nước là nền tảng quan trọng để tham gia xây dựng nền kinh
              tế.
            </p>

            <div className="responsibilities">
              <div className="responsibility-item">
                <span className="resp-number">1</span>
                <div className="resp-content">
                  <strong>Nắm vững lý thuyết kinh tế</strong>
                  <p>Hiểu rõ bản chất và quy luật của kinh tế thị trường</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">2</span>
                <div className="resp-content">
                  <strong>Thực hành cạnh tranh lành mạnh</strong>
                  <p>Tuân thủ pháp luật, đạo đức kinh doanh</p>
                </div>
              </div>
              <div className="responsibility-item">
                <span className="resp-number">3</span>
                <div className="resp-content">
                  <strong>Góp phần giám sát và phản biện</strong>
                  <p>
                    Phát hiện và phản ánh các hành vi vi phạm luật cạnh tranh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="closing-message">
            <div className="closing-quote">
              <p>
                "Kinh tế thị trường định hướng xã hội chủ nghĩa không chỉ là mô
                hình kinh tế, mà là con đường phát triển độc đáo của Việt Nam -
                kết hợp hài hòa giữa hiệu quả kinh tế và công bằng xã hội, giữa
                thị trường và định hướng xã hội chủ nghĩa."
              </p>
            </div>
          </div>
        </section>

        <section
          ref={gratitudeRef}
          className={`gratitude-section scroll-reveal ${
            gratitudeVisible ? "revealed" : ""
          }`}
        >
          <h2>💝 Lời Cảm Ơn</h2>

          <div className="gratitude-content">
            <p>
              Với tâm lòng trân trọng, tôi xin gửi lời cảm ơn sâu sắc đến tất cả
              những ai đã bỏ thời gian để cùng theo dõi bài viết này.
            </p>

            <p>
              Trong hành trình tìm hiểu về cạnh tranh, độc quyền và điều tiết
              nhà nước - những phạm trù cơ bản của kinh tế thị trường - tôi càng
              nhận thức sâu sắc về con đường phát triển độc đáo của Việt Nam và
              vai trò quan trọng của việc kết hợp hài hòa giữa thị trường và
              định hướng xã hội chủ nghĩa.
            </p>

            <div className="thanks-sections">
              <div className="thanks-item">
                <span className="thanks-icon">🎖️</span>
                <p>
                  <strong>Xin chân thành cảm ơn các nhà lý luận</strong> - C.
                  Mác, Ph. Ăngghen, V.I. Lênin và các nhà kinh tế học đã đóng
                  góp vào kho tàng lý luận kinh tế học chính trị.
                </p>
              </div>
              <div className="thanks-item">
                <span className="thanks-icon">👨‍🏫</span>
                <p>
                  <strong>Xin cảm ơn các thầy cô, bạn bè, đồng nghiệp</strong>,
                  và độc giả đã chia sẻ và đóng góp ý kiến để cải thiện bài viết
                  này.
                </p>
              </div>
            </div>

            <p className="hope-message">
              Tôi hy vọng rằng, kiến thức về cạnh tranh, độc quyền và điều tiết
              nhà nước sẽ giúp thế hệ trẻ hiểu rõ hơn về nền kinh tế thị trường,
              từ đó có những hành động đúng đắn trong việc xây dựng nền kinh tế
              Việt Nam phát triển bền vững, hiệu quả và công bằng.
            </p>

            <div className="final-quote">
              <p>
                "Kinh tế thị trường không phải là mục đích, mà là phương tiện để
                đạt được mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn
                minh."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Practice;
