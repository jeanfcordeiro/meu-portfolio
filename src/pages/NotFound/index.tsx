import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { MainTemplate } from '../../template/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <h1>404</h1>
          <h2>Ops! Página não encontrada</h2>
          <p>
            A página que você está procurando pode ter sido removida ou o link
            está incorreto.
          </p>
          <a href='/' className='btn'>
            Voltar para o Início
          </a>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
