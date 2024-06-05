import { Card, Col, Divider, Row } from "antd";

import { useMediaQuery } from "react-responsive";

import "./career.css";
import Meta from "antd/es/card/Meta";
import { openInNewTab } from "../../helper";

const Career = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="content career">
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={10} lg={10} xl={8} xxl={8}>
          <h1 id="lille-heading">LILLE</h1>
          <p>
            Surnommée la capitale des Flandres, où se côtoient intempéries et
            amateurs de bières, on ne présente plus Lille ! Notre équipe
            lilloise, jeune et motivée, est basée à la Madeleine à 5 minutes du
            centre ville.
          </p>
          <p>
            Nous sommes situés au 1er étage d’un immeuble. Vous y trouverez un
            open-space et une cuisine partagée dont vous pouvez profiter.
          </p>
        </Col>

        <Col xs={24} sm={24} md={14} lg={12} xl={10} xxl={12}>
          <img
            width={isMobile ? 400 : 700}
            height={isMobile ? 400 : 500}
            aria-labelledby="lille-heading"
            alt="Cinq personnages dans un bureau avec le beffroi de Lille en arrière plan"
            src="https://careers.wemanity.com/img/offices/header-office-lille.svg"
          />
        </Col>
      </Row>
      <h2 id="amenities-heading">LES À-CÔTÉS SYMPAS DE NOS LOCAUX</h2>
      <Row justify={"space-between"} className="pt-2">
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            alt="Pinte de bière bleue"
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-afterwork.svg"
          />
          <p>Afterwork bi-mensuel</p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            alt="Poids pour la musculation bleus"
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-sport.svg"
          />
          <p>Salle de sport dans le bâtiment</p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            alt="Signalétique bleue parking vélo"
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-bike-parking.svg"
          />
          <p>Parking à vélo</p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            alt="Cuisinière bleue"
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-kitchen.svg"
          />
          <p>Cuisine partagée</p>
        </Col>
        <Col className="center" span={4}>
          <img
            height={50}
            width={50}
            alt="Fenêtre bleue avec un soleil"
            src="https://careers.wemanity.com/img/offices/nice-extras-offices-luminous.svg"
          />
          <p>Bureau lumineux</p>
        </Col>
      </Row>
      <Row className="pt-2" justify={"space-between"} gutter={[16, 16]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
          <img
            className="office-picture"
            alt="L'espace de détente des bureaux de Wemanity à Lille présente un décor moderne avec des sièges confortables, de grandes plantes et une vue sur la rue grâce à des fenêtres arquées."
            src="https://careers.wemanity.com/img/offices/bureau_lille_1.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <img
            className="office-picture"
            alt="Un mur végétal orné du logo lumineux de Wemanity décore les bureaux de l'entreprise à Lille, ajoutant une touche de nature et de modernité à l'espace de travail."
            src="https://careers.wemanity.com/img/offices/bureau_lille_2.jpg"
          />
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <img
            className="office-picture"
            alt="un espace de détente avec une table de billard moderne et un baby-foot, offrant aux employés des moments de convivialité et de relaxation."
            src="https://careers.wemanity.com/img/offices/bureau_lille_3.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          <img
            className="office-picture"
            alt=" Un espace de bureau moderne et lumineux  avec des postes de travail alignés près de grandes fenêtres arquées, une plante en pot et un fauteuil rose confortable au premier plan."
            src="https://careers.wemanity.com/img/offices/bureau_lille_4.jpg"
          />
        </Col>
      </Row>
      <h2 className="pt-2">OFFRES D’EMPLOI À LILLE</h2>

      <Row
        className="pt-2"
        justify="space-between"
        gutter={[16, 16]}
        align="middle"
      >
        {jobOffers.map((job, index) => (
          <Col
            key={`job-${index}`}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={6}
            xxl={6}
          >
            <Card hoverable role="button" onClick={() => openInNewTab(job.url)}>
              <Meta
                title={
                  <h3 style={{ whiteSpace: "normal" }}>
                    {job.title.toUpperCase()}
                  </h3>
                }
                description={<p>{job.location}</p>}
              />
              <Divider />
              <p>{job.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};
const jobOffers = [
  {
    title: "quality analyst",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/quality-analyst-lille/",
  },
  {
    title: "développeur java jee",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/developpeur-java-lille/",
  },
  {
    title: "développeur node js",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/developpeur-node-js-lille/",
  },
  {
    title: "développeur mobile (Android et/ou IOS)",
    location: "Lille, France",
    description: "Tech & DevOps / Lille / CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/developpeur-mobile-lille/",
  },
  {
    title: "designer ux/ui",
    location: "Lille, France",
    description: "Experience Design (UX/UI) / Lille / CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/ux-ui-designer-lille/",
  },
  {
    title: "scrum master",
    location: "Lille, France",
    description: "Scrum Mastering / Facilitation / Lille/ CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/scrum-master-lille/",
  },
  {
    title: "product owner",
    location: "Lille, France",
    description: "Product Management & Innovation / Lille/ CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/product-owner-lille/",
  },
  {
    title: "ingénieur devops",
    location: "Lille, France",
    description: "Tech & DevOps/ Lille/ CDI",
    url: "https://careers.wemanity.com/fr/offres-emplois/ingenieur-devops-lille/",
  },
];

export default Career;
