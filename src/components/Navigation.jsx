import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const lastKnownY = useRef(0);
  const ticking = useRef(false);
  // rafId: hold requestAnimationFrame id so we can cancel on unmount
  const rafId = useRef(null);
  // animate when nav becomes visible: transient class for slide+fade-in
  const [animatingIn, setAnimatingIn] = useState(false);
  const mounted = useRef(false);
  const animateTimeout = useRef(null);

  useEffect(() => {
    function onScroll() {
      lastKnownY.current = window.scrollY || window.pageYOffset;
      if (!ticking.current) {
        rafId.current = requestAnimationFrame(() => {
          const currentY = lastKnownY.current;
          const delta = currentY - lastScrollY.current;

          // prevent tiny fluctuations
          if (Math.abs(delta) >= 5) {
            if (currentY > lastScrollY.current && currentY > 100) {
              setShowNav(false);
            } else {
              setShowNav(true);
            }
            lastScrollY.current = currentY;
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (animateTimeout.current) clearTimeout(animateTimeout.current);
    };
  }, []);

  // trigger a small slide+fade-in animation when the navbar becomes visible
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    if (showNav) {
      setAnimatingIn(true);
      if (animateTimeout.current) clearTimeout(animateTimeout.current);
      // match CSS animation duration (360ms)
      animateTimeout.current = setTimeout(() => setAnimatingIn(false), 360);
    }
  }, [showNav]);

  // cleanup any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (animateTimeout.current) clearTimeout(animateTimeout.current);
    };
  }, []);

  return (
    <nav
      className={`navigation ${!showNav ? "nav-hidden" : ""} ${
        animatingIn ? "showing" : ""
      }`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">⭐</span>
          <span className="logo-text">Kinh Tế Chính Trị</span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/theory"
              className={location.pathname === "/theory" ? "active" : ""}
            >
              Lý thuyết
            </Link>
          </li>
          <li>
            <Link
              to="/practice"
              className={location.pathname === "/practice" ? "active" : ""}
            >
              Thực tiễn
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className={location.pathname === "/quiz" ? "active" : ""}
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/ai-usage"
              className={location.pathname === "/ai-usage" ? "active" : ""}
            >
              AI Usage
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61581248485989"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fanpage
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
