import { Download } from 'lucide-react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { ProfileCard } from '../../components/ProfileCard';
import { SectionTitle } from '../../components/SectionTitle';
import { MainTemplate } from '../../template/MainTemplate';

import styles from './styles.module.css';

export function Resume() {
  return (
    <MainTemplate>
      <Container>
        <main>
          <SectionTitle>Qualificações</SectionTitle>
          <section className={styles.resume__section}>
            <div className={styles.resume__header}>
              <h2 className={styles.resume__titles}>Experiências</h2>
              <div className={styles.resume__btn}>
                <Button href='/curriculo.pdf'>
                  <Download />
                  Currículo (PDF)
                </Button>
              </div>
            </div>

            <ProfileCard
              title='Front-end Developer'
              period='2022 – 2025'
              location='Curitiba, PR'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nihil, aut ipsa eos inventore reiciendis excepturi
                qui, molestias officia sit id. Qui iusto nulla impedit
                voluptates laudantium eveniet necessitatibus sit.'
            />
            <ProfileCard
              title='Front-end Developer'
              period='2022 – 2025'
              location='Curitiba, PR'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nihil, aut ipsa eos inventore reiciendis excepturi
                qui, molestias officia sit id. Qui iusto nulla impedit
                voluptates laudantium eveniet necessitatibus sit.'
            />
          </section>

          <section className={styles.resume__section}>
            <h2 className={styles.resume__titles}>Formação</h2>

            <ProfileCard
              title='Análise e Desenvolvimento de Sistemas'
              period='2022 - 2025'
              location='Curitiba, PR'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda nihil, aut ipsa eos inventore reiciendis excepturi
                qui, molestias officia sit id. Qui iusto nulla impedit
                voluptates laudantium eveniet necessitatibus sit.'
            />
          </section>
          <section className={styles.resume__section_skills}>
            <h2 className={styles.resume__titles}>Habilidades Técnicas</h2>
            <div>
              <ul className={styles.skills__list}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
            </div>
          </section>
        </main>
      </Container>
    </MainTemplate>
  );
}
