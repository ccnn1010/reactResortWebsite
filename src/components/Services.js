import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {

   state={
       services: [
        {
            icon:<FaCocktail />,
            title: 'Free cocktails',
            info: 'lorem ipsum dolor sit amet consectetur adipicsing elit. Magni, corportis!'
        },
        {
            icon:<FaHiking />,
            title: 'Endless Hiking',
            info: 'lorem ipsum dolor sit amet consectetur adipicsing elit. Magni, corportis!'
        },
        {
            icon:<FaShuttleVan />,
            title: 'Free Shuttle',
            info: 'lorem ipsum dolor sit amet consectetur adipicsing elit. Magni, corportis!'
        },
        {
            icon:<FaBeer />,
            title: 'Strongest Beer',
            info: 'lorem ipsum dolor sit amet consectetur adipicsing elit. Magni, corportis!'
        },
       ]
   }

    render() {
        return (
            <section className='services'>
              <Title title='services' />
            <div className='services-center'>
            {this.state.services.map((item, index)=> {
                return <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>

            })}
            </div>
            </section>
        );
    }
}
