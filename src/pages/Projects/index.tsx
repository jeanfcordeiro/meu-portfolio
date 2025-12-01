import { Container } from '../../components/Container';
import { ProjectContainer } from '../../components/ProjectContainer';
import { SectionTitle } from '../../components/SectionTitle';
import { MainTemplate } from '../../template/MainTemplate';

export function Projects() {
  return (
    <MainTemplate>
      <Container>
        <SectionTitle>Meus Projetos</SectionTitle>
        <ProjectContainer
          image={'../../public/images/imagem.png'}
          title={'Título do Projeto'}
          description={
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />

        <ProjectContainer
          image={'../../public/images/imagem2.png'}
          title={'Título do Projeto'}
          description={
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod onsectetur adipiscing elit. Sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.'
          }
        />

        <ProjectContainer
          image={'../../public/images/imagem3.png'}
          title={'Título do Projeto'}
          description={
            'lorem ipsum dolor sit amet, consecteturonsectetur adipiscing elit. Sed do eiusmodonsectetur adipiscing elit. Sed do eiusmodonsectetur adipiscing elit. Sed do eiusmod adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        />
      </Container>
    </MainTemplate>
  );
}
