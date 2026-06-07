import React from 'react'
import { portifolio } from '../../data'
import PortifolioItem from '../../components/PortifolioItem'
import './Portifolio.css'

const Portifolio = () => {
    return (
        <section className="portifolio section">
            <h2 className="section__title">Meu
                <span> Portifolio</span>
            </h2>

            <div className="portifolio__container container grid">
                {portifolio.map((item) => {
                    return <PortifolioItem key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default Portifolio