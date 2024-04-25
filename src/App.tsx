import { useEffect, useState } from "react";
import "./App.scss";
import PersistentDrawerLeft from "./components/drawer";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function App() {
  const [backGroundImg, setBackGroundImg] = useState("default-img");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight += 100;
      if (position >= windowHeight) {
        setBackGroundImg("holiday-img");
      } else {
        setBackGroundImg("default-img");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`background ${backGroundImg}`}></div>
      <PersistentDrawerLeft>
        <div className="hero">
          <header className="header">
            <h1>Esteban Rebuffé-Mareau</h1>
            <p>Développeur web</p>
          </header>
        </div>
        <div className="cv-container">
          <div className="cv">
            <MainSection title="Profil Professionnel">
              <p>
                Je suis un développeur front-end avec plus de deux ans d'expérience, spécialisé dans la création de sites web réactifs et innovants. Je suis à l'aise avec des technologies front-end modernes et l'automatisation des processus. Je recherche des projets stimulants où je peux mettre en valeur mes compétences et apporter des solutions efficaces.
              </p>
            </MainSection>

            <Section title="Expérience Professionnelle">
              <div>
                <h3>Développeur Front-End, Matchers, 2021 - 2024</h3>
                <ul>
                  <li>
                    Automatisation de l’envoi d’emails et gestion de documents via Google Sheets et AppScript
                  </li>
                  <li>
                    Développement et intrégation des pages web en Vue + Nuxt et React + Next.
                  </li>
                  <li>
                    Tests end-to-end avec Cypress, création de mocks, et utilisation de méthodologies Agile (Kanban, Scrum)
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Éducation">
              <ul>
                <li>Développeur Full-Stack - Java et Angular, Openclassrooms, 2024</li>
                <li>Concepteur Développeur d'Application Java Fullstack, Diginamic, 2022</li>
                <li>Développeur Web, Openclassrooms, 2019</li>
              </ul>
            </Section>

            <Section title="Compétences Techniques">
              <ul>
                <li>Outils de développement : Git, GitHub</li>
                <li>Langages et technologies front-end : HTML, CSS, SCSS, JavaScript, TypeScript, React, Vue.js, Nuxt.js, Next.js</li>
                <li>Technologies back-end : Node.js, Java, PHP, SQL, Express, Spring</li>
                <li>Frameworks de test : Cypress</li>
                <li>Outils de développement : Visual code studio, Google AppScript</li>
                <li>Frameworks et bibliothèques CSS : MUI, Tailwind css, DaisyUi</li>
                <li>Méthodologies : SCRUM, CI/CD</li>

              </ul>
            </Section>

            <Section title="Langues">
              <p>Anglais : Courant</p>
            </Section>

            <Section title="Centres d'intérêt">
              <p>
                Je m'intéresse aux nouvelles technologies, à l'automatisation, et aux projets open source. J'aime également les activités en plein air et la collaboration avec des équipes diversifiées.
              </p>
            </Section>

            <Section title="Centres d'intérêt">
              <p>
                Voyage, apprentissage continu, travail d'équipe, curiosité
                technologique.
              </p>
            </Section>
          </div>
        </div>
      </PersistentDrawerLeft>
    </div>
  );
}

function MainSection({ title, children }: SectionProps) {
  return (
    <section className="cv-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="cv-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
