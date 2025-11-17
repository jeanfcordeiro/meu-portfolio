import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <header className='header'>
          <h2 className='title'>Jean Felipe</h2>
          <div className='menu'>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Projetos</a>
              </li>
              <li>
                <a href='#'>Currículo</a>
              </li>
            </ul>
          </div>
        </header>

        <section>
          <h1>Desenvolvedor Frot-End</h1>
          <p>Headline Lorem ipsum dolor sit amet.</p>
        </section>

        <section>
          <a href='#' className='btn'>
            Projetos
          </a>
          <a href='#' className='btn'>
            Currículo
          </a>
        </section>

        <section>
          <img src='../public/images/imagem.png' alt='' />
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam vel
            nemo voluptas perferendis quidem esse consequatur iure eos eum.
          </p>
        </section>

        <footer>
          <h2>Minhas redas</h2>
          <ul>
            <li>
              <a href='#'>GitHub</a>
            </li>
            <li>
              <a href='#'>LinkekIn</a>
            </li>
          </ul>
        </footer>
      </Container>
    </>
  );
}
