import { Container } from '../../components/Container';
import { MainTemplate } from '../../template/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
      </Container>
    </MainTemplate>
  );
}
