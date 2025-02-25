import Container from "../../Container";
import FooterTitle from "./FooterTitle";

import { MdLocationOn } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import footerData from "../../../data/footerData";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-3 gap-20 max-xl:grid-cols-2 max-xl:gap-y-28 max-md:grid-cols-1 max-sm:gap-16">
          <div data-aos="fade-up" data-aos-delay="700">
            <FooterTitle>Contato</FooterTitle>

            <ul className="flex flex-col gap-4 max-sm:text-sm">
              <li>
                <p className="flex gap-3 font-medium ">
                  <span>
                    <MdLocationOn className="w-5 h-5" />
                  </span>
                  Rua das Flores 123. Bairro Jardim das Rosas. São Paulo - SP,
                  01234-567
                </p>
              </li>
              <li>
                <p className="flex gap-3 font-medium ">
                  <span>
                    <MdOutlineMail className="w-5 h-5" />
                  </span>
                  contato@belezaexpress.com.br
                </p>
              </li>
              <li>
                <p className="flex gap-3 font-medium ">
                  <span>
                    <FaPhoneAlt className="w-5 h-5" />
                  </span>
                  (11) 91234-5678
                </p>
              </li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233979.548848616!2d-46.812681583270894!3d-23.606827118772106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577e321df913%3A0xd572a0b50d6b6306!2sC.Kamura%20SP!5e0!3m2!1spt-PT!2sbr!4v1720608761106!5m2!1spt-PT!2sbr"
                width="100%"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="mt-16 shadow-md shadow-black/20 max-md:mt-5 "
              ></iframe>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <FooterTitle>Horário de Funcionamento</FooterTitle>

            <ul className="flex flex-col gap-4">
              <li>
                <p className="font-semibold text-black">Segunda - Sábado</p>
                <span>09:00 - 21:00</span>
              </li>
              <li>
                <p className="font-semibold text-black">Domingo</p>
                <span>Fechado</span>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <FooterTitle>Siga-nos nas Redes Sociais</FooterTitle>

            <ul className="grid grid-cols-3 gap-5">
              {footerData.map((data) => (
                <li
                  key={data.id}
                  className="relative"
                  data-aos="zoom-in"
                  data-aos-delay={1300 * data.id}
                >
                  <img
                    src={data.src}
                    alt="Imagem de postagem no instagram"
                    className="relative z-10 object-cover object-center w-36 h-36 shadow-md shadow-black/20 rounded-md max-md:w-full max-md:object-top"
                  />
                  <div className="transition-all duration-500 cursor-pointer absolute z-20 inset-0 hover:bg-black/60 rounded-md flex justify-center items-center text-transparent hover:text-white">
                    <AiFillInstagram className="w-8 h-8 " />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="bg-gradient-to-b from-zinc-400/10 to-[#e9ecef] w-full h-2 mt-20"></div>

      <div className="my-5">
        <p className="text-center max-sm:text-sm ">
          Desenvolvido por <span className="font-semibold">Miquelven</span>
        </p>
      </div>
    </footer>
  );
}
