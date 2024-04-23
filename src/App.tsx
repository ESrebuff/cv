import { useEffect, useState } from "react";
import "./App.scss"; // Assurez-vous que le chemin soit correct
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
      const windowHeight = window.innerHeight;
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
            <MainSection title="Objectif">
              <p>
                Je suis passionné par le développement web et les technologies
                full-stack, avec une expérience initiale en développement
                front-end obtenue au cours de trois années d'alternance. Curieux
                et désireux d'apprendre, je cherche à intégrer une équipe
                dynamique où je pourrais mettre à profit mes compétences tout en
                continuant à évoluer professionnellement.
              </p>
            </MainSection>

            <Section title="Éducation">
              <ul>
                <li>
                  Développeur Full-Stack - Java et Angular, Openclassrooms, 2023
                  - 2024
                </li>
                <li>
                  Formation Expert en Systèmes d'Information, 3W ACADEMY, 2022 -
                  2023
                </li>
                <li>
                  Concepteur Développeur d'Application Java Fullstack,
                  Diginamic, 2021 - 2022
                </li>
                <li>Développeur Web, Openclassrooms, 2019 - 2021</li>
              </ul>
            </Section>

            <Section title="Expérience Professionnelle">
              <div>
                <h3>Développeur Front-End, Matchers, 2021 - 2024</h3>
                <ul>
                  <li>
                    Automatisation de l’envoi d’emails et gestion de documents
                    via Google Sheets et AppScript.
                  </li>
                  <li>
                    Développement de pages web en Vue + Nuxt et React + Next,
                    intégration de maquettes, création de formulaires et
                    éléments visuels.
                  </li>
                  <li>
                    Tests end-to-end avec Cypress, création de mocks, et
                    utilisation de méthodologies Agile (Kanban, Scrum).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Compétences Techniques">
              <p>
                HTML, CSS, SCSS, JavaScript, TypeScript, Node.js, Java, PHP,
                SQL, Express, Spring, Angular, Vue.js, Nuxt.js, React, Next.js,
                Google AppScript, Cypress, MUI, Tailwind CSS, SCRUM, CI/CD
              </p>
            </Section>

            <Section title="Langues">
              <p>
                Anglais : Courant mais imparfait (Niveau B2 en 2019, aujourd'hui
                courant)
              </p>
            </Section>

            <Section title="Centres d'Intérêt">
              <p>
                Voyage, apprentissage continu, travail d'équipe, curiosité
                technologique.
              </p>
            </Section>
          </div>
        </div>
        <div className="hero">
          <header className="header">
            <h1>Esteban Rebuffé-Mareau</h1>
            <p>Développeur web</p>
          </header>
        </div>
        <div className="cv-container">
          <div className="cv">
            <MainSection title="Objectif">
              <p>
                Je suis passionné par le développement web et les technologies
                full-stack, avec une expérience initiale en développement
                front-end obtenue au cours de trois années d'alternance. Curieux
                et désireux d'apprendre, je cherche à intégrer une équipe
                dynamique où je pourrais mettre à profit mes compétences tout en
                continuant à évoluer professionnellement.
              </p>
            </MainSection>

            <Section title="Éducation">
              <ul>
                <li>
                  Développeur Full-Stack - Java et Angular, Openclassrooms, 2023
                  - 2024
                </li>
                <li>
                  Formation Expert en Systèmes d'Information, 3W ACADEMY, 2022 -
                  2023
                </li>
                <li>
                  Concepteur Développeur d'Application Java Fullstack,
                  Diginamic, 2021 - 2022
                </li>
                <li>Développeur Web, Openclassrooms, 2019 - 2021</li>
              </ul>
            </Section>

            <Section title="Expérience Professionnelle">
              <div>
                <h3>Développeur Front-End, Matchers, 2021 - 2024</h3>
                <ul>
                  <li>
                    Automatisation de l’envoi d’emails et gestion de documents
                    via Google Sheets et AppScript.
                  </li>
                  <li>
                    Développement de pages web en Vue + Nuxt et React + Next,
                    intégration de maquettes, création de formulaires et
                    éléments visuels.
                  </li>
                  <li>
                    Tests end-to-end avec Cypress, création de mocks, et
                    utilisation de méthodologies Agile (Kanban, Scrum).
                  </li>
                </ul>
              </div>
            </Section>

            <Section title="Compétences Techniques">
              <p>
                HTML, CSS, SCSS, JavaScript, TypeScript, Node.js, Java, PHP,
                SQL, Express, Spring, Angular, Vue.js, Nuxt.js, React, Next.js,
                Google AppScript, Cypress, MUI, Tailwind CSS, SCRUM, CI/CD
              </p>
            </Section>

            <Section title="Langues">
              <p>
                Anglais : Courant mais imparfait (Niveau B2 en 2019, aujourd'hui
                courant)
              </p>
            </Section>

            <Section title="Centres d'Intérêt">
              <p>
                Voyage, apprentissage continu, travail d'équipe, curiosité
                technologique.
              </p>
            </Section>

            <Section title="Centres d'Intérêt">
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
