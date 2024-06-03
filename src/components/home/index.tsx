import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";

import "./home.css";

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <main className="content home">
      <Row justify={"start"} align={"middle"}>
        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
          <img
            width={isMobile ? "80%" : "90%"}
            height={isMobile ? "100%" : 400}
            src="https://wemanity.com/img/technological-capabilities/TechCapabilities-header-desktop.svg"
            alt="Illustration graphique représentant des personnes qui développent des programmes informatique"
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <section aria-labelledby="section1-title">
            <h1 id="section1-title">Bienvenue sur notre page !</h1>
            <article>
              <p>
                Nous sommes fiers d’être partenariat Gold pour le DevFest cette
                année. En tant qu'entreprise dédiée à l'innovation et à
                l'inclusion, Wemanity a préparé une animation spéciale sur notre
                stand pour cet événement incontournable.
              </p>
            </article>
            <h2>Découvrez notre Animation sur l'Accessibilité</h2>
            <article>
              <p>
                L'accessibilité numérique est au cœur de nos préoccupations.
                Pour cette occasion, nous avons conçu une démonstration
                interactive visant à illustrer l'importance d'une conception web
                accessible. Venez découvrir par vous-même les différences entre
                une page web accessible et une page qui ne l'est pas.
              </p>
            </article>
            <h3>Qu'allez-vous apprendre ?</h3>
            <ul>
              <li>Les principes de base de l'accessibilité numérique</li>
              <li>
                Les bonnes pratiques pour rendre une page web utilisable par
                tous, y compris les personnes en situation de handicap
              </li>
              <li>
                L'impact positif qu'une page web accessible peut avoir sur
                l'expérience utilisateur
              </li>
            </ul>
            <h3>Pourquoi est-ce important ?</h3>
            <p>
              Une page web accessible ne bénéficie pas seulement aux
              utilisateurs ayant des besoins spécifiques, mais améliore aussi
              l'expérience de tous les visiteurs. Nous vous montrerons comment
              des ajustements simples peuvent faire une grande différence.
            </p>
            <p>
              Nous vous invitons à visiter notre stand pour en savoir plus et
              participer à cette expérience éducative et enrichissante.
              Ensemble, construisons un web plus inclusif et accessible pour
              tous.
            </p>
          </section>
        </Col>
      </Row>
      <Row justify={"start"} align={"middle"}>
        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
          <iframe
            allowFullScreen
            height={isMobile ? 300 : 400}
            width={isMobile ? "100%" : "90%"}
            src="https://www.youtube.com/embed/gOcsgyZXQlE"
            title="La Table ronde Décathlon x Wemanity"
          ></iframe>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <section aria-labelledby="section2-title">
            <h2 id="section2-title">La Table ronde Décathlon x Wemanity</h2>
            <h3>
              Plongez au cœur de notre récente table ronde sur le Product
              Marketing Management à Lille !
            </h3>
            <p>
              Nous avons pu vivre une journée exceptionnelle au Nù Lille,
              réunissant des esprits brillants autour du Product Marketing
              Management.
            </p>
            <p>
              Marion Joffre, Group Product Marketing Manager chez Decathlon, a
              captivé l'audience en partageant son expertise et son expérience
              sur le Product Marketing Management chez Decathlon Digital, tout
              en offrant un aperçu exclusif de sa collaboration fructueuse avec
              Wemanity.
            </p>
            <p>Au programme de cette table ronde :</p>
            <ul>
              <li>
                Des discussions stimulantes sur le déploiement du Product
                Marketing Management chez Decathlon, les résultats concrets,
                l’importance du PMM, la mise en place du PMM dans les
                organisations et les retours de Marion sur sa collaboration avec
                Wemanity.
              </li>
              <li>
                Le déjeuner, ponctuant notre table ronde, a offert l'occasion
                idéale de prolonger les échanges dans une atmosphère conviviale,
                renforçant les liens et créant des opportunités de synergies
                futures.
              </li>
            </ul>
            <p>
              Nous souhaitons remercier tous les participants pour avoir fait de
              cette table ronde un événement exceptionnel.
            </p>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default Body;
