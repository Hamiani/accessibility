import { Card, Col, Row } from "antd";

import "./services.css";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div className="content services">
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <h1>Nos offres</h1>
          <p>
            Dans un contexte de changement permanent, nous vous aidons à vous
            adapter et à maximiser la valeur apportée à vos clients. Véritables
            artisans de la transformation, nous vous aidons à tous les niveaux
            de l’entreprise à faire de la coopération, de l’innovation et de
            l’agilité vos armes de demain.
          </p>
          <h3>
            DÉCOUVREZ NOS EXPERTISES CLÉS POUR MENER VOTRE TRANSFORMATION DE
            BOUT EN BOUT
          </h3>
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
      <Row justify={"space-between"} gutter={[48, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Transformation, stratégie & change"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-01.svg"
              />
            }
          >
            <h4>Transformation, stratégie & change</h4>
            <p>
              Cadrer et accompagner votre transformation agile grâce à des
              équipes pluridisciplinaires et à notre approche globale, associant
              des assets à une expertise inégalée en agilité.`
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Agile IT, architecture & API"
                src="https://wemanity.com/img/activities/how-we-can-help-you-agil-IT.svg"
              />
            }
          >
            <h4>Agile IT, architecture & API</h4>
            <p>
              Faire de la technologie un puissant moteur de votre stratégie
              business et construire un système d’information composable,
              ouvert, solide et frugal.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-04.svg"
              />
            }
          >
            <h4> Data & IA</h4>
            <p>
              Booster votre business à travers une utilisation stratégique et
              pérenne de vos données, axée sur l’approche client.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-05.svg"
              />
            }
          >
            <h4>Digital delivery & expérience utilisateur</h4>
            <p>
              Concevoir et délivrer des produits digitaux innovants, adaptés aux
              usages de vos clients grâce à nos équipes pluridisciplinaires.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/how-we-can-help-you-activities-07.svg"
              />
            }
          >
            <h4> Centre de formation</h4>
            <p>
              Soutenir votre transformation par une expérience de formation
              sur-mesure pour ancrer les nouvelles compétences et les nouvelles
              formes de leadership.
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card
            hoverable
            cover={
              <img
                height={150}
                width={150}
                alt="Data & IA"
                src="https://wemanity.com/img/activities/sustainable-shift.svg"
              />
            }
          >
            <h4> Sustainable shift</h4>
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
    </div>
  );
};

export default Services;
