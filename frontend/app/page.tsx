const Home = () => {
  return (
    <div style={{  width:'50%',backgroundColor: '#c1babaff' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',border:'2px solid black' ,margin:'150px', padding:'20px', borderRadius:'10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
      {/* <h1 style={
        {
        backgroundColor:'#4A90E2', 
        color: 'white',
        fontFamily: 'math',
        padding: '10px',
        margin: '4px',
        width: '50%',
        height: '60px',
        textAlign: 'center',
       }
        }>LOGIN!</h1> */}

        <div
        >
            < img src="https://www.logoai.com/oss/icons/2021/10/27/LaEKEdGd1khWtxX.png" alt="yo boi"   style={{  width: '100px', height: '100px'}}>
        </img>
        </div>

        <p style={{fontSize: '2.5rem', fontFamily: "'Poppins', sans-serif"}}>Namaskar, please login.</p>
        <div style={{display: 'flex', gap: '20px' , padding: '10px', width: '300px', alignContent: 'center', justifyContent: 'center' }}>
      <input style={{padding: '10px', width: 'fit-content', border: '1px solid black'}} placeholder ="Enter username"/>
      <input style={{padding: '10px', width: 'fit content', border: '1px solid black' ,marginRight: '30px'}} placeholder="enter password" type="password"/>
       </div>
      <button  style={{backgroundColor: '#4A90E2', color: 'white', fontSize: '20px', width: '100px', height: '40px', marginTop: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer'
        
      }}>
      Login </button>

       <p>Do you have an account?</p>
        <a href="/register" style={{color: '#425c79ff', textDecoration: 'none', fontWeight: 'bold'}}>Register here</a>

    </div>
  )
}
export default Home