import { ToastContainer } from 'react-toastify';

import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import TechnologiesSection from './components/TechnologiesSection.jsx';
import { StackProvider } from './context/StackContext.jsx';
import { useTechnologies } from './hooks/useTechnologies.js';

export default function App() {
  const { technologies, loading, error } = useTechnologies();

  return (
    <StackProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <TechnologiesSection technologies={technologies} loading={loading} error={error} />
        </main>

        <Footer />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
        theme="colored"
        style={{ zIndex: 70 }}
      />
    </StackProvider>
  );
}
