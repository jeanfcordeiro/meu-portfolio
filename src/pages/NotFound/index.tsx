import { Link } from 'react-router';
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
          <Link to='/' className='btn'>
            Voltar para o Início
          </Link>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
