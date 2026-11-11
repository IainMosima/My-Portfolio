import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import projects from '../../constants/projects';
import './Work.scss';

const FILTERS = ['All', 'Backend', 'AI', 'Infrastructure'];

function Work () {
  const [filterWork, setFilterWork] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(projects);
      } else {
        setFilterWork(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Selected <span>Work</span></h2>

      <div className="app__work-filter">
        {FILTERS.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <p className="p-text" style={{ marginTop: 10, fontWeight: 600 }}>{work.stack}</p>

              <a
                href={work.codeLink}
                target="_blank"
                rel="noreferrer"
                className="app__work-code app__flex"
                style={{ marginTop: 16 }}
              >
                <AiFillGithub /> <span className="p-text" style={{ marginLeft: 8 }}>View code</span>
              </a>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  Work,
  'work',
  'app__primarybg',
);
