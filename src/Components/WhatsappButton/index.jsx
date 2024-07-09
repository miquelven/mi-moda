import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <button className="transition-all duration-300 shadow-md shadow-black/20 bg-[#ef8354] w-40 py-2 flex justify-center items-center rounded-md hover:bg-[#ef8254b7]">
      <FaWhatsapp className="w-7 h-7 text-white" />
    </button>
  );
}
