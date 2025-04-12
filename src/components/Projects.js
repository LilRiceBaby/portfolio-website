import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const slotMachineProjects = [
    {
      title: "Social Media Blog API",
      description: "RESTful API with registration, login, and CRUD for posts/comments",
      imgUrl: projImg1,
      githubUrl: "https://github.com/LilRiceBaby/Social-media-blog-API",
    }
  ];
  
  const socialMediaProjects = [
    {
      title: "Slot Game Machine",
      description: "A C++ command-line game simulating slot machine logic with randomness and scoring",
      imgUrl: projImg2,
      githubUrl: "https://github.com/LilRiceBaby/slot_machine",
    }
  ];
  
  const imageConverterProjects = [
    {
      title: "HEIC to JPG Converter",
      description: "Python GUI app using Pillow for converting images between formats",
      imgUrl: projImg3,
      githubUrl: "https://github.com/LilRiceBaby/Convert-HEIC-to-JPG",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This section highlights a selection of my development projects, including a Social Media Blog API, a HEIC to JPG image converter, and a CLI-based Slot Machine game. Each project demonstrates my ability to build practical, user-focused solutions using Java, Python, JavaScript, SQL, and RESTful APIs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Slot Game Machne</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Social Media Blog API</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">HEIC to JPG Converter</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                  <p>This project is a command-line slot machine game built with Node.js, designed to simulate a simple casino experience. The game features symbol frequency control, payout multipliers, error handling, and wallet balance tracking. A casino mechanics built to demonstrate logic flow, randomness, and user input validation in JavaScript.</p>
                  <Row>
                    {socialMediaProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                  <p>This project is a backend for a hypothetical social media app, where we must manage our users’ accounts as well as any messages that they submit to the application. The application will function as a micro-blogging or messaging app. Any user should be able to see all of the messages posted to the site, or they can see the messages posted by a particular user. In either case, we require a backend which is able to deliver the data needed to display this information.</p>
                  <Row>
                    {slotMachineProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                  <p>HEIC (High-Efficiency Image Container) is Apple's default image format on iPhones. It's efficient, but not exactly friendly—most browsers and apps don't like it natively. So this is a simple, user-friendly Python application with a GUI to convert `.heic` image files (common on iPhones) into `.jpg` format. Powered by Tkinter and Pillow, this tool helps you to handle Apple’s odd image formats.</p>
                  <Row>
                    {imageConverterProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                  </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
