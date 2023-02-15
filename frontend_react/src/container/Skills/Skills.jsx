import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client';
import './Skills.scss';


import './Skills.scss'


function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsquery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   setExperience(data);
    // });

    client.fetch(skillsquery).then((data) => {
      setSkills(data);
      console.log(skills);
    });
  }, [skills]);

  return (
    <>
      <h2 classsName="head-text" style={{textAlign: "center"}}>Skills and Expreience</h2>
      <div className='app__skilss-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill)=> (
            <motion.div
            whileInView={{opacity: [0,1]}}
            transistion={{duration: 0.5}}
            className="app__skills-item app__flex"
            key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Skills