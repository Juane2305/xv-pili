import AOS from "aos";
import "aos/dist/aos.css";

import dressCodeAurora from '../assets/aurora/dressCodeAurora.svg'
import decoracionImagenes from '../assets/aurora/decoracionImagenes.svg'
import decoracionNombre from "../assets/aurora/decoracionNombre.svg";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import song from '../assets/song.mp3'

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import PastelCountdown from "./CountdownCircles";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {


  const targetDate = new Date("2026-01-10T21:00:00-03:00");

  const colorPrincipal = "#f9a8d4";
  const colorSecundario = "#f9a8d4";


  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1764116213/WhatsApp_Image_2025-11-24_at_8.44.41_PM_id4chs.jpg')] md:bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1764116213/WhatsApp_Image_2025-11-24_at_8.44.41_PM_id4chs.jpg')] bg-center bg-cover md:bg-contain bg-no-repeat font-eleganteText space-y-5 overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-black/40 z-0"></div>
        <div data-aos="fade-in">

          <div className="relative z-10 flex flex-col items-center text-center text-white pt-96">

            <div className="flex items-center justify-center mb-2">

              <img
                src={decoracionNombre}
                alt="Decoración invertida"
                className="w-40 h-auto mr-3"
              />

                <div className="flex flex-col items-center">

                    <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
                        Pili
                    </h1>

                    <p className="text-xl md:text-2xl font-light tracking-wider">
                    MIS QUINCE AÑOS
                    </p>

                </div>

              <img
                src={decoracionNombre}
                alt="Decoración normal"
                className="w-[10rem] h-auto  scale-x-[-1] transform"
              />
            </div>

          </div>
        </div>
      </div>

      <div>
        <section className="relative bg-gradient-to-b from-white via-pink-50 to-white py-16 px-6 border-b-4 border-pink-100">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
              {/* Decoración de corona en la parte superior */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="text-6xl">👑</div>
              </div>

              <div className="relative text-center space-y-4 pt-6">
                <p className="text-2xl md:text-3xl font-bold text-pink-400 italic mb-4">15 años...</p>
                
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-lg italic">es pasar de la niñez a la adolescencia,</p>
                  <p className="text-lg italic">es entrar a un mundo desconocido y nuevo,</p>
                  <p className="text-lg italic">es celebrar lo vivido hasta aquí,</p>
                  <p className="text-lg italic">es continuar sintiéndose querida y acompañada,</p>
                  <p className="text-lg italic">es comenzar una hermosa etapa nueva.</p>
                  <p className="text-lg italic font-semibold mt-4">Te espero para compartir este momento tan especial</p>
                </div>

                <div className="pt-6 space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-pink-500 italic">Mis 15 años</p>
                  <p className="text-5xl md:text-6xl font-bold text-pink-400 italic">Pili</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section
          id="contador"
          className="bg-white py-10 border-y-4 border-pink-100 text-center"
        >
          <p className="text-xl tracking-wider font-light py-5">10 de Enero de 2026</p>
          <PastelCountdown targetDate={targetDate} bgColor="bg-pink-100"/>
        </section>

        <section id="lugares" className="relative text-center bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Título de la sección */}
            <div data-aos="fade-up" className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-pink-400 tracking-wide mb-2">Información</h2>
              <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
            </div>

            {/* Cards de ceremonia y fiesta */}
            <div className="flex justify-center mb-12">
              {/* Card Ceremonia
              <div data-aos="fade-up" data-aos-delay="100" className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow max-w-md w-full">
                <div className="text-4xl mb-4">⛪</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ceremonia</h3>
                <p className="text-lg text-gray-600 mb-2">[Nombre iglesia]</p>
                <p className="text-xl font-bold text-pink-400">10:00 hs</p>
              </div> */}

              {/* Card Fiesta */}
              <div data-aos="fade-up" data-aos-delay="200" className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-shadow max-w-md w-full">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fiesta</h3>
                <p className="text-lg text-gray-600 mb-2">La Vieja Casona Tigre</p>
                <p className="text-xl font-bold text-pink-400">21:00 - 04:30 hs</p>
              </div>
            </div>

            {/* Botón cómo llegar */}
            <div data-aos="fade-up" data-aos-delay="300">
              <a href="https://maps.app.goo.gl/T4dZtLkP8bZ4GP886" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 bg-pink-400 text-white py-4 px-10 rounded-full font-semibold hover:bg-pink-500 transition-all hover:scale-105 shadow-md">
                  <span>📍</span>
                  CÓMO LLEGAR
                </button>
              </a>
            </div>
          </div>
        </section>

        <div className="relative bg-white">
          <img
            src={decoracionImagenes}
            alt="Decoración lateral"
            className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />
          <img
            src={decoracionImagenes}
            alt="Decoración lateral invertida"
            className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
            }}
          />
          <section className="pb-16">
              <FocusCardsDemo
                texto=""
                images={[
                  {
                    index: 1,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1764116190/WhatsApp_Image_2025-11-24_at_8.44.40_PM_wnzxgd.jpg",
                  },
                  {
                    index: 2,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1764116203/WhatsApp_Image_2025-11-24_at_8.44.40_PM_1_x6egc5.jpg",
                  },
                  {
                    index: 3,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1764116207/WhatsApp_Image_2025-11-24_at_8.44.40_PM_2_kvabmt.jpg",
                  },
                ]}
              />
          </section>
        </div>

        <div className="bg-pink-300 text-center relative text-white">
          <GoogleCalendarButton
            imgClass="text-pink-300"
            buttonClass="rounded-full hover:shadow-lg border-pink-300 bg-white text-gray-900"
            titleCalendar="XV de Pili"
            salon="La Vieja Casona de Tigre, 25 de Mayo 1810, B1648 Tigre, Provincia de Buenos Aires"
            fechaComienzo="20260110T210000"
            fechaFin="20260111T043000"
          />
        </div>

        <div className="relative bg-white py-10">
          <DressCodeEsmeralda dressCode="Elegante" icon={dressCodeAurora}/>
        </div>


        <DatosBancarios
          claseIcon="text-pink-600"
          texto="Si deseas hacerme un regalo, te dejo los datos"
          claseContenedor="bg-pink-100 text-gray-600"
          claseBoton="rounded-full hover:shadow-lg border-pink-300 bg-gray-100 text-gray-900"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{
            backgroundColor: "white",
            borderColor: "#f9a8d4",
          }}
          claseBotonModal={{
            backgroundColor: colorPrincipal,
            borderColor: "#f9a8d4",
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="0000003100090936324404"
          alias="lucia.lopez555"
          banco="Mercado Pago"
          nombre="Lucia Paola Lopez"
          claseModal="bg-pink-200"
          borderModal="border-pink-200"
          textColor="text-pink-300"
        />

        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-4 border-pink-100"
          claseTitle="text-pink-300"
          claseButton="border-2 border-pink-200 font-semibold text-gray-700 rounded-full"
          linkAsistencia="https://wa.me/5491156093494?text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20Pili"
        />


        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
