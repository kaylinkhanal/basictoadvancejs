const Home = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        width: '350px'
      }}>
        <h1 style={{
          color: '#1F2937',
          fontFamily: 'Arial, sans-serif',
          fontWeight: '300',
          fontSize: '2rem',
          marginBottom: '30px'
        }}>
          LOGIN
        </h1>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            style={{
              padding: '12px 15px',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
            placeholder="Username"
          />
          <input 
            style={{
              padding: '12px 15px',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              fontSize: '16px',
              outline: 'none'
            }}
            type="password"
            placeholder="Password"
          />

          <button style={{
            padding: '12px',
            backgroundColor: '#4A90E2',
            color: 'white',
            fontSize: '16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Login
          </button>
        </div>

        <p style={{ marginTop: '20px', fontSize: '14px', color: '#64748B' }}>
          Don't have an account? <span style={{ color: '#4A90E2' }}>Signup</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
