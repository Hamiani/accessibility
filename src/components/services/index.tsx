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
        {serviceCards.map((service, index) => {
          return (
            <Col
              key={`services-${index}`}
              style={{ display: "inline-flex", alignSelf: "stretch" }}
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={8}
              xxl={8}
            >
              <Card
                role="button"
                hoverable={service.serviceLink !== null}
                onClick={() =>
                  service.serviceLink ? openInNewTab(service.serviceLink) : {}
                }
                cover={
                  <img
                    height={150}
                    width={150}
                    alt={service.alt}
                    src={service.imageLink}
                  />
                }
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </main>
  );
};

const serviceCards = [
  {
    title: "Transformation, stratégie & change.",
    description: `Cadrer et accompagner votre transformation agile grâce à des
    équipes pluridisciplinaires et à notre approche globale, associant
    des assets à une expertise inégalée en agilité.`,
    serviceLink:
      "https://wemanity.com/fr/organisations-agiles-conduite-changement/",
    imageLink:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-01.svg",
    alt: "Pictogramme blanc représentant la Gestion du changement et l'Agile.",
  },
  {
    title: "Agile IT, architecture & API.",
    description: `Faire de la technologie un puissant moteur de votre stratégie
    business et construire un système d’information composable,
    ouvert, solide et frugal.`,
    serviceLink: "https://wemanity.com/fr/agile-IT/",
    imageLink:
      "https://wemanity.com/img/activities/how-we-can-help-you-agil-IT.svg",
    alt: "Pictogramme blanc représentant l'Agile IT.",
  },
  {
    title: "Data & IA.",
    description: `Booster votre business à travers une utilisation stratégique et
    pérenne de vos données, axée sur l’approche client.`,
    serviceLink: "https://wemanity.com/fr/data/",
    imageLink:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-04.svg",
    alt: "Pictogramme blanc représentant le Data et l'intelligence artificielle.",
  },
  {
    title: "Digital delivery & expérience utilisateur.",
    description: `Concevoir et délivrer des produits digitaux innovants, adaptés aux
    usages de vos clients grâce à nos équipes pluridisciplinaires.`,
    serviceLink:
      "https://wemanity.com/fr/experience-utilisateur-digital-delivery/",
    imageLink:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-05.svg",
    alt: "Pictogramme blanc représentant le Digital Delivery.",
  },
  {
    title: "Centre de formation.",
    description: `Soutenir votre transformation par une expérience de formation
    sur-mesure pour ancrer les nouvelles compétences et les nouvelles
    formes de leadership.`,
    serviceLink: "https://wemanity.com/fr/centre-de-formation/",
    imageLink:
      "https://wemanity.com/img/activities/how-we-can-help-you-activities-07.svg",
    alt: "Pictogramme blanc représentant le Centre de formation.",
  },
  {
    title: "Sustainable shift.",
    description: `Les entreprises ne peuvent plus se contenter de se transformer ;
    elles doivent élargir leurs critères de performance afin d’innover
    de manière durable. Nous les accompagnons dans l’accélération de
    cette démarche vers la durabilité à travers l’engagement, la
    techforgood et l’Agile.`,
    serviceLink: null,
    imageLink: "https://wemanity.com/img/activities/sustainable-shift.svg",
    alt: "Pictogramme blanc représentant la Sustainable shift.",
  },
];

export default Services;
