import React from 'react'
import { CardThinking } from '../../../../components/Cards/CardThinking'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'
import FocusComponent from '../../../../components/FocusComponent/FocusComponent'
import { CardSelection } from '../../../../components/Cards/CardSelection'
import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'


import IMGEvaluation from '../../../../assets/module-two/five/evaluation.svg'
import IMGKPIs from '../../../../assets/module-two/five/kpi.webp'
import IMGAdjustments from '../../../../assets/module-two/five/cualitativa.png'
import IMGContinuousImprovement from '../../../../assets/module-two/five/control1.png'
import IMGPDCACycle from '../../../../assets/module-two/five/control2.png'
import IMGRelleno from '../../../../assets/module-two/five/exchange.svg'
import IMGDecision from '../../../../assets/module-two/five/decision.jpg'

import { BarChart2, TrendingUp, RefreshCw } from 'lucide-react'
import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { CardFoldChained } from '../../../../components/Cards/CardFoldChained'
import { DecisionGame } from '../../../../components/DecisionGame/DecisionGame'

function Five() {
  const sections = [
    '5.1 Evaluación del Desempeño',
    '5.1.1 Indicadores Clave de Desempeño (KPI)',
    '5.1.2 Evaluación Cuantitativa y Cualitativa',
    '5.2 Ajustes y Mejoras Continuas',
    '5.2.1 Ajustes Estratégicos',
    '5.2.2 Mejora Continua',
    'Conclusión'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Evaluación y Control Estratégico'} 
          subtitle={'Unidad 5'} 
          chapter={'5'}
          prevRoute="/module-two/four"
          nextRoute="/module-two"
        />
      </div>
      <ScrollContent sections={sections}>
        
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardTitle  
            title="Evaluación y Control Estratégico"
            subtitle='Medición y Ajuste del Rendimiento Organizacional'
            className="top-[-150px] left-[0]"
          />
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay={0}
            duration={1}
            className={'top-[300px] z-[-1] justify-center flex-center'}
          >
            <img src={IMGEvaluation} className='w-[350px]'/>
          </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
  
            <CardNote 
              title='Evaluación del Desempeño'
              content={'La evaluación y control estratégico es un proceso crucial dentro de la gestión estratégica, ' +
                       'pues permite a las organizaciones medir su rendimiento y efectuar los ajustes necesarios ' +
                       'para mejorar su desempeño y asegurar el cumplimiento de sus objetivos.'}
              author='Pearce & Robinson, 2015'
              width='400px'
              height=''  
              className='top-[50px] left-[180px] bg-[#d9d9d9a4]'
            />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay={0}
            duration={1}
            className={'left-[580px] top-[0px] z-[-1]'}
          >
            <img src={IMGKPIs} className='w-[700px]'/>
          </AnimatedElement>
          <CardNote 
          title='Indicadores Clave de Desempeño (KPI)'
            content={'Medir el desempeño organizacional a través de un conjunto de indicadores balanceados ' +
                     'permite a las empresas obtener una visión más completa y profunda de su funcionamiento.'}
            author='Kaplan & Norton, 1996'
            width='400px'
            height=''  
            className='top-[400px] left-[180px] bg-[#d9d9d9a4]'
          />
        </div>

        <div className="bg-secondary text-secondary-foreground p-8 h-screen flex flex-col items-center">
          <CardFoldHorizontal 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Indicadores Clave de Desempeño (KPI)</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Indicadores Financieros</h3>
                <p className="text-gray-700">
                  Estos indicadores miden el desempeño económico de la organización. Algunos ejemplos incluyen:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Retorno sobre la inversión (ROI)</li>
                    <li>Margen de beneficio</li>
                    <li>Flujo de caja</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Kaplan & Norton, 2001'}</p>
                </p>
              </>)},
              {content: (<>
                <h3 className="text-xl font-semibold mb-2">Indicadores No Financieros</h3>
                <p className="text-gray-700">
                  Estos indicadores permiten evaluar factores clave que influyen en el éxito a largo plazo de la organización, como:
                  <ul className="list-disc pl-5 mt-2">
                    <li>Satisfacción del cliente</li>
                    <li>Calidad de los productos y servicios</li>
                    <li>Eficiencia operativa</li>
                    <li>Desarrollo del capital humano</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Porter, 1985'}</p>
                </p>
              </>)}
            ]}
            width={'350px'}
            height={'500px'}
            className='absolute top-[10px] left-[10px]'
          />
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <AnimatedElement 
            type={'slide'}
            slideDirection={'right'}
            delay={0}
            duration={1}
            className={'top-[20px] left-[200px] z-[11]'}
          >
            <CardNote 
              title='Evaluación Cuantitativa y Cualitativa'
              content={'El desempeño organizacional puede ser evaluado desde dos perspectivas: cuantitativa y ' +
                       'cualitativa. La evaluación cuantitativa se enfoca en medir resultados numéricos, como las ' +
                       'ventas, los beneficios y la cuota de mercado. En cambio, la evaluación cualitativa considera ' +
                       'factores menos tangibles, como la moral del equipo o la calidad percibida por los clientes.'}
              author={'Johnson et al., 2009'}
              width='1000px'
              height='190px'  
              className='bg-[#d9d9d9a4]'
            />
          </AnimatedElement>
          
          <AnimatedElement 
            type={'popup'}
            slideDirection={'bottom'}
            delay={1}
            duration={2}
            className={'top-[300px] left-[700px] z-[13]'}
          >
            <CardSelection
              question="¿Qué tipo de evaluación consideras más importante para tu organización?"
              options={[
                {
                  label: "Evaluación Cuantitativa",
                  content: "La evaluación cuantitativa proporciona datos concretos y medibles, útiles para tomar decisiones basadas en hechos.",
                },
                {
                  label: "Evaluación Cualitativa",
                  content: "La evaluación cualitativa ofrece insights valiosos sobre aspectos intangibles que pueden ser cruciales para el éxito a largo plazo.",
                },
                {
                  label: "Ambas por igual",
                  content: "Una combinación equilibrada de ambas evaluaciones proporciona una visión más completa del desempeño organizacional.",
                },
              ]}
              width={'500px'}
              height={'200px'}
              className='absolute'
            />
          </AnimatedElement>

          <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay={0}
            duration={1}
            className={'left-[50px] top-[180px] z-[-1]'}
          >
            <img src={IMGAdjustments} className='w-[700px]'/>
          </AnimatedElement>
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardFoldChained 
            cards={[
              {content: (<>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h3 className="text-4xl mb-2 text-center">Ajustes Estratégicos</h3>
                  <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                </div>
              </>)},
              {content: (
              <>
                <div className='flex flex-col h-full'>
                <h3 className="text-xl font-semibold mb-2">Revisión de objetivos</h3>
                <p className="text-gray-700">
                  Si los objetivos originales no son alcanzables o ya no son relevantes debido a cambios en el mercado, es necesario ajustarlos.
                  <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Kotter, 2012'}</p>
                </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Redistribución de recursos</h3>
                  <p className="text-gray-700">
                    La reasignación de recursos financieros, humanos o tecnológicos puede ser necesaria para optimizar el rendimiento en áreas estratégicas clave.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Porter, 1985'}</p>
                  </p>
                </div>
              </>)},
              {content: (<>
                <div className='flex flex-col h-full'>
                  <h3 className="text-xl font-semibold mb-2">Cambio de enfoque estratégico</h3>
                  <p className="text-gray-700">
                    Algunas organizaciones pueden descubrir que su enfoque original (por ejemplo, priorizar la expansión de mercado) ya no es viable, y deben reorientarse hacia otras áreas como la mejora de la eficiencia operativa.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Porter, 1985'}</p>
                  </p>
                </div>
              </>)}
            ]}
            width={'900px'}
            height={'190px'}
            className='absolute top-[-30px] left-[10px]'
          />
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
            title='Mejora Continua'
            content={'La mejora continua es un enfoque que se basa en realizar pequeños ajustes constantes ' +
                     'en lugar de grandes cambios esporádicos. Este concepto es central en metodologías como ' +
                     'Kaizen y el ciclo PDCA (Plan-Do-Check-Act).'}
            author='Imai, 1986'
            width='1100px'
            height=''  
            className='top-[20px] left-[100px] bg-[#d9d9d9a4]'
          />

          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay={0}
            duration={1}
            className={'top-[200px] left-[100px]'}
          >
            <CardSwap 
              frontContent={(
                <>
                  <div className='flex flex-col justify-center items-center h-full'>
                    <BarChart2 className="w-12 h-12 text-black-500 mb-4" />
                    <h3 className="text-2xl mb-2 text-center">Kaizen</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Kaizen</h3>
                  <p className="text-gray-700">
                    Este enfoque japonés se enfoca en mejoras graduales y continuas. Todos los empleados, desde la alta dirección hasta los niveles más bajos, están involucrados en el proceso de mejora continua.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Imai, 1986'}</p>
                  </p>
                </>
              )}
              width='300px'
              height='420px'  
              className='absolute'
            />
          </AnimatedElement>
          
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay={0.3}
            duration={1}
            className={'top-[200px] left-[490px]'}
          >
            <CardSwap 
              frontContent={(
                <>
                <div className='flex flex-col justify-center items-center h-full'>
                    <TrendingUp className="w-12 h-12 text-black-500 mb-4" />
                    <h3 className="text-2xl mb-2 text-center">Ciclo PDCA</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Ciclo PDCA</h3>
                  <p className="text-gray-700">
                    El ciclo Planificar-Hacer-Verificar-Actuar (PDCA) es una herramienta de gestión que ayuda a las organizaciones a iterar constantemente sobre sus procesos y corregir las desviaciones.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Deming, 2000'}</p>
                  </p>
                </>
              )}
              width='300px'
              height='420px'  
              className='absolute'
            />
          </AnimatedElement>
          
          <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay={0.6}
            duration={1}
            className={'top-[200px] left-[880px]'}
          > 
            <CardSwap 
              frontContent={(
                <>
                  <div className='flex flex-col justify-center items-center h-full'>
                    <RefreshCw className="w-12 h-12 text-black-500 mb-4" />
                    <h3 className="text-2xl mb-2 text-center">Cultura de Mejora Continua</h3>
                    <h4 className="text-xl text-gray-600 text-center">{'( Tap )'}</h4>
                  </div>
                </>
              )} 
              backContent={(
                <>
                  <h3 className="text-xl font-semibold mb-2">Cultura de Mejora Continua</h3>
                  <p className="text-gray-700">
                    Una organización con una cultura de mejora continua está constantemente buscando formas de aumentar la eficiencia, mejorar la calidad y reducir costos.
                    <p className="text-sm text-gray-500 mt-2 mb-2 text-right">— {'Thompson & Strickland, 1998'}</p>
                  </p>
                </>
              )}
              width='300px'
              height='420px'  
              className='absolute'
            />
          </AnimatedElement> 

          <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay={0}
            duration={1}
            className={'left-[340px] bottom-[-100px] z-[-1]'}
          >
            <img src={IMGRelleno} className='w-[700px]'/>
          </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote 
            title='Conclusión sobre Evaluación y Control Estratégico'
            content={'La evaluación y control estratégico es un proceso vital para asegurar que las ' +
                     'organizaciones se mantengan en el camino correcto hacia sus objetivos. Las evaluaciones ' +
                     'regulares permiten detectar y corregir desviaciones a tiempo, mientras que los ajustes y la ' +
                     'mejora continua aseguran que las estrategias sigan siendo relevantes y efectivas en un entorno dinámico.'}
            width='1100px'
            height='150px'  
            className='top-[20px] left-[100px] bg-[#d9d9d9a4]'
          />
          <img src={IMGPDCACycle} className='absolute z-[-1] top-[150px] left-[0px] w-[750px]'/>
          <img src={IMGContinuousImprovement} className='absolute z-[-2] top-[150px] left-[600px] w-[750px]'/>
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            <div className='absolute top-[-50px]'>
                <DecisionGame></DecisionGame>
            </div>

            <AnimatedElement 
            type={'slide'}
            slideDirection={'top'}
            delay={0}
            duration={1}
            className={'left-[-200px] bottom-[-100px] z-[-1]'}
          >
            <img src={IMGDecision} className='w-[600px]'/>
          </AnimatedElement>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Five

