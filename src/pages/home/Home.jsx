import React from 'react';
import Profile from "../../assets/Home3.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';


const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt='' className='home__img' />

            <div className='home__content'>
                <div className='home__data'>
                    <h1 className='home__title'>
                        <span>Pedro Cecilio.</span> Desenvolvedor FullStack
                    </h1>

                    <p className='home__description'>
                        Desenvolvedor Full Stack e Analista de Sistemas com mais de 5 anos de experiência em tecnologia, atuando no desenvolvimento, manutenção e evolução de aplicações corporativas. Ao longo da minha trajetória, participei de projetos utilizando .NET, React, JavaScript e bancos de dados relacionais, contribuindo para a criação de soluções utilizadas por empresas e milhares de usuários.
                        Busco constantemente aprimorar meus conhecimentos em desenvolvimento de software, arquitetura de sistemas e novas tecnologias, com foco na construção de soluções eficientes, escaláveis e que gerem valor para pessoas e negócios.
                    </p>

                    <Link to='/sobre' className='button'>
                        Mais sobre mim{' '}
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>


        </section>
    )
}

export default Home