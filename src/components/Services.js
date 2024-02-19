import React from 'react';
// import headerImg from '../Assets/header-img.svg';
import ProjectCard from "./ProjectCards";
import react from "../Assets/react.png";
import flutter from "../Assets/Flutter.png";
import home from "../Assets/home-main.svg";


const Services = () => {
  return (
    <>
    <section className="Services">
      <section className="main">
        <div className="first" style={{ paddingTop: "100px" }}>
        <h1 className="project-heading">
        <strong className="purple">Services </strong> I offer...
        </h1>
        </div>
        <div className="serviceContainer">
          <div className="ServiceBox">
          <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Chatify"
              description="yoyoyoy Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
  
            />
          </div>
          <div className="ServiceBox">
          <ProjectCard
              imgPath={react}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."

            />
          </div>
        </div>
        <div className="serviceContainer">
          <div className="ServiceBox">
            {/* <h3>Service 3</h3>
            {/* Add content for the first box */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tellus eu quam fringilla, a efficitur nisi accumsan. Duis hendrerit turpis ut neque scelerisque, in rhoncus metus tincidunt.</p> */}
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."

            />
          </div>
          <div className="ServiceBox">
          <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            />
          </div>
        </div>
      </section>
      <div className="ImageBox">
            <img src={home} alt="Header " className="myImage" />
          </div>
    </section>
    </>
  );
};

export default Services;
