import React from 'react'
import './Clientes.css'
// Logos >>> 
import buenosAires from '../../../public/images/buenos-aires-ciudad-logo.png'

export const Clientes = () => {
    const clientes = [
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
        {nombre: 'Buenos Aires', logo: buenosAires},
    ]

  return (
    <div className='clientes-container'>
        {
            clientes.map(({nombre, logo}, index) => (
                <img key={index} src={logo} alt={nombre} />
            ))
        }
    </div>
  )
}
