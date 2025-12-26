import { url } from "inspector";

const Home = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(12px)",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "30px",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* 🔑 Login Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
          alt="Login Icon"
          style={{
            width: "90px",
            marginBottom: "15px",
          }}
        />

        <h1 style={{ marginBottom: "8px" }}>LOGIN</h1>
        <p style={{ marginBottom: "20px", opacity: "0.9" }}>
          Namaskar, please login
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input type="text" placeholder="Username" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />

          <button style={buttonStyle}>Login</button>
          <p>
            Don't have account? <a href ="/signup">signup</a>
          </p>

        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#ffffff",
  color: "#333",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Home;
