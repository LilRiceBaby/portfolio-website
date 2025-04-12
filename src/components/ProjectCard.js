import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col xs="auto">
      <div className="proj-imgbx">
        <div className="project-img-wrapper">
          <img src={imgUrl} alt={title} className="project-image" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {githubUrl && (
            <div className="github-link">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
