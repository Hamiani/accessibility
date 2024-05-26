import { Steps } from "antd";
import { CiCircleCheck } from "react-icons/ci";

import "./history.css";
const History = () => {
  return (
    <main className="content history">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Notre Histoire
      </h1>
      <Steps
        direction="vertical"
        responsive
        size="default"
        items={[
          {
            title: <h5>Fondation de Wemanity</h5>,
            status: "process",
            description: (
              <>
                <p>
                  Jean-Christophe Conticello crée Wemanity à Paris autour d’une
                  ambition forte : changer le monde du travail pour le rendre
                  plus harmonieux,responsable et durable.
                </p>
                <h5>
                  Lancement de notre activité Transformation agile des
                  organisations
                </h5>
                <p>
                  Création en quelques années de la plus grande communauté Agile
                  d’Europe.
                </p>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span> 2013</span>
              </>
            ),
          },
          {
            title: (
              <h5>
                Lancement de nos activités Tech et de nos dispositifs de squads
                techniques
              </h5>
            ),
            status: "process",
            description: (
              <>
                <p>
                  Nous adressons le scope historique de l’agilité, la DSI, et
                  impactons réellement le delivery.
                </p>
                <h5>Ouverture de nos bureaux à Bruxelles, Belgique</h5>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2014</span>
              </>
            ),
          },
          {
            title: <h5>Ouverture de nos bureaux aux Pays-Bas</h5>,
            status: "process",
            description: (
              <>
                <p>
                  Avec Arie van Bennekum, co-auteur du manifeste agile et
                  thought leader du groupe.
                </p>
                <h5>
                  Lancement de notre activité Expérience Utilisateur et Digital
                  Delivery sous la marque Wemanity Digital
                </h5>
                <p>
                  Objectif : concevoir des produits et services digitaux
                  innovants.
                </p>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2016</span>
              </>
            ),
          },
          {
            status: "process",
            title: <h5>Lancement de notre programme RSE Weimpact</h5>,
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2017</span>
              </>
            ),
          },
          {
            status: "process",
            title: (
              <h5>Lancement de notre activité Data sous la marque Wewyse</h5>
            ),
            description: (
              <>
                <p>
                  Un des piliers clés pour développer une organisation centrée
                  client.
                </p>
                <h5>
                  Lancement de notre Learning Center sous la marque Wemanity
                  Learning Center
                </h5>
                <p>
                  Objectif : accompagner et former le capital humain des
                  organisations.
                </p>
                <h5>Ouverture de nos bureaux au Maroc</h5>
                <h5>Ouverture de nos bureaux à Lille, France</h5>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2019</span>
              </>
            ),
          },
          {
            status: "process",
            title: <h5>Intégration de Management 3.0</h5>,
            description: (
              <>
                <p>
                  Wemanity devient majoritaire dans la société Management 3.0
                  développée depuis 2018 avec Jurgen Appelo qui apporte des
                  assets précieux pour aider le management à se
                  transformer.iliers clés pour développer une organisation
                  centrée client.
                </p>
                <h5>
                  Lancement de nos premières transformations en Asie et en
                  Amérique avec Arie van Bennekum
                </h5>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2019</span>
              </>
            ),
          },
          {
            status: "process",
            title: <h5>Acquisition de DigitalScaler</h5>,
            description: (
              <>
                <p>
                  Société flamande spécialiste de la transformation agile et
                  digitale, créée par Sonja Noben.
                </p>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2020</span>
              </>
            ),
          },
          {
            status: "process",
            title: <h5>Ouverture de nos bureaux à Anvers, Belgique`</h5>,
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2021</span>
              </>
            ),
          },
          {
            status: "process",
            title: <h5>Wemanity rejoint Reply et son réseau d’entreprises</h5>,
            description: (
              <>
                <p>
                  Reply est un groupe italien fonctionnant en réseau, composé
                  d’entreprises et de startups spécialisées dans l’innovation
                  technologique, le design et l'implémentation de solutions
                  digitales.`
                </p>
                <h5>
                  Wemanity France devient membre de la French Tech Corporate
                  Community`
                </h5>
                <p>
                  La French Tech Corporate Community est l’un des 120 grands
                  groupes français et européens qui œuvrent sur neuf grandes
                  thématiques clés pour la compétitivité de l'économie
                  française.`
                </p>
              </>
            ),
            icon: (
              <>
                <CiCircleCheck size={60} />
                <span>2022</span>
              </>
            ),
          },
        ]}
      />
    </main>
  );
};

export default History;
