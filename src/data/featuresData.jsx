import { BiLike } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";

const featuresData = [
  {
    id: 1,
    title: "Materiais de Qualidade",
    text: "Nossos produtos são fabricados com materiais de alta qualidade, garantindo durabilidade e satisfação",
    icon: <BiLike className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Frete Grátis",
    text: "Oferecemos frete grátis em todos os pedidos, proporcionando mais conveniência e economia para você",
    icon: <MdAttachMoney className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Devolução em até 30 dias",
    text: "Você pode devolver seu produto em até 30 dias após a compra, sem complicações e com reembolso garantido",
    icon: <IoBagCheck className="w-8 h-8" />,
  },
];

export default featuresData;
