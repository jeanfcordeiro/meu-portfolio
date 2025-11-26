import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Theme } from '../../components/Theme';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Theme />
      <Container>
        <Header />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
