import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>
          I have done project which is a todolist app which has different tasks
          to assign,there is functionality of 1.Add todo 2.Delete todo 3.Done
          todo 4.Review todo
        </p>
        <a
          href="https://github.com/ankush748/todo-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects;
