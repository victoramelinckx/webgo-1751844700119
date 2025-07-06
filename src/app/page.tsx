
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio digital en un día con soporte continuo, ideal para emprendedores ocupados." cta1="Digitaliza Ahora" />
<How step1Title="Comparte tu visión" step1Desc="Dinos sobre tu negocio y objetivos." step2Title="Creación express" step2Desc="Construimos tu tienda online en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para asegurar ventas." />
<Aboutus headline="WebGo: Digitaliza y Crece Ya" subheadline="Transformamos recomendaciones en ventas online, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo el sitio web." beneficiotitulo2="Ventas Aumentadas" beneficio2="Convierta referencias en clientes digitales." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Creamos y gestionamos tu tienda online, sin esfuerzo para ti." services={[{"name":"Creación de Tienda Online","icon":"shopping-cart","description":"Lanza tu tienda digital en horas."},{"name":"Gestión de Contenidos","icon":"edit","description":"Mantenemos tu sitio siempre actualizado."},{"name":"SEO Avanzado","icon":"search","description":"Optimiza tu visibilidad en buscadores."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Configura pagos seguros fácilmente."},{"name":"Estrategias de Marketing","icon":"chart-line","description":"Aumenta tus ventas con tácticas efectivas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web impresionantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo se especializa en crear tiendas en línea fáciles de usar. Nuestros expertos configuran todo para que puedas empezar a vender rápidamente, asegurando que tus productos lleguen a más personas sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web. ¿Qué soluciones ofrece WebGo?","respuesta":"En WebGo nos encargamos de todo por ti. Desde el diseño hasta la gestión del día a día de tu sitio web, permitiéndote concentrarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"¿Cuáles son los beneficios de vender en línea con WebGo?","respuesta":"Vender en línea con WebGo te permite llegar a un público más amplio, aumentar tus ingresos y obtener un control total sobre tus ventas. Además, ofrecemos soporte continuo para que nunca te sientas solo en el proceso."},{"pregunta":"¿Qué tan rápido puedo empezar a ver resultados con WebGo?","respuesta":"Con WebGo, la mayoría de los clientes comienzan a ver un aumento en las consultas y ventas en línea en pocas semanas. Nuestro equipo trabaja rápido para que logres resultados visibles y duraderos."},{"pregunta":"No sé cómo generar ventas online, ¿puede WebGo ayudarme?","respuesta":"¡Por supuesto! WebGo no solo crea tu tienda online, sino que también ofrece estrategias de marketing digital personalizadas para atraer más clientes y aumentar tus ventas de manera efectiva."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio con WebGo" 
                      description="Descubre cómo digitalizar tus ventas y atraer nuevos clientes sin complicaciones. Únete a emprendedores exitosos que ya optimizan su presencia online."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
