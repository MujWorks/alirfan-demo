import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [currentNote, setCurrentNote] = useState(0);

  const nextNote = () => setCurrentNote((prev) => (prev + 1) % presidentNotes.length);

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  const features = [
    { title: "Academic Facilities", bullets: ["Smart Class Rooms", "Laboratories"] },
    { title: "Computer Education", bullets: ["Labs", "Khan Academy"] },
    { title: "Academic Support", bullets: ["Regular Test Series", "Excellence Batch"] },
    { title: "Learning Resources", bullets: ["Library", "Subject-based Clubs"] },
    { title: "Competitions and Events", bullets: ["Olympiads & Competitions", "Annual Gathering"] },
    { title: "Cultural and Social Activities", bullets: ["Assembly", "Co-Curricular Activities"] },
    { title: "Physical Education", bullets: ["Sports", "Judo"] },
    { title: "Environmental Learning", bullets: ["\"Al Hamra\" Garden", "Educational Tours"] },
    { title: "Religious Studies", bullets: ["Islamic Environment", "Cultural Studies"] }
  ];

  const presidentNotes = [
    { quote: "Human Being is the Viceregent of Almighty Allah. The reason behind this honor is that he has been equipped with knowledge. In broader perspective, this knowledge can be considered...", author: "Mr. Mujtaba Farooq, President" },
    { quote: "Education & Knowledge are rightly called the 'Third Eye' of Human Being. It gives him an insight into all affairs of life, removes all the darkness and spreads illumination...", author: "Mohammad Khalid, Principal" }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0f172a, #065f46)', color: 'white', overflowX: 'hidden', fontFamily: 'Inter, sans-serif' }}>
      <style jsx global>{`
        .glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(20px); border: 1px solid rgba(212,175,55,0.2); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
        .menu-item { transition: all 0.3s ease; }
        .menu-item:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(212,175,55,0.5); }
        .reveal { opacity: 0; transform: translateY(50px); transition: all 0.8s ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .cta-pulse { animation: pulse 2s infinite; }
      `}</style>

      {/* Premium Fixed Menu */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(212,175,55,0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37' }}>Al-Irfan</h1>
          <ul style={{ display: 'none', listStyle: 'none', margin: 0, padding: 0, gap: '2rem' }}>
            {['Home', 'About', 'Academics', 'Facilities', 'Admissions', 'Contact'].map((item) => (
              <li key={item} className="menu-item">
                <button style={{ color: 'white', background: 'none', border: 'none', fontSize: '1.125rem', fontWeight: '500', cursor: 'pointer', position: 'relative' }}>
                  {item}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: 0, height: '0.125rem', background: '#D4AF37', transition: 'width 0.3s ease' }} />
                </button>
              </li>
            ))}
          </ul>
          <button style={{ display: 'block', color: 'white', background: 'none', border: 'none', fontSize: '1.5rem' }} onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.95)', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, gap: '2rem', fontSize: '3rem', fontWeight: 'bold', color: '#D4AF37' }}>
            {['Home', 'About', 'Academics', 'Facilities', 'Admissions', 'Contact'].map((item) => (
              <li key={item}>
                <button style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(false)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Premium Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 1.5rem 0', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="reveal active" style={{ animation: 'fadeInUp 1s ease-out' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 9rem)', fontWeight: 900, color: 'white', margin: '0 0 1.5rem 0', lineHeight: 1.1 }}>
            ALIRFAN RESIDENTIAL SCHOOL
          </h1>
          <p style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)', color: 'rgb(229,231,235)', margin: '0 0 1rem 0', fontWeight: 300 }}>
            Unlocking Knowledge, Inspiring Growth
          </p>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'rgb(209,213,219)', margin: '0 0 3rem 0', maxWidth: '4rem', lineHeight: 1.6 }}>
            Empower your child with a dynamic and engaging learning environment that fosters creativity and critical thinking.
          </p>
          <a href="#enquiry" style={{ background: '#D4AF37', color: 'black', padding: '1.5rem 4rem', borderRadius: '50px', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 8px 32px rgba(212,175,55,0.3)', animation: 'pulse 2s infinite' }}>
            Discover More
          </a>
        </div>
      </section>

      {/* Leadership Insights */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '24px', padding: '3rem 4rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} className="reveal" style={{ animation: 'fadeInUp 1s ease-out 0.2s' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 'bold', color: '#D4AF37', textAlign: 'center', margin: '0 0 3rem 0' }}>
            Leadership Insights
          </h2>
          <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgb(209,213,219)', textAlign: 'center', margin: '0 0 3rem 0', maxWidth: '80ch' }}>
            The commitment, vision, and dedication that shape our school's journey. Discover their perspectives on our educational goals, the achievements of our students, and the values that guide us.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <img src="https://www.alirfanschool.com/images/secretary.jpg" alt="Secretary" style={{ borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} />
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'rgb(209,213,219)', margin: '0 0 1.5rem 0' }}>
                "True education extends beyond books — it nurtures the soul, builds character, and prepares leaders for tomorrow."
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#D4AF37' }}>— Janab Secretary Saheb</p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Note */}
      <section style={{ padding: '6rem 1.5rem', background: 'rgba(15,23,42,0.5)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '80ch', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 'bold', color: '#D4AF37', margin: '0 0 3rem 0' }} className="reveal" style={{ animation: 'fadeInUp 1s ease-out 0.4s' }}>
            President's Note
          </h2>
          <div style={{ gap: '2rem', display: 'grid' }}>
            {presidentNotes.map((note, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '24px', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} className="reveal" style={{ animation: 'fadeInUp 1s ease-out 0.6s' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgb(209,213,219)', fontStyle: 'italic', margin: '0 0 1.5rem 0' }}>
                  {note.quote}
                </p>
                <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#D4AF37' }}>{note.author}</p>
              </div>
            ))}
          </div>
          <a href="PresidentNote.aspx" style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '1.25rem', marginTop: '2rem', display: 'inline-block' }}>Read Full Note →</a>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: '6rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 7rem)', fontWeight: 'bold', textAlign: 'center', color: '#D4AF37', margin: '0 0 5rem 0' }} className="reveal" style={{ animation: 'fadeInUp 1s ease-out 0.8s' }}>
          Why Choose Al-Irfan?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '24px', padding: '2rem', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
              className="reveal"
              style={{ animation: `fadeInUp 1s ease-out ${1 + i * 0.1}s` }}
              onClick={() => toggleFeature(i)}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37', margin: '0 0 1rem 0' }}>{feature.title}</h3>
              <ul style={{ color: 'rgb(209,213,219)', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                {feature.bullets.map((bullet, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center' }}>
                    <i style={{ color: '#D4AF37', marginRight: '0.5rem', fontSize: '1rem' }} className="fas fa-check"></i>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="enquiry" style={{ padding: '6rem 1.5rem', background: 'rgba(6,95,70,0.5)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 'bold', color: 'white', margin: '0 0 3rem 0' }} className="reveal" style={{ animation: 'fadeInUp 1s ease-out 1.5s' }}>
            Ready to Join Al-Irfan?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '24px', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37', margin: '0 0 1rem 0' }}>Admission Inquiries</h3>
              <p><i style={{ color: '#D4AF37', marginRight: '0.5rem' }} className="fas fa-phone"></i>+91 9860 579 809</p>
              <p><i style={{ color: '#D4AF37', marginRight: '0.5rem' }} className="fas fa-envelope"></i>mail@alirfanschool.com</p>
              <p>+91 8975 613 666 • +91 9923 203 933</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '24px', padding: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4AF37', margin: '0 0 1rem 0' }}>School Hours & Location</h3>
              <p>Every Day: 9:00 AM to 3:00 PM</p>
              <p><i style={{ color: '#D4AF37', marginRight: '0.5rem' }} className="fas fa-map-marker-alt"></i>Khultabad, Maharashtra (IN)</p>
            </div>
          </div>
          <a href="enquiry.aspx" style={{ background: '#D4AF37', color: 'black', padding: '1.5rem 4rem', borderRadius: '50px', fontSize: 'clamp(1rem, 2vw, 2rem)', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 8px 32px rgba(212,175,55,0.3)', animation: 'pulse 2s infinite' }}>
            Submit Enquiry Now
          </a>
        </div>
      </section>

      <footer style={{ padding: '3rem 1.5rem', textAlign: 'center', background: 'rgba(15,23,42,0.5)' }}>
        <p style={{ color: 'rgb(156,163,175)', margin: 0 }}>© 2026 Al-Irfan Residential School. All Rights Reserved.</p>
      </footer>
    </div>
  );
}