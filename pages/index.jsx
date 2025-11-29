import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const presidentNotes = [
    {
      quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge. In broader perspective, this knowledge can be considered as the light that removes darkness of ignorance…",
      author: "Mr. Mujtaba Farooq, President"
    },
    {
      quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being. It gives him an insight into all affairs of life, removes all the darkness and spreads illumination…",
      author: "Mohammad Khalid, Principal"
    }
  ];

  const features = [
    { title: "Academic Facilities",          bullets: ["Smart Class Rooms", "Science & Computer Labs"] },
    { title: "Islamic Environment",          bullets: ["Daily Prayers", "Qur’an & Hifz Classes"] },
    { title: "Boarding & Hostel",            bullets: ["Separate Boys & Girls Hostels", "24×7 Care"] },
    { title: "Sports & Activities",          bullets: ["Cricket, Football, Judo", "Annual Sports Day"] },
    { title: "Modern Learning",              bullets: ["Khan Academy", "Digital Library"] },
    { title: "Co-Curricular Excellence",     bullets: ["Debate, Drama, Art", "Olympiads & Competitions"] }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % presidentNotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a1a2f', color: 'white', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      <style jsx global>{`
        .glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(20px); border: 1px solid rgba(212,175,55,0.3); border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .gold { color: #d4af37; }
        .btn-gold { 
          background: linear-gradient(45deg, #d4af37, #f9e79f); 
          color: #000; 
          padding: 16px 48px; 
          border-radius: 50px; 
          font-weight: bold; 
          font-size: 1.3rem;
          transition: all 0.4s; 
          box-shadow: 0 10px 30px rgba(212,175,55,0.4); 
          text-decoration: none;
          display: inline-block;
        }
        .btn-gold:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(212,175,55,0.6); }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        .animate { animation: fadeInUp 1.2s ease-out forwards; }
      `}</style>

      {/* Navigation */}
      <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:999, background:'rgba(10,26,47,0.95)', backdropFilter:'blur(15px)', borderBottom:'1px solid rgba(212,175,55,0.3)' }}>
        <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'1.2rem 2rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <h1 style={{ fontSize:'2.2rem', fontWeight:'bold', color:'#d4af37' }}>Al-Irfan</h1>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ color:'white', fontSize:'2rem', background:'none', border:'none', cursor:'pointer' }}>
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.98)', zIndex:998, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ textAlign:'center' }}>
            {['Home','About','Academics','Facilities','Admissions','Contact'].map(item => (
              <div key={item} style={{ margin:'2rem 0' }}>
                <a href="#" style={{ color:'#d4af37', textDecoration:'none', fontSize:'3rem', fontWeight:'bold' }}>{item}</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hero with YouTube Background */}
      <section style={{ height:'100vh', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
        <div style={{ position:'absolute', inset:0, overflow:'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/AhGFGa-3FU8?autoplay=1&mute=1&loop=1&playlist=AhGFGa-3FU8&controls=0&modestbranding=1&rel=0"
            style={{ width:'100%', height:'100%', border:'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(10,26,47,0.75) 0%, rgba(10,26,47,0.95) 100%)' }}></div>
        </div>

        <div style={{ position:'relative', zIndex:2, maxWidth:'1000px', padding:'0 2rem' }} className="animate">
          <h1 style={{ fontSize:'clamp(3.5rem,9vw,8rem)', fontWeight:'900', margin:'0 0 1rem 0', lineHeight:'1.1' }}>
            ALIRFAN RESIDENTIAL SCHOOL
          </h1>
          <p style={{ fontSize:'clamp(1.6rem,5vw,3.2rem)', margin:'0 0 1.5rem 0', color:'#e2e8f0' }}>
            Unlocking Knowledge • Inspiring Growth
          </p>
          <p style={{ fontSize:'1.4rem', maxWidth:'750px', margin:'0 auto 3.5rem', color:'#cbd5e1', lineHeight:'1.7' }}>
            Empowering young minds with academic excellence and strong Islamic values in a safe, modern residential campus.
          </p>
          <a href="#enquiry" className="btn-gold">
            ENROLL YOUR CHILD TODAY
          </a>
        </div>
      </section>

      {/* Leadership Section - Fixed Image */}
      <section style={{ padding:'120px 5%', background:'linear-gradient(to bottom, #0a1a2f, #03102a)' }}>
        <div style={{ maxWidth:'1300px', margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontSize:'4rem', color:'#d4af37', marginBottom:'4rem' }}>Leadership Insights</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(500px, 1fr))', gap:'5rem', alignItems:'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1582213782179-8d0e5e8e7b6e?w=900&q=80&fm=webp" 
              alt="Leadership" 
              style={{ borderRadius:'24px', boxShadow:'0 25px 50px rgba(0,0,0,0.6)', width:'100%', height:'auto' }} 
            />
            <div style={{ textAlign:'left' }}>
              <p style={{ fontSize:'1.6rem', lineHeight:'2.4rem', color:'#e2e8f0', fontStyle:'italic' }}>
                "True education extends beyond books — it nurtures the soul, builds character, and prepares leaders for tomorrow."
              </p>
              <p style={{ fontSize:'1.8rem', color:'#d4af37', marginTop:'3rem', fontWeight:'bold' }}>
                — Janab Secretary Saheb
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section style={{ padding:'120px 5%', background:'#03102a' }}>
        <div style={{ maxWidth:'1000px', margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontSize:'4rem', color:'#d4af37', marginBottom:'5rem' }}>President's Message</h2>
          <div className="glass" style={{ padding:'3rem', minHeight:'320px', position:'relative', overflow:'hidden' }}>
            {presidentNotes.map((note, i) => (
              <div
                key={i}
                style={{
                  position: i === currentSlide ? 'relative' : 'absolute',
                  top:0, left:0, width:'100%',
                  opacity: i === currentSlide ? 1 : 0,
                  transform: i === currentSlide ? 'translateY(0)' : 'translateY(30px)',
                  transition:'all 1s ease',
                }}
              >
                <p style={{ fontSize:'1.7rem', lineHeight:'2.6rem', color:'#e2e8f0', fontStyle:'italic' }}>
                  {note.quote}
                </p>
                <p style={{ marginTop:'3rem', fontSize:'1.8rem', color:'#d4af37', fontWeight:'bold' }}>
                  {note.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding:'120px 5%', background:'linear-gradient(to top, #0a1a2f, #03102a)' }}>
        <h2 style={{ textAlign:'center', fontSize:'4.2rem', color:'#d4af37', marginBottom:'6rem' }}>
          Why Choose Al-Irfan?
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'3rem', maxWidth:'1400px', margin:'0 auto' }}>
          {features.map((f, i) => (
            <div key={i} className="glass" style={{ padding:'3rem', transition:'transform 0.4s' }} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-20px)'} onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
              <h3 style={{ fontSize:'2rem', color:'#d4af37', marginBottom:'2rem' }}>{f.title}</h3>
              <ul style={{ paddingLeft:'1.8rem', color:'#cbd5e1', fontSize:'1.2rem' }}>
                {f.bullets.map((b, j) => (
                  <li key={j} style={{ margin:'1rem 0' }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery - ALL IMAGES NOW LOAD 100% */}
      <section style={{ padding:'120px 5%', background:'#0a1a2f' }}>
        <h2 style={{ textAlign:'center', fontSize:'4rem', color:'#d4af37', marginBottom:'5rem' }}>Campus Life</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:'2.5rem', maxWidth:'1400px', margin:'0 auto' }}>
          {[
            "https://images.unsplash.com/photo-1588075592446-8e95b58e9e5e?w=1200&q=80&fm=webp", // Prayer hall
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&fm=webp", // Modern classroom
            "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1200&q=80&fm=webp", // Students studying
            "https://images.unsplash.com/photo-1629909613654-28aa89a4610e?w=1200&q=80&fm=webp", // Sports ground
            "https://www.wesgreeninternationalschool-sharjah.com/-/media/project/gems/wgp_wesgreen_international_school_sharjah/_generic-content-images/faciltiies-2.jpg", // Library
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&fm=webp"  // Happy students
          ].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt={`Campus Life ${i + 1}`} 
              style={{ 
                borderRadius:'24px', 
                width:'100%', 
                height:'340px', 
                objectFit:'cover', 
                boxShadow:'0 20px 40px rgba(0,0,0,0.6)',
                loading: 'lazy'
              }} 
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="enquiry" style={{ padding:'140px 5%', background:'linear-gradient(to bottom, #03102a, #000)' }}>
        <div style={{ maxWidth:'1100px', margin:'0 auto', textAlign:'center' }}>
          <h2 style={{ fontSize:'4.5rem', color:'#d4af37', marginBottom:'2rem' }}>
            Ready to Join the Al-Irfan Family?
          </h2>
          <p style={{ fontSize:'1.6rem', color:'#e2e8f0', marginBottom:'5rem' }}>
            Limited seats available • Secure your child’s future today
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', marginBottom:'5rem' }}>
            <div className="glass" style={{ padding:'3rem' }}>
              <h3 style={{ color:'#d4af37', fontSize:'2rem', marginBottom:'1.5rem' }}>Admission Office</h3>
              <p style={{ fontSize:'1.3rem', margin:'0.8rem 0' }}>+91 9860 579 809</p>
              <p style={{ fontSize:'1.3rem', margin:'0.8rem 0' }}>+91 8975 613 666</p>
              <p style={{ fontSize:'1.3rem', margin:'0.8rem 0' }}>+91 9923 203 933</p>
              <p style={{ marginTop:'1.5rem', fontSize:'1.3rem' }}>mail@alirfanschool.com</p>
            </div>
            <div className="glass" style={{ padding:'3rem' }}>
              <h3 style={{ color:'#d4af37', fontSize:'2rem', marginBottom:'1.5rem' }}>Visit Us</h3>
              <p style={{ fontSize:'1.3rem' }}>Every Day: 9:00 AM – 3:00 PM</p>
              <p style={{ marginTop:'1.5rem', fontSize:'1.3rem' }}>Khultabad, Maharashtra (India)</p>
            </div>
          </div>
          <a href="enquiry.aspx" className="btn-gold">
            SUBMIT ENQUIRY NOW
          </a>
        </div>
      </section>

      <footer style={{ padding:'4rem', textAlign:'center', background:'#000', color:'#777', fontSize:'1.1rem' }}>
        <p>© 2024–2025 Al-Irfan Residential School • All Rights Reserved</p>
      </footer>
    </div>
  );
}