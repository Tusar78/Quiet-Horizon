import React from "react";

function App() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>Quiet Horizon</h1>
        <p style={styles.subtitle}>
          Capturing moments of calm and beauty
        </p>
        <p style={styles.status}>
          🚧 Page under construction... Please check back soon!
        </p>
        <div style={styles.loader}>
          <span style={{ ...styles.dot, animationDelay: "0s" }}></span>
          <span style={{ ...styles.dot, animationDelay: "0.2s" }}></span>
          <span style={{ ...styles.dot, animationDelay: "0.4s" }}></span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at center, #f9fafb 0%, #e2e8f0 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "3rem 4rem",
    borderRadius: "20px",
    boxShadow:
      "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
    color: "#1e293b", // dark slate blue-ish color
    textAlign: "center",
    maxWidth: "420px",
    width: "90%",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(200, 200, 200, 0.3)",
  },
  title: {
    fontSize: "3.5rem",
    marginBottom: "0.3rem",
    fontWeight: "900",
    letterSpacing: "4px",
  },
  subtitle: {
    fontSize: "1.25rem",
    fontWeight: "500",
    marginBottom: "2rem",
    fontStyle: "italic",
  },
  status: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "2rem",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  dot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#1e293b",
    opacity: 0.4,
    animation: "bounce 1.4s infinite ease-in-out both",
  },
};

// Inject bounce keyframes animation globally
const styleSheet = `
@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styleSheet;
  document.head.appendChild(styleTag);
}

export default App;
