/**
 * LoadingScreen component
 *
 * This component renders a loading animation while the site is rendering on the server.
 *
 * The loading animation is rendered on the client and server, so it's visible during the initial page load.
 *
 * The loading animation is removed once the site is rendered on the client.
 *
 * @see {@link https://nextjs.org/docs/basic-features/pages#server-side-rendering}
 */
"use client"

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <div className="loading-text">
          <span>A</span>
          <span>y</span>
          <span>u</span>
          <span>s</span>
          <span>h</span>
          <span>&nbsp;</span>
          <span>S</span>
          <span>h</span>
          <span>a</span>
          <span>r</span>
          <span>m</span>
          <span>a</span>
        </div>
        <p className="loading-subtitle">Backend Developer</p>
      </div>
      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-content {
          text-align: center;
          color: white;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 30px;
        }

        .loading-text {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
        }

        .loading-text span {
          display: inline-block;
          animation: wave 1.5s ease-in-out infinite;
        }

        .loading-text span:nth-child(1) { animation-delay: 0.1s; }
        .loading-text span:nth-child(2) { animation-delay: 0.2s; }
        .loading-text span:nth-child(3) { animation-delay: 0.3s; }
        .loading-text span:nth-child(4) { animation-delay: 0.4s; }
        .loading-text span:nth-child(5) { animation-delay: 0.5s; }
        .loading-text span:nth-child(7) { animation-delay: 0.7s; }
        .loading-text span:nth-child(8) { animation-delay: 0.8s; }
        .loading-text span:nth-child(9) { animation-delay: 0.9s; }
        .loading-text span:nth-child(10) { animation-delay: 1.0s; }
        .loading-text span:nth-child(11) { animation-delay: 1.1s; }
        .loading-text span:nth-child(12) { animation-delay: 1.2s; }

        .loading-subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          opacity: 0.9;
          letter-spacing: 2px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes wave {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
