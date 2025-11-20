import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Cta } from './components/Cta';
import { About } from './components/About';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <main>
          <Hero />
          <Cta />
          <About />
        </main>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
