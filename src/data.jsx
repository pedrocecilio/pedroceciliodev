import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import rifa from './assets/rifa.png'
import geclin from './assets/geclin.png'

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import html from './assets/skills/logo-html-5-512.png';
import css from './assets/skills/logo-css-3-512.png';
import js from './assets/skills/logo-javascript-512.png';
import react from './assets/skills/logo-react-512.png';
import csharp from './assets/skills/c-sharp-512.png';
import mysql from './assets/skills/mysql-512.png';
import oracle from './assets/skills/oracle-512.png';
import git from './assets/skills/git-512.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Sobre',
    icon: <FaUser className='nav__icon' />,
    path: '/sobre',
  },

  {
    id: 3,
    name: 'Portifolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portifolio',
  },

  {
    id: 4,
    name: 'Contato',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contato',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nome : ',
    description: 'Pedro Victor',
  },

  {
    id: 2,
    title: 'Sobrenome : ',
    description: 'Cecilio',
  },

  {
    id: 3,
    title: 'Idade : ',
    description: '29 anos',
  },

  {
    id: 4,
    title: 'Nacionalidade : ',
    description: 'Brasileiro',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Disponível',
  },

  {
    id: 6,
    title: 'Pais : ',
    description: 'Brasil',
  },

  {
    id: 7,
    title: 'Contato : ',
    description: '+51 011970977709',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'pedrovcecilio@gmail.com',
  },

  {
    id: 9,
    title: 'github : ',
    description: 'pedrocecilio',
  },

  {
    id: 10,
    title: 'Idiomas : ',
    description: 'Português-br',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2025 - Atual',
    title: 'Analista de sistemas',
    desc: 'CRP Tecnologia - Prodam-SP',
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - 2025',
    title: 'Desenvolvedor FullStack',
    desc: 'Geclin - Sistema de Gestão para Clínicas e Consultórios',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2025',
    title: 'Desenvolvedor FullStack',
    desc: 'Secretaria de Estado da Fazenda de SC',
  },

  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'Estagiário Fullstack',
    desc: 'Pekus Consultoria e Desenvolvimento',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019 - 2020',
    title: 'Escola SENAI de informática',
    desc: 'Técnico, Desenvolvimento de sistemas',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2016',
    title: 'Uninove',
    desc: 'Tecnologia em Comércio Exterior',
  },
];

export const skills = [
  { title: 'HTML', icon: html },
  { title: 'CSS', icon: css },
  { title: 'JavaScript', icon: js },
  { title: 'React', icon: react },
  { title: 'C#', icon: csharp },
  { title: 'MySQL', icon: mysql },
  { title: 'Oracle', icon: oracle },
  { title: 'Git', icon: git },
];

export const portifolio = [
  {
    id: 1,
    img: rifa,
    title: 'Rifa Solidária',

    technologies: [
      '.NET',
      'React',
      'SQL'
    ],

    github: 'https://github.com/pedrocecilio/Rifa_Frontend',
    githubbackend: 'https://github.com/pedrocecilio/Rifa_Api',
    demo: 'https://rifasolidariadagi.vercel.app/',

    details: [
      {
        title: 'Projeto',
        desc: 'Sistema de rifa online'
      },
      {
        title: 'Desafio',
        desc: 'Controle de reservas'
      }
    ]
  },

  {
    id: 2,
    img: geclin,
    title: 'Geclin',

    technologies: [
      'C#',
      '.NET Framework',
      'SQL Server'
    ],

    github: '',
    demo: 'https://demo.geclin.com.br/',

    details: [
      {
        title: 'Participação',
        desc: 'Desenvolvimento e manutenção de funcionalidades'
      },
      {
        title: 'Atividades',
        desc: 'Correções, integrações e regras de negócio'
      },
      {
        title: 'Tipo',
        desc: 'Sistema corporativo para gestão clínica'
      }
    ]
  }

  // {
  //   id: 2,
  //   img: Work1,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 2,
  //   img: Work2,
  //   title: 'Website Design',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'React JS',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 3,
  //   img: Work3,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 4,
  //   img: Work4,
  //   title: 'Video Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Video',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Premium',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: 'Landing Page',
  //   details: [
  //     {
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       title: 'Language : ',
  //       desc: 'React JS, Node JS',
  //     },
  //     {
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: 'Photo Editing',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Photo',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'Adobe Photoshop',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dibble.com',
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
