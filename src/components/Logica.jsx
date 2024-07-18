import React from 'react'
import captura from '../assets/captura.png'

export default function Logica() {
  return (
    <section className='text-white'>
        <h2 className='text-white text-xl font-bold'>Lógica de programación</h2>
        <h3 className='text-white font-semibold text-lg mt-20 mb-6'>LPP "Lógica para principiantes" </h3>
        <img src={captura} alt="" />
        <h3 className='text-white font-semibold text-lg mt-20'>Memoria ram</h3>
        <p>La memoria ram tiene varios tipos de campos:</p><br />
        <ul>
            <li>  - Contantes numéricos</li>
            <li>  - Constante alfanumérico</li>
            <li>  - Campo variable: debe empezar por una letra, después pueden ir más letras o dígitos, no permite caracteres especiales, se aconseja utilizar nombre nemotécnicos</li>
        </ul>
    </section>
  )
}
