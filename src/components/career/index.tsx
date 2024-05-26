import { Card, Col, Divider, Row } from "antd";

import { useMediaQuery } from "react-responsive";

import "./career.css";
import Meta from "antd/es/card/Meta";

const Career = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <main className="content career">
      <Row justify={"space-between"} align={"middle"}>
        <Col xs={24} sm={24} md={10} lg={10} xl={8} xxl={8}>
          <h1>LILLE</h1>
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
            alt="Illustration graphique représentant les membres d'une équipe qui analysent des données et qui résolvent des problèmes"
            src="https://careers.wemanity.com/img/offices/header-office-lille.svg"
          />
        </Col>
      </Row>
      <h2>LES À-CÔTÉS SYMPAS DE NOS LOCAUX</h2>
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
            alt="Groupe de personnes assis autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_1.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <img
            className="office-picture"
            alt="Deux personnes assises autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_2.jpg"
          />
        </Col>

        <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
          <img
            className="office-picture"
            alt="Grande table blanche avec des chaises noires dans les locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_3.jpg"
          />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
          <img
            className="office-picture"
            alt="Groupe de personnes assis autour d'un bureau des locaux de Wemanity Lille"
            src="https://careers.wemanity.com/img/offices/bureau_lille_4.jpg"
          />
        </Col>
      </Row>
      <h2 className="pt-2">OFFRES D’EMPLOI À LILLE</h2>

      <Row
        className="pt-2"
        justify={"space-between"}
        gutter={[16, 16]}
        align={"middle"}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`quality analyst`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <div />
            <p>Tech & DevOps / Lille / CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`développeur java jee`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Tech & DevOps / Lille / CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`développeur node js`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Tech & DevOps / Lille / CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={
                <h6>
                  {`développeur mobile (Android et/ou IOS)`.toUpperCase()}
                </h6>
              }
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Tech & DevOps / Lille / CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`designer ux/ui`.toUpperCase()}</h6>}
              description={<p>{`Lille, France`.toUpperCase()}</p>}
            />
            <Divider />
            <p>Experience Design (UX/UI) / Lille / CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`scrum master`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Scrum Mastering / Facilitaion / Lille/ CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`product owner`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Product Management & Innovation / Lille/ CDI</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card hoverable>
            <Meta
              title={<h6>{`ingénieur devops`.toUpperCase()}</h6>}
              description={<p>Lille, France</p>}
            />
            <Divider />
            <p>Tech & DevOps/ Lille/ CDI</p>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Career;
