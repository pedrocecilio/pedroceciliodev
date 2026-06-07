import React, { useState } from 'react';
import './sobre.css';

import Avatar from '../../assets/avatar-about.png';
import { resume, skills } from '../../data';

import {
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';

const Sobre = () => {

    const [activeTab, setActiveTab] = useState('tech');

    const slides = [
        {
            title: 'Resumo Profissional',
            text: 'Atualmente atuo como Analista de Sistemas na Prodam-SP, participando de atividades relacionadas à sustentação, análise funcional, modelagem de dados, versionamento, acompanhamento de releases e atendimento às demandas de negócio.'
        },
        {
            title: 'Tecnologias',
            text: 'Ao longo da minha trajetória profissional atuei no desenvolvimento e manutenção de aplicações corporativas utilizando .NET Framework, React, JavaScript, SQL Server, Oracle e MySQL, participando da criação de novas funcionalidades, integrações e evolução de sistemas.'
        },
        {
            title: 'Experiência',
            text: 'Ao longo da minha carreira, atuei tanto no desenvolvimento quanto na análise de sistemas, participando de atividades como levantamento de requisitos, modelagem de banco de dados, definição de regras de negócio e acompanhamento de entregas. Possuo vivência com metodologias ágeis, Azure DevOps, TFS e processos de versionamento, contribuindo para a evolução contínua de sistemas corporativos.'
        },
        {
            title: 'Objetivos',
            text: 'Atualmente busco aprofundar meus conhecimentos em APIs, arquitetura de software e tecnologias modernas do ecossistema .NET, com foco em construir soluções escaláveis e evoluir profissionalmente para desafios cada vez maiores.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(
            (prev) => (prev + 1) % slides.length
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) =>
                prev === 0
                    ? slides.length - 1
                    : prev - 1
        );
    };

    return (
        <main className='section container'>

            <section className='about'>

                <h2 className='section__title'>
                    Sobre <span>Mim</span>
                </h2>

                <div className='about__content'>

                    <div className='about__image'>
                        <img
                            src={Avatar}
                            alt='Pedro Victor Cecilio'
                            className='about__avatar'
                            loading='lazy'
                        />
                    </div>

                    <div className='about__info'>

                        <h3 className='about__name'>
                            Pedro Victor Cecilio
                        </h3>

                        <h4 className='about__role'>
                            Desenvolvedor Full Stack |
                            Analista de Sistemas
                        </h4>

                        <div className='about__slider'>

                            <div className='slider__header'>

                                <button
                                    className='slider__button'
                                    onClick={prevSlide}
                                >
                                    <FaChevronLeft />
                                </button>

                                <h4>
                                    {slides[currentSlide].title}
                                </h4>

                                <button
                                    className='slider__button'
                                    onClick={nextSlide}
                                >
                                    <FaChevronRight />
                                </button>

                            </div>

                            <p className='slider__text'>
                                {slides[currentSlide].text}
                            </p>

                        </div>

                        <div className='about__tabs'>

                            <button
                                className={
                                    activeTab === 'tech'
                                        ? 'tab active-tab'
                                        : 'tab'
                                }
                                onClick={() =>
                                    setActiveTab('tech')
                                }
                            >
                                Tecnologias
                            </button>

                            <button
                                className={
                                    activeTab === 'exp'
                                        ? 'tab active-tab'
                                        : 'tab'
                                }
                                onClick={() =>
                                    setActiveTab('exp')
                                }
                            >
                                Experiência
                            </button>

                            <button
                                className={
                                    activeTab === 'edu'
                                        ? 'tab active-tab'
                                        : 'tab'
                                }
                                onClick={() =>
                                    setActiveTab('edu')
                                }
                            >
                                Formação
                            </button>

                        </div>

                        <div className='about__tab-content'>

                            {activeTab === 'tech' && (

                                <div className='tech__grid'>

                                    {skills.map((item) => (

                                        <div
                                            key={item.title}
                                            className='tech__card'
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.title}
                                            />
                                        </div>

                                    ))}

                                </div>

                            )}

                            {activeTab === 'exp' && (

                                <div className='timeline'>

                                    {resume
                                        .filter(
                                            item =>
                                                item.category ===
                                                'experience'
                                        )
                                        .map(item => (

                                            <div
                                                key={item.id}
                                                className='timeline__item'
                                            >

                                                <span>
                                                    {item.year}
                                                </span>

                                                <h4>
                                                    {item.title}
                                                </h4>

                                                <p>
                                                    {item.desc}
                                                </p>

                                            </div>

                                        ))}

                                </div>

                            )}

                            {activeTab === 'edu' && (

                                <div className='timeline'>

                                    {resume
                                        .filter(
                                            item =>
                                                item.category ===
                                                'education'
                                        )
                                        .map(item => (

                                            <div
                                                key={item.id}
                                                className='timeline__item'
                                            >

                                                <span>
                                                    {item.year}
                                                </span>

                                                <h4>
                                                    {item.title}
                                                </h4>

                                                <p>
                                                    {item.desc}
                                                </p>

                                            </div>

                                        ))}

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Sobre;