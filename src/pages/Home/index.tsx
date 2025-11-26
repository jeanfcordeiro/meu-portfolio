import { About } from '../../components/About';
import { Container } from '../../components/Container';
import { Cta } from '../../components/Cta';
import { Hero } from '../../components/Hero';
import { MainTemplate } from '../../template/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <main>
          <Hero />
          <Cta />
          <About />
        </main>
      </Container>
    </MainTemplate>
  );
}
