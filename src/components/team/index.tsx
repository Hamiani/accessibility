import "./team.css";

const Team = () => (
  <div className="content team">
    <h1>La répartition des équipes lilloises</h1>
    <p>Mot de passe : Lille2018 🔓</p>

    <iframe
      width="100%"
      height="700"
      style={{ borderRadius: "15px", border: 0 }}
      src="https://view.genially.com/65797d850938f90014a7b6b8"
      title="Présentation de l'équipe lilloise par practice"
      loading="lazy"
    />
  </div>
);

export default Team;
