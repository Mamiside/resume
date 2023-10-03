import { useState, useEffect } from "react";

import { Skill } from ".";
import { devSkills } from "../../constants/skills";

const Skills = () => {
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [nodeJs, setNodeJs] = useState(0);
  const [rust, setRust] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 80);
      });
      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });
      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
      setNodeJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 75);
      });
      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
      setRust((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 30);
      });
      // setNext((oldProgress) => {
      //   const diff = Math.random() * 10;
      //   return Math.min(oldProgress + diff, 30);
      // });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, rustSkill, nodeSkill, reactSkill } =
    devSkills;

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javascript}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={nodeJs}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={reactJs}
      />
      <Skill
        name={rustSkill.name}
        icon={rustSkill.icon}
        color={rustSkill.color}
        value={rust}
      />
      {/* <Skill
        name={nextSkill.name}
        icon={nextSkill.icon}
        color={nextSkill.color}
        value={next}
      /> */}
    </>
  );
};

export default Skills;
