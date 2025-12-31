const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://th.bing.com/th/id/R.126551e332e0812424740cc9f05e28fb?rik=3BkavsBQOJY%2fqw&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f19%2f69%2fBQwVA1.jpg&ehk=QUn3TrseNjkXrPPaQwymoa5TQKDrcV6FZcYGb8%2bBCgk%3d&risl=&pid=ImgRaw&r=0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:"white",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "25px",
          backdropFilter: "blur(12px)",
          
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "#884e9bff",
            color: "white",
            padding: "40px",
            marginBottom: "40px",
            borderRadius: "2px",
          }}
        >
          Hello There...
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
          Please login.
        </p>

        <input
          type="text"
          placeholder="Enter username"
           style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "#4A90E2",
            color: "white",
            fontSize: "18px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account?
          <a href="/register" style={{ color: "#4A90E2", marginLeft: "5px" }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;


