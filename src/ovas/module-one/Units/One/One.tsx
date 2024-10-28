// Desarrollo de Habilidades Empresariales

import React from 'react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'


function One() {
  const sections = ['Sección 1', 'Sección 2', 'Sección 3']
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Introducción a las Habilidades Empresariales'} 
          subtitle={'Conceptos y definiciones'} 
          chapter={'1.1'}/>
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

  
        <CardThinking 
        content={'Las habilidades empresariales representan' + 
                  'un conjunto integral de competencias que permiten' + 
                  'a los individuos y organizaciones operar de manera' + 
                  'eficiente, adaptarse a los cambios del mercado y fomentar0'+
                  ' el crecimiento sostenido'}
        author='Drucker, 2007b'
        width='400px'
        height='200px'  
        className='top-[20px] left-[200px] child:bg-[#d9d9d9a4]'
        />

        </div>
        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 2</h2>
          <p className="text-xl">Contenido de la segunda sección</p>
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Sección 3</h2>
          <p className="text-xl">Última sección del contenido</p>
        </div>
      </ScrollContent>
    </div>
  )
}

export default One