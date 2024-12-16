// Desarrollo de Habilidades Empresariales


import ScrollContent from '../../../../components/ScrollContent/ScrollContent'
import { Header } from '../../../../components/AnimatedHeader/AnimatedHeader'
import { AnimatedElement } from '../../../../components/AnimatedElement/AnimatedElement'
import { CardNote } from '../../../../components/Cards/CardNote'
import { CardFoldHorizontal } from '../../../../components/Cards/CardFoldHorizontal'

import IMGTitle from '../../../../assets/module-one/two/title.png'
import IMGAnalisis from '../../../../assets/module-two/two/analisis.jpg'  
import IMGAnalisis2 from '../../../../assets/module-two/two/analisis2.png'
import IMGPestel from '../../../../assets/module-two/two/PESTEL.png'
import IMGPorter from '../../../../assets/module-two/two/porter.png'
import IMGCompe from '../../../../assets/module-two/two/analisis.png'
import IMGOpor from '../../../../assets/module-two/two/oportunidad.jpg'
import IMGOpor2 from '../../../../assets/module-two/two/oportunidad2.png'
import IMGilustracion3 from '../../../../assets/module-two/two/ilustracion3.png'
import IMGilustracion4 from '../../../../assets/module-two/two/ilustracion4.png'
import IMGRelational from '../../../../assets/module-two/two/relational.png'
import IMGStrategy from '../../../../assets/module-two/two/estrategia.png'

import { AnimatedText } from '../../../../components/AnimatedText/AnimatedText'
import { CardTitle } from '../../../../components/Cards/CardTitle'
import { CardSwap } from '../../../../components/Cards/CardSwap'

import { Grid2X2, Link , ShieldCheck } from 'lucide-react';
import StrategicAnalysisActivity from './ActivityStrategy'

function Two() {
  const sections = [
    ' 2.0 Técnicas de Liderazgo Efectivo',
    ' 2.0.1 Concepto',
    ' 2.1 Herramientas de Análisis Externo e Interno',
    ' 2.1.1 Análisis Externo',,,
    ' 2.1.2 Análisis Interno',
    ' 2.2  Identificación de Oportunidades y Amenazas',
    ' 2.2.1 Oportunidades y Amenazas',,
    ' Actividad'
  ]
  
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='block justify-center h-[100px]'>
        <Header 
          title={'Análisis Estratégico'} 
          subtitle={'Unidad 2'} 
          chapter={'2'}
          prevRoute="/module-two/one"
          nextRoute="/module-two/three"
          />
      </div>
      <ScrollContent sections={sections}>
        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">

          <CardTitle
            title="Análisis Estratégico"
            subtitle="Herramientas de analisis e Identificación"
            className="top-[-180px] left-[0]"
            />

            <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={0}
            duration={1}
            className={'top-[270px] z-[-1] justify-center flex-center'}
            >
                <img src={IMGStrategy} className='w-[300px]'/>
            </AnimatedElement>
        </div>

        <div className="bg-primary text-primary-foreground p-8 h-screen flex flex-col items-center justify-center">
         
          <CardNote
              title="Análisis Estratégico"
              content={
                'El análisis estratégico es un proceso clave que permite a las organizaciones adaptarse a un ' +
                'entorno dinámico y competitivo. Se enfoca en identificar las oportunidades y amenazas que ' +
                'provienen del entorno externo, así como en analizar las fortalezas y debilidades internas. ' +
                'Las herramientas utilizadas en este proceso permiten una comprensión profunda de la ' +
                'situación en la que opera una empresa y ofrecen las bases para la toma de decisiones ' +
                'estratégicas efectivas. A continuación, se desarrollan las principales herramientas de ' +
                'análisis estratégico y la identificación de oportunidades y amenazas.'
              }
              author=' '
              width="600px"
              height="400px"
              className="top-[50px] left-[600px]"
            />

              <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[20px] left-[0px] z-[-1] justify-center flex-center'}
              >
                  <img src={IMGAnalisis} className='w-[1200px]'/>
              </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
    
          <CardTitle
            title="Herramientas de Análisis Externo e Interno"
            subtitle="Factores de las herramientas"
            className="top-[-180px] left-[0]"
            />

          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[150px] z-[-1] justify-center flex-center'}
              >
                  <img src={IMGAnalisis2} className='w-[700px]'/>
              </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
    
          <CardNote
            title="Análisis Externo"
            content={
              'El análisis externo examina los factores que están fuera del control directo de la ' +
              'organización pero que pueden tener un impacto significativo en su desempeño. Este análisis ' +
              'se realiza para identificar oportunidades que la empresa puede aprovechar y amenazas que ' +
              'debe mitigar.'
            }
            width="1100px"
            height="160px"
            className="top-[20px] left-[100px] bg-[#d9d9d9a4]"
          />


        <AnimatedElement 
            type={'slide'}
            slideDirection={'left'}
            delay ={0}
            duration={1}
            className={'top-[250px] left-[200px] justify-center flex-center'}
            >
          <CardNote
            title="Análisis PESTEL"
            content={
              'El análisis PESTEL es una herramienta utilizada para evaluar el entorno macroeconómico ' +
              'en el que opera una organización, examinando factores políticos, económicos, sociales, ' +
              'tecnológicos, ecológicos y legales (Yüksel, 2012). Esta herramienta permite identificar ' +
              'fuerzas externas que pueden influir en la organización a largo plazo. '
            }
            width="400px"
            height="300px"
            className=""
          />
          </AnimatedElement>

          <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Analisis</h3>
                    <p className="text-gray-700 text-sm">
                    El análisis PESTEL ayuda a prever cómo estos factores pueden crear oportunidades o
                    representar riesgos para la empresa.
                    </p>
                    <h4 className="text-gray-600 text-center">{'( Tap )'}</h4>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Políticos</h3>
                    <p className="text-gray-700 text-sm">
                      Factores como la estabilidad política, políticas gubernamentales,
                      regulación fiscal y arancelaria, y políticas comerciales internacionales
                      pueden afectar el desempeño de la organización (Johnson et al., 2009).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Económicos</h3>
                    <p className="text-gray-700 text-sm">
                      Incluyen el crecimiento económico, tasas de interés, inflación, tipo de
                      cambio y políticas monetarias que afectan el poder adquisitivo de los
                      consumidores y los costos operativos de la organización (Hill & Jones, 2012).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Sociales</h3>
                    <p className="text-gray-700 text-sm">
                      Cambios en los hábitos de consumo, demografía, estilo de vida y
                      preferencias culturales influyen en la demanda de productos o servicios (Grant, 2021).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Tecnológicos</h3>
                    <p className="text-gray-700 text-sm">
                      Los avances tecnológicos, el ritmo de la innovación, la automatización y la
                      inversión en investigación y desarrollo afectan la competitividad de las empresas (Porter, 1985).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Ecológicos</h3>
                    <p className="text-gray-700 text-sm">
                      Las preocupaciones medioambientales, como el cambio climático, la sostenibilidad
                      y las regulaciones ecológicas, obligan a las empresas a adaptarse a políticas y
                      estándares más rigurosos (Mintzberg et al., 2005).
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Legales</h3>
                    <p className="text-gray-700 text-sm">
                      Cambios en las leyes laborales, derechos de propiedad intelectual,
                      regulaciones de salud y seguridad, y normativas de comercio afectan la manera en
                      que las empresas operan en diferentes mercados (Thompson & Strickland, 1998).
                    </p>
                  </>
                ),
              },
            ]}
            width="230px"
            height="300px"
            className="top-[0px] left-[100px]"
          />

            <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[210px] pl-[750px] z-[-1] justify-center flex-center'}
              >
                  <img src={IMGPestel} className='w-[300px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
          <CardNote
            title="Análisis de las Cinco Fuerzas de Porter"
            content={
              'El modelo de las Cinco Fuerzas de Porter es una herramienta que permite evaluar la ' +
              'estructura competitiva de una industria. Esta herramienta fue desarrollada por Porter (1989) ' +
              'y sigue siendo una referencia clave en el análisis estratégico. Las cinco fuerzas son:'
            }
            width="1100px"
            height="150px"
            className="top-[20px] left-[100px]"
          />

          <CardFoldHorizontal
            cards={[
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Poder de negociación de los proveedores</h3>
                    <p className="text-gray-700 text-sm">
                      Si los proveedores son pocos y poderosos, pueden influir en los costos de producción
                      y limitar las ganancias de la empresa.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Poder de negociación de los compradores</h3>
                    <p className="text-gray-700 text-sm">
                      Cuando los compradores tienen poder (por ejemplo, si hay pocos y compran en grandes volúmenes),
                      pueden forzar una baja en los precios o exigir más calidad.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Amenaza de nuevos entrantes</h3>
                    <p className="text-gray-700 text-sm">
                      La facilidad con que nuevas empresas pueden entrar al mercado afecta la competitividad
                      de la industria. Barreras altas de entrada protegen a las empresas establecidas.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Amenaza de productos sustitutos</h3>
                    <p className="text-gray-700 text-sm">
                      La disponibilidad de productos alternativos que puedan reemplazar el producto o servicio
                      de la empresa impacta la demanda y los precios.
                    </p>
                  </>
                ),
              },
              {
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Rivalidad entre competidores existentes</h3>
                    <p className="text-gray-700 text-sm">
                      Una intensa competencia entre los actores de una industria puede disminuir la rentabilidad
                      debido a la guerra de precios, la innovación continua y la mejora de servicios.
                    </p>
                  </>
                ),
              },
            ]}
            width="240px"
            height="300px"
            className="left-[100px] mb-[130px]"
          />

          <CardNote
            title="Importancia del Modelo de las Cinco Fuerzas"
            content={
              'El modelo de las Cinco Fuerzas es esencial para comprender el nivel de competencia en ' +
              'una industria y para formular estrategias que mejoren la posición competitiva de la empresa (Porter, 1996).'
            }
            width="1100px"
            height="150px"
            className="top-[520px] left-[100px] bg-[#d9d9d9a4]"
          />

          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[210px] pl-[750px] z-[-1] justify-center flex-center'}
              >
                  <img src={IMGPorter} className='w-[300px] h-[290px]'/>
          </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            
        <AnimatedElement 
                type={'slide'}
                slideDirection={'left'}
                delay ={0}
                duration={1}
                className={'top-[80px] left-[100px] justify-center flex-center'}
        >
          <CardNote
            title="Análisis de Competidores"
            content={
              'El análisis de competidores ayuda a las organizaciones a evaluar las acciones y estrategias ' +
              'de sus principales rivales dentro del mercado. El objetivo es identificar las fortalezas y ' +
              'debilidades de los competidores para tomar decisiones estratégicas informadas. Esto ' +
              'incluye el monitoreo de la estructura de costos, posicionamiento de productos, estrategias ' +
              'de marketing y recursos clave de los competidores (Barney, 1991). Las empresas pueden ' +
              'usar esta información para mejorar su ventaja competitiva y formular respuestas tácticas ' +
              'ante los movimientos de sus rivales.'
            }
            author=' '
            width="400px"
            height="500px"
            className=""
          />
           </AnimatedElement>
          <AnimatedElement 
                type={'slide'}
                slideDirection={'right'}
                delay ={0}
                duration={1.3}
                className={'top-[50px] z-[-1] pl-[300px] justify-center flex-center'}
                >
                    <img src={IMGCompe} className='w-[600px]'/>
            </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
    
          <CardNote
            title="Análisis Interno"
            content={
              'El análisis interno se centra en los recursos y capacidades de la organización para ' +
              'identificar fortalezas y debilidades que afectan su capacidad de competir en el mercado.'
            }
            width="500px"
            height="160px"
            className="top-[50px] mr-[120px] bg-[#d9d9d9a4]"
          />

          <div className="flex flex-row flex-wrap gap-[15px] mr-[130px]">
            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-xl font-semibold mb-2 text-center">Análisis FODA (SWOT)</h3>
                    <p className="text-sm text-gray-700 text-center">
                      El análisis FODA combina el análisis externo (oportunidades y amenazas) con el análisis interno 
                      (fortalezas y debilidades) para desarrollar estrategias efectivas (T. Hill & Westbrook, 1997).
                    </p>
                    <div className="flex flex-col justify-center items-center mt-4">
                      <Grid2X2 className="w-12 h-12 text-blue-500 mb-2" /> {/* Icono de ejemplo */}
                      <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                    </div>
                  </div>
                </>
              }
              backContent={
                <>
                  <h3 className="text-xl font-semibold mb-2">Análisis FODA (SWOT)</h3>
                  <p className="text-gray-700 text-sm">
                    • Fortalezas: Recursos y capacidades internas que brindan ventaja competitiva. <br />
                    • Debilidades: Limitaciones internas que dificultan el rendimiento. <br />
                    • Oportunidades: Factores externos que benefician la posición de la empresa. <br />
                    • Amenazas: Factores externos que obstaculizan el éxito organizacional.
                  </p>
                </>
              }
              width="300px"
              height="300px"
              className=""
            />

            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-xl font-semibold mb-2 text-center">Cadena de Valor de Porter</h3>
                    <p className="text-sm text-gray-700 text-center">
                      Herramienta para analizar actividades internas de la empresa que crean valor, divididas en primarias 
                      y de apoyo (Porter, 1985).
                    </p>
                    <div className="flex flex-col justify-center items-center mt-4">
                      <Link className="w-12 h-12 text-green-500 mb-2" /> {/* Icono de ejemplo */}
                      <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                    </div>
                  </div>
                </>
              }
              backContent={
                <>
                  <h3 className="text-xl font-semibold mb-2">Cadena de Valor de Porter</h3>
                  <p className="text-gray-700 text-sm">
                    Divide las actividades en: <br />
                    • Primarias: Logística interna, operaciones, marketing y servicio postventa. <br />
                    • De apoyo: Infraestructura, gestión de recursos humanos, tecnología y adquisiciones.
                  </p>
                </>
              }
              width="300px"
              height="300px"
              className=""
            />

            <CardSwap
              frontContent={
                <>
                  <div className="flex flex-col h-full justify-between items-center">
                    <h3 className="text-xl font-semibold mb-2 text-center">Análisis VRIO</h3>
                    <p className="text-sm text-gray-700 text-center">
                      Herramienta para identificar recursos que ofrecen una ventaja competitiva sostenible mediante los 
                      criterios de Valor, Rareza, Imitabilidad y Organización (Barney, 1991).
                    </p>
                    <div className="flex flex-col justify-center items-center mt-4">
                      <ShieldCheck className="w-12 h-12 text-yellow-500 mb-2" /> {/* Icono de ejemplo */}
                      <h4 className="text-sm text-gray-600 text-center">( Tap )</h4>
                    </div>
                  </div>
                </>
              }
              backContent={
                <>
                  <h3 className="text-xl font-semibold mb-2">Análisis VRIO</h3>
                  <p className="text-gray-700 text-sm">
                    Evalúa los recursos según: <br />
                    • Valor: Ayuda a aprovechar oportunidades o mitigar amenazas. <br />
                    • Rareza: Es único en el mercado. <br />
                    • Imitabilidad: Difícil de copiar por competidores. <br />
                    • Organización: La empresa está preparada para utilizarlo efectivamente.
                  </p>
                </>
              }
              width="300px"
              height="300px"
              className=""
            />
          </div>
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
            
          <CardTitle
            title="Identificación de Oportunidades y Amenazas"
            subtitle="Modelos y Factores"
            className="top-[-180px] left-[0]"
            />

          <AnimatedElement 
              type={'slide'}
              slideDirection={'bottom'}
              delay ={0}
              duration={1}
              className={'top-[230px] z-[-1] justify-center flex-center'}
              >
                  <img src={IMGOpor} className='w-[400px]'/>
              </AnimatedElement>
        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">

        <AnimatedElement
          type={'slide'}
          slideDirection={'bottom'}
          delay={0.2}
          duration={0.8}
          className="top-[20px] left-[100px]"
        >
          <CardNote
            title="Identificación de Oportunidades y Amenazas"
            content={
              'La identificación de oportunidades y amenazas es un resultado clave del análisis estratégico. ' +
              'Estas permiten a las organizaciones ajustar sus estrategias para aprovechar oportunidades emergentes ' +
              'o enfrentar desafíos externos.'
            }
            width="1050px"
            height="150px"
            className="bg-[#d9d9d9a4]"
          />
        </AnimatedElement>

        <AnimatedElement
          type={'slide'}
          slideDirection={'left'}
          delay={0.5}
          duration={0.8}
          className="top-[200px] left-[100px]"
        >
          <CardNote
            title="Oportunidades"
            content={
              'Son elementos externos que la organización puede capitalizar para mejorar su desempeño. ' +
              'Pueden incluir el crecimiento en nuevos mercados, avances tecnológicos, cambios regulatorios ' +
              'favorables o alianzas estratégicas. ' +
              'Ejemplo: La creciente demanda de soluciones sostenibles y respetuosas con el medio ambiente ' +
              'presenta oportunidades para las empresas que desarrollan productos ecológicos (Grant, 2021).'
            }
            width="350px"
            height="400px"
            className=""
          />
        </AnimatedElement>

        <AnimatedElement
          type={'slide'}
          slideDirection={'right'}
          delay={0.8}
          duration={0.8}
          className="top-[200px] left-[800px]"
        >
          <CardNote
            title="Amenazas"
            content={
              'Son factores externos que pueden impactar negativamente en el éxito de la organización. Estas ' +
              'pueden incluir un aumento de la competencia, cambios desfavorables en la legislación, fluctuaciones ' +
              'económicas o cambios en las preferencias de los consumidores. ' +
              'Ejemplo: La creciente competencia de empresas tecnológicas que ofrecen productos innovadores ' +
              'representa una amenaza para aquellas organizaciones que no invierten en investigación y desarrollo (Porter, 1985).'
            }
            width="350px"
            height="400px"
            className=""
          />
        </AnimatedElement>


        <AnimatedElement 
            type={'slide'}
            slideDirection={'bottom'}
            delay ={1}
            duration={1.3}
            className={'top-[250px] z-[-1] pr-[200px] justify-center flex-center'}
            >
                <img src={IMGOpor2} className='w-[300px]'/>
          </AnimatedElement>

        </div>

        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">

            <div className='flex flex-row items-center justify-center mb-[150px]'>
                <AnimatedElement 
                type={'slide'}
                slideDirection={'left'}
                delay ={0}
                duration={0.8}
                className={' -ml-[500px] z-[-1]'}
              >
                <img src={IMGilustracion3} className='w-[800px]'/>
                <AnimatedText className={'text-sm text-center text-gray-700'} 
                text={'Ilustración 3. Modelo de las Cinco Fuerzas de Porter'} 
                type={'topToBottom'}
                delay = {1}
                duration = {0.8}
                />
            </AnimatedElement>  

            <AnimatedElement 
                type={'slide'}
                slideDirection={'left'}
                delay ={0}
                duration={0.8}
                className={'ml-[600px] z-[-1]'}
            >
                <img src={IMGilustracion4} className='w-[400px]'/>
                <AnimatedText className={'text-sm text-center text-gray-700'} 
                text={'Ilustración 4. Análisis FODA'} 
                type={'topToBottom'}
                delay = {1}
                duration = {0.8}
                />
            </AnimatedElement>  

            </div>
        </div>
        <div className="bg-accent text-accent-foreground p-8 h-screen flex flex-col items-center justify-center">
              <div className='flex w-[900px] mb-[120px] items-center justify-center'>
              <StrategicAnalysisActivity></StrategicAnalysisActivity>
              <AnimatedElement 
                type={'slide'}
                slideDirection={'left'}
                delay ={0}
                duration={0.3}
                className={'left-[-180px] z-[-1]'}
              >
                <img src={IMGRelational} className='w-[700px]'/>

              </AnimatedElement>
              </div>
        </div>

      </ScrollContent>
    </div>
  )
}

export default Two