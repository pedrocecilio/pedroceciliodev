import React, { useState } from 'react';
import './Contato.css';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaGithub,
    FaLinkedin,
    FaDownload
} from 'react-icons/fa';

import CV from '../../assets/PedroVCecilio.pdf';




const Contato = () => {

    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(
            'pedrovcecilio@gmail.com'
        );

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    return (
        <section className="contact section">
            <h2 className="section__title">
                Entre em <span>Contato</span>
            </h2>

            <p className="contact__subtitle">
                Estou disponível para oportunidades profissionais,
                projetos e desenvolvimento de software.
            </p>

            <div className="contato__container container grid">

                {/* CARD CURRÍCULO */}

                <div className="contact__card">

                    <div className="card__icon">
                        <FaDownload />
                    </div>

                    <h3 className="card__title">
                        Currículo
                    </h3>

                    <p className="card__description">
                        Baixe meu currículo completo para conhecer
                        minha experiência profissional, projetos
                        desenvolvidos e tecnologias utilizadas.
                    </p>

                    <a
                        href={CV}
                        download
                        className="button"
                    >
                        Download Currículo
                    </a>

                </div>

                {/* CARD CONTATO */}

                <div className="contact__card">

                    <h3 className="card__title">
                        Informações de Contato
                    </h3>

                    <div className="contact__item">

                        <FaEnvelopeOpen className="contact__icon" />

                        <div>

                            <button
                                className="copy__email"
                                onClick={copyEmail}
                            >
                                pedrovcecilio@gmail.com
                            </button>

                            {copied && (
                                <span className="copied__message">
                                    ✓ Email copiado
                                </span>
                            )}

                        </div>

                    </div>

                    <div className="contact__item">

                        <FaPhoneSquareAlt className="contact__icon" />

                        <a
                            href="https://wa.me/5511970977709"
                            target="_blank"
                            rel="noreferrer"
                            className="contact__whatsapp"
                        >
                            +55 (11) 97097-7709
                        </a>

                    </div>

                    <div className="contato__socials">

                        <a
                            href="https://github.com/pedrocecilio"
                            target="_blank"
                            rel="noreferrer"
                            className="contato__social-link"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/pedrovictorcecilio/"
                            target="_blank"
                            rel="noreferrer"
                            className="contato__social-link"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contato;