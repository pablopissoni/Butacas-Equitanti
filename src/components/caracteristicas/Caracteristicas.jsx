import React from 'react'
import './Caracteristicas.css'

//  >>> Iconos de Caracteristicas <<< 
import antillama from '../../../public/images/icono-antillama-120px.png'
import tapizado from '../../../public/images/auditorios-icono-tapizado-trevira.png'
import rebatimiento from '../../../public//images/auditorios-icono-rebatimiento-ralentizado.png'
import numeracion from '../../../public/images/icono-numeracion-120px.png'

export const Caracteristicas = () => {
  return (
    <div className='caracteristicas-container'>
        <div className='caracteristica--butaca'>
            <img className='caracteristica--img' src={antillama} alt="icono de antillama" />
            <span className='caracteristica--title'> <strong>Tratamiento antillama</strong></span>
            <p className='caracteristica--descripcion'>Materiales con tratamiento ignífugo cumpliendo las normas IRAM y certificación del INTI.</p>
        </div>

        <div className='caracteristica--butaca'>
            <img className='caracteristica--img' src={tapizado} alt="icono de tapizado" />
            <span className='caracteristica--title'> <strong>Tapizado a elección</strong></span>
            <p className='caracteristica--descripcion'>Materiales con tratamiento ignífugo cumpliendo las normas IRAM y certificación del INTI.</p>
        </div>

        <div className='caracteristica--butaca'>
            <img className='caracteristica--img' src={rebatimiento} alt="icono de rebatimiento" />
            <span className='caracteristica--title'> <strong>Rebatimiento silencioso</strong></span>
            <p className='caracteristica--descripcion'>Materiales con tratamiento ignífugo cumpliendo las normas IRAM y certificación del INTI.</p>
        </div>

        <div className='caracteristica--butaca'>
            <img className='caracteristica--img' src={numeracion} alt="icono de numeracion" />
            <span className='caracteristica--title'> <strong>Numeración alfanumérica</strong></span>
            <p className='caracteristica--descripcion'>Materiales con tratamiento ignífugo cumpliendo las normas IRAM y certificación del INTI.</p>
        </div>

    </div>
  )
}
