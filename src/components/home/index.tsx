import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";

import "./home.css";

const Body = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <div className="content home">
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
          <section>
            <h1>Bienvenue sur notre page !</h1>
            <article className="justify">
              Nous sommes fiers d’être partenariat Gold pour le DevFest cette
              année. En tant qu'entreprise dédiée à l'innovation et à
              l'inclusion, Wemanity a préparé une animation spéciale sur notre
              stand pour cet événement incontournable
            </article>
            <h3>Découvrez notre Animation sur l'Accessibilité</h3>
            <article className="justify">
              L'accessibilité numérique est au cœur de nos préoccupations. Pour
              cette occasion, nous avons conçu une démonstration interactive
              visant à illustrer l'importance d'une conception web accessible.
              Venez découvrir par vous-même les différences entre une page web
              accessible et une page qui ne l'est pas.
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
            <p className="justify">
              Une page web accessible ne bénéficie pas seulement aux
              utilisateurs ayant des besoins spécifiques, mais améliore aussi
              l'expérience de tous les visiteurs. Nous vous montrerons comment
              des ajustements simples peuvent faire une grande différence.
            </p>
            <p className="justify">
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
            title="La Table ronde Décathlon x Wemanity "
          ></iframe>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <section>
            <h1>La Table ronde Décathlon x Wemanity</h1>
            <h3 className="justify">
              Plongez au cœur de notre récente table ronde sur le Product
              Marketing Management à Lille !
            </h3>
            <p className="justify">
              Nous avons pu vivre une journée exceptionnelle au Nù Lille,
              réunissant des esprits brillants autour du Product Marketing
              Management.
            </p>
            <p className="justify">
              Marion Joffre, Group Product Marketing Manager chez Decathlon, a
              captivée l'audience en partageant son expertise et son expérience
              sur le Product Marketing Management chez Decathlon Digital, tout
              en offrant un aperçu exclusif de sa collaboration fructueuse avec
              Wemanity.
            </p>
            <p className="justify">Au programme de cette table ronde :</p>
            <ul>
              <li className="justify">
                Des discussions stimulantes sur le déploiement du Product
                Marketing Management chez Decathlon, les résultats concrets,
                l’importance du PMM, la mise en place du PMM dans les
                organisations et les retours de Marion sur sa collaboration avec
                Wemanity.
              </li>
              <li className="justify">
                Le déjeuner, ponctuant notre table ronde, a offert l'occasion
                idéale de prolonger les échanges dans une atmosphère conviviale,
                renforçant les liens et créant des opportunités de synergies
                futures.
              </li>
            </ul>
            <p className="justify">
              Nous souhaitons remercier tous les participants pour avoir fait de
              cette table ronde un événement exceptionnel.
            </p>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Body;
