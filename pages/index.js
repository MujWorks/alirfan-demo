export default function Home() {
  return (
    <div style={{minHeight:'100vh', position:'relative', background:'#000', overflow:'hidden'}}>
      <iframe
        src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1"
        allow="autoplay"
        style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:'none', pointerEvents:'none'}}
      />
      <div style={{position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center', color:'white', padding:'20px'}}>
        <div>
          <h1 style={{fontSize:'5rem', fontWeight:'900', margin:'0'}}>
            AL-IRFAN<br/>
            <span style={{color:'#d4af37', fontSize:'4rem'}}>RESIDENTIAL SCHOOL</span>
          </h1>
          <p style={{fontSize:'2rem', margin:'30px 0'}}>Excellence Rooted in Faith</p>
          <button style={{fontSize:'2rem', padding:'20px 60px', background:'#d4af37', color:'black', border:'none', borderRadius:'50px', cursor:'pointer'}}>
            Apply for 2026
          </button>
        </div>
      </div>
    </div>
  );
}