import { Card, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import "./services.css";
import { openInNewTab } from "../../helper";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <main className="content services">
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <h1>NOS OFFRES</h1>
          <p>
            Dans un contexte de changement permanent, nous vous aidons à vous
            adapter et à maximiser la valeur apportée à vos clients. Véritables
            artisans de la transformation, nous vous aidons à tous les niveaux
            de l’entreprise à faire de la coopération, de l’innovation et de
            l’agilité vos armes de demain.
          </p>
          <h2>
            DÉCOUVREZ NOS EXPERTISES CLÉS POUR MENER VOTRE TRANSFORMATION DE
            BOUT EN BOUT
          </h2>
          <p>
            Wemanity est un écosystème d’innovation, spécialiste de la
            transformation des organisations.
          </p>
          <p>
            Notre mission ? Défiez les limites de la performance ! Accélérer
            votre progression de manière durable et créer de la valeur pour vos
            clients.
          </p>
          <p>
            Nous vous accompagnons à chaque étape de votre chaîne de valeur et à
            différents niveaux de votre organisation : ExCo, management et
            équipes.
          </p>
          <p>
            Pour ce faire, nous rassemblons des expertises complémentaires au
            sein d’une même équipe, coopérant efficacement grâce à une culture,
            des outils et des méthodes partagés.
          </p>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={10}>
          <img
            width={isMobile ? 300 : 500}
            height={isMobile ? 300 : 500}
            alt="Illustration graphique représentant les membres d'une équipe qui analysent des données et qui résolvent des problèmes"
            src="https://wemanity.com/img/activities/illustration-header-our-activities.svg"
          />
        </Col>
      </Row>
      <Row justify="space-between" gutter={[48, 16]} align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            role="button"
            hoverable
            onClick={() =>
              openInNewTab(
                "https://wemanity.com/fr/organisations-agiles-conduite-changement/"
              )
            }
            cover={
              <img
                height={150}
                width={150}
                alt="Transformation, stratégie & change"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-01.svg"
              />
            }
          >
            <h3>Transformation, stratégie & change</h3>
            <p>
              Cadrer et accompagner votre transformation agile grâce à des
              équipes pluridisciplinaires et à notre approche globale, associant
              des assets à une expertise inégalée en agilité.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            role="button"
            hoverable
            onClick={() => openInNewTab("https://wemanity.com/fr/agile-IT/")}
            cover={
              <img
                height={150}
                width={150}
                alt="Agile IT, architecture & API"
                src="https://wemanity.com/img/activities/how-we-can-help-you-agil-IT.svg"
              />
            }
          >
            <h3>Agile IT, architecture & API</h3>
            <p>
              Faire de la technologie un puissant moteur de votre stratégie
              business et construire un système d’information composable,
              ouvert, solide et frugal.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            role="button"
            hoverable
            onClick={() => openInNewTab("https://wemanity.com/fr/data/")}
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-04.svg"
              />
            }
          >
            <h3>Data & IA</h3>
            <p>
              Booster votre business à travers une utilisation stratégique et
              pérenne de vos données, axée sur l’approche client.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            role="button"
            hoverable
            onClick={() =>
              openInNewTab(
                "https://wemanity.com/fr/experience-utilisateur-digital-delivery/"
              )
            }
            cover={
              <img
                height={150}
                width={150}
                alt="Digital delivery & expérience utilisateur"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-05.svg"
              />
            }
          >
            <h3>Digital delivery & expérience utilisateur</h3>
            <p>
              Concevoir et délivrer des produits digitaux innovants, adaptés aux
              usages de vos clients grâce à nos équipes pluridisciplinaires.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            role="button"
            hoverable
            onClick={() =>
              openInNewTab("https://wemanity.com/fr/centre-de-formation/")
            }
            cover={
              <img
                height={150}
                width={150}
                alt="Centre de formation"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-07.svg"
              />
            }
          >
            <h3>Centre de formation</h3>
            <p>
              Soutenir votre transformation par une expérience de formation
              sur-mesure pour ancrer les nouvelles compétences et les nouvelles
              formes de leadership.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            cover={
              <img
                height={150}
                width={150}
                alt="Sustainable shift"
                src="https://wemanity.com/img/activities/sustainable-shift.svg"
              />
            }
          >
            <h3>Sustainable shift</h3>
            <p>
              Les entreprises ne peuvent plus se contenter de se transformer ;
              elles doivent élargir leurs critères de performance afin d’innover
              de manière durable. Nous les accompagnons dans l’accélération de
              cette démarche vers la durabilité à travers l’engagement, la
              techforgood et l’Agile.
            </p>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Services;
