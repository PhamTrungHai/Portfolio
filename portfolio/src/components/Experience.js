import React from 'react';
import '../styles/Experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Experience() {
  const skillsets = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'Javascript', level: 'Experienced' },
        { name: 'Bootstrap', level: 'Experienced' },
        { name: 'Tailwind', level: 'Basic' },
        { name: 'React', level: 'Intermediate' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node JS', level: 'Experienced' },
        { name: 'MongoDB', level: 'Experienced' },
        { name: 'MySQL', level: 'Experienced' },
        { name: 'C#', level: 'Experienced' },
        { name: 'Git', level: 'Basic' },
        { name: 'API', level: 'Intermediate' },
      ],
    },
  ];
  return (
    <section id="experience">
      <h5 className="">What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="grid container">
        {skillsets.map((skillset) => {
          return (
            <div className="col" key={skillset.title}>
              <h3>{skillset.title}</h3>
              <div className="sm-grid">
                {skillset.skills.map((skill) => {
                  return (
                    <div className="sm-col sm-grid txt-l" key={skill.name}>
                      <div className="icon">
                        <BsFillPatchCheckFill />
                      </div>

                      <div>
                        <h4>{skill.name}</h4>
                        <h5 className="txt-l">{skill.level}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
