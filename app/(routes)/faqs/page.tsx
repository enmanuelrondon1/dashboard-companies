import { AccordionFaqs } from "./components/AccordionFaqs";

export default function FaqaPage() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6 ">
      <h2 className="text-3xl mb-8">FAQS</h2>
      <div className="mb-5">
        <p className="text-justify">
          Bienvenidos a nuestra seccion de preguntas frecuentes (FAQ) diseñadas
          especificamente para brindarte respuestas rapidas y claras sobre el
          dashboard para empresas que hemnos desarrollado con pasion y
          dedicacion
        </p>
        <p className="">
          En nuestra pagiina de FAQS, encontraras una recopilacion de preguntas
          mas comunes que nuestros usuarios suelen hacer sobre el
          funcionamiento caracteristicas y uso de nuestro dashboard. Desde como
          registrarte en la plataformas hasta como aprovechar el maximo sus
          funciones, hemos reunido una lista exhaustiva de interrogantes para
          ofrecerte la mejor expreiencia posible
        </p>
        <p>
          Nuestro equipo se ha esforazado por proporcionar respuestas
          deatalladas y faciles de entender para garantizar que encuentres la
          informacion que necesites de manera rapida y sencilla. Si no
          encuentras la respuesta que buscas, no dudes de contactarnos. Estamos
          aqui para ayudarte en cada camino
        </p>
        <p>
          Explora nuestras FAQS, y descubre como nuestro dashboard puede
          impulsar la eficiencia y el exito de tu empresa
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}
