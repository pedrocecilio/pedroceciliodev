import React, { useState } from 'react';
import Close from '../assets/close.svg';

const PortifolioItem = ({
    img,
    title,
    details,
    technologies,
    github,
    demo,
    githubbackend
}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className='portifolio__item'>

            <img
                src={img}
                alt={title}
                className="portifolio__img"
            />

            <div
                className="portifolio__hover"
                onClick={toggleModal}
            >

                <h3 className="portifolio__title">
                    {title}
                </h3>

            </div>

            {modal && (

                <div className="portifolio__modal">

                    <div className="portifolio__modal-content">

                        <img
                            src={Close}
                            alt="Fechar"
                            className="modal__close"
                            onClick={toggleModal}
                        />

                        <h3 className="modal__title">
                            {title}
                        </h3>

                        {/* Tecnologias */}

                        <div className="modal__tech">

                            {technologies?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="modal__tech-item"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                        <div className="modal__buttons">

                            {demo && (
                                <a
                                    href={demo}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='button'
                                >
                                    Ver Projeto
                                </a>
                            )}

                            {github && (
                                <a
                                    href={github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='button'
                                >
                                    Github
                                </a>
                            )}
                            {github && (
                                <a
                                    href={githubbackend}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='button'
                                >
                                    API
                                </a>
                            )}

                        </div>

                        <img
                            src={img}
                            alt={title}
                            className="modal__img"
                        />

                    </div>

                </div>

            )}

        </div>
    );
};

export default PortifolioItem;