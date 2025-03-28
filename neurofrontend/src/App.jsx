import { useState, useRef, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showChatButton, setShowChatButton] = useState(true); // Controls visibility of chat button
  const loginSectionRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  const scrollToLoginSection = () => {
    setShowChatButton(false); // Hide chat button when clicked
    loginSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
};

useEffect(() => {
    const handleScroll = () => {
        if (loginSectionRef.current) {
            const loginSectionTop = loginSectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Hide the button as soon as any part of the login page appears
            if (loginSectionTop <= windowHeight) {
                setShowChatButton(false);
            } 
            // Reappear only when scrolling back above the login page
            else {
                setShowChatButton(true);
            }
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);








  return (
    <div className="bg-[#1E1536] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center pt-0 pr-10 bg-gray-100">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="NeuroNest Logo" className="h-32 w-72" />
        </div>
        <div className="space-x-4">
          <button className="px-12 py-4 bg-white border border-black rounded-lg shadow text-black text-2xl font-bold">Home</button>
          <button className="px-12 py-4 bg-purple-600 text-white rounded-lg shadow text-2xl font-bold">Login</button>
        </div>
      </nav>

      {/* First Page - Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-0 py-0 max-w-5xl mx-auto relative top-[-180px]">
        {/* Circular Images Section - Left Side */}
        <div className="relative w-full h-screen">
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72">
            <img 
              src="/images/pg1img1.png" 
              alt="Parent and child" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-2 left-1/8 transform translate-x-1/2 -translate-y-1/2 w-60 h-60">
            <img 
              src="/images/pg1img2.png" 
              alt="Smiling man" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="absolute bottom-20 left-1/8 transform -translate-x-1/2 translate-y-1/2 w-60 h-60">
            <img 
              src="/images/pg1img3.png" 
              alt="Curly haired woman" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Text Section - Right Side */}
        <div className="w-1/2 space-y-2 mt-14 pr-7">
          <h1 className="text-7xl font-bold whitespace-nowrap">
            YOUR SAFE SPACE
          </h1>
          <h1 className="text-7xl font-bold whitespace-nowrap ml-48">
           YOUR VOICE
          </h1>
          <p className="text-gray-300 mt-6 left-1/3 pr-6 relative">
            A safe and supportive space designed especially for neurodiverse individuals.
            Here, you can freely express your thoughts, share your challenges, and find comfort
            in open conversations with our interactive chatbot.
          </p>
        </div>

        {/* Fixed Chat Button */}
        {showChatButton && (
          <button 
            onClick={scrollToLoginSection}
            className="fixed bottom-16 left-2/3 px-20 py-0 border-2 h-20 text-2xl border-purple-400 rounded-full text-white hover:bg-purple-500 transition-all z-50"
          >
            chat with us →
          </button>
        )}
      </div>

      {/* Second Page - Differences as Strengths Section */}
      <div className="relative min-h-screen">
        {/* Full Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/bg2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)', // Black overlay
            backgroundBlendMode: 'darken' // Darkens the image
          }}
        >
          {/* Blue Overlay */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundColor: 'rgba(30, 64, 175, 0.5)', // Blueish tint
              mixBlendMode: 'multiply'
            }}
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen items-center justify-center p-16">
          <div className="absolute top-1/2 transform -translate-y-1/2 space-y-2 pl-16">
            <h2 className="text-6xl font-bold">WHERE</h2>
            <h2 className="text-6xl font-bold">YOUR</h2>
            <h2 className="text-6xl font-bold">DIFFER</h2>
            <h2 className="text-6xl font-bold">ENCES</h2>
            <h2 className="text-6xl font-bold">AREYOUR</h2>
            <h2 className="text-6xl font-bold">STREN</h2>
            <h2 className="text-6xl left-[400px] font-bold">GTHS</h2>
            
            {/* Neurodiversity Tags - Individually Positioned */}
            <div className="bottom-[460px] left-[100%] relative">
              <span className="absolute top-0 left-[450px] px-20 py-4 bg-purple-600 text-white rounded-full text-3xl font-semibold">
                Dyslexic
              </span>
              <span className="absolute top-0 left-[750px] px-20 py-4 bg-purple-600 text-white rounded-full text-3xl font-semibold">
                Dyspraxia
              </span>
              <span className="absolute top-[120px] left-[600px] px-20 py-4 bg-purple-600 text-white rounded-full text-3xl font-semibold">
                Autistic
              </span>
              <span className="absolute top-[240px] left-[450px] px-16 py-4 bg-purple-600 text-white rounded-full text-3xl font-semibold">
                Dyscalculia
              </span>
              <span className="absolute top-[240px] left-[750px] px-24 py-4 bg-purple-600 text-white rounded-full text-3xl font-semibold">
                ADHD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page - Login Section */}
      <div 
        ref={loginSectionRef}
        className="min-h-screen flex items-center justify-center px-16 py-10 
        bg-gradient-to-br from-[#1E1536] via-purple-900 to-blue-900 
        background-animate"
      >
        <div className="w-full max-w-4xl flex">
          {/* Illustration Side */}
          <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-l-3xl flex items-center justify-center p-12">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <img 
                  src="/images/meditate.png" 
                  alt="Meditation illustration" 
                  className="w-80 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Login Form Side */}
          <div className="w-1/2 bg-white rounded-r-3xl p-12 flex items-center">
            <form onSubmit={handleLogin} className="w-full">
              <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Login</h2>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  Forgot password?
                </a>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  Create an account
                </a>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
{/* Meet Our Team Section */}
<div className="bg-[#1E1536] text-white min-h-screen flex flex-col items-center justify-center py-20">
  <h2 className="text-6xl font-bold mb-16">MEET OUR TEAM</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-10">
    
    {/* Shraddha */}
    <div className="text-center">
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 mx-auto">
        <img src="/images/pg1img1.png" alt="Shraddha" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-semibold mt-6">Shraddha</h3>
      <p className="text-gray-300 text-lg">C.S.E Bit Mesra</p>
    </div>

    {/* Shivam */}
    <div className="text-center">
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 mx-auto">
        <img src="/images/pg1img1.png" alt="Shivam" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-semibold mt-6">Shivam</h3>
      <p className="text-gray-300 text-lg">C.S.E Bit Mesra</p>
    </div>

    {/* Aditya */}
    <div className="text-center">
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 mx-auto">
        <img src="/images/pg1img1.png" alt="Aditya" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-semibold mt-6">Aditya</h3>
      <p className="text-gray-300 text-lg">Q.E.D.S Bit Mesra</p>
    </div>

    {/* Rajiv */}
    <div className="text-center">
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 mx-auto">
        <img src="/images/pg1img1.png" alt="Rajiv" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-semibold mt-6">Rajiv</h3>
      <p className="text-gray-300 text-lg">E.C.E Bit Mesra</p>
    </div>

  </div>
</div>


    </div>
  );
}

export default App;
