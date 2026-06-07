import React from 'react';
import { skills } from '../data';

const Skills = () => {
    return (
        <>
            {skills.map(({ icon, title }, index) => {
                return (
                    <div className="skills__card" key={index}>
                        <img src={icon} alt={title} className="skills__img" />
                        <h3 className="skills__title">{title}</h3>
                    </div>
                );
            })}
        </>
    );
};

export default Skills;