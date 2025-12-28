import { Racing_Sans_One } from "next/font/google";

const Home = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
  alt="Logo"
  style={styles.logo}
/>


        
        <p style={styles.subtitle}>Please login to continue</p>

        <input
          type="text"
          placeholder="Username"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}

        />

        <button style={styles.button}>Login</button>
        <a href="forgetpassword">Forgot Password? </a>


        <span style={styles.register}>
          Don't have an account?{" "}
          <a href="/registerhere" style={styles.link}>
            Register here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Home;
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #05d3c9ff, #9da5d4ff, #a18cd1)",
  },
  logo: {
  width: "120px",
  display: "block",
  margin: "0 auto 15px auto", // 👈 centers image horizontally
},

  card: {
    width: "360px",
    padding: "30px",
    borderRadius: "18px",
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    textAlign: "center",
  },


  title: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
    opacity: "0.8",
  },

 input: {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "15px",
  color: "black",
  backgroundColor: "white",
},


  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4A90E2",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },

  register: {
    display: "block",
    marginTop: "15px",
    fontSize: "14px",
  },

  link: {
    color: "#1a3cff",
    textDecoration: "none",
    fontWeight: "500",
  },
};
