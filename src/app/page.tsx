import Navbar from '@/components/Navbar';
import VideoSection from '@/components/VideoSection';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <VideoSection />
            <main>
                <Hero />
                <Services />
                <Gallery />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
