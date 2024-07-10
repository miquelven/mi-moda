import Container from "../../Container";
import linksData from "../../../data/linksData";

import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";

import logo from "../../../assets/imgs/mmoda.webp";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <header className="py-5 shadow-lg shadow-zinc-300/50 relative z-10">
      <Container>
        <div className="flex  items-center justify-between">
          <img
            src={logo}
            alt="Imagem da logo"
            className="w-12 h-12 object-center object-cover "
          />

          <nav>
            <ul
              className={`transition-all duration-300 flex items-center max-md:fixed max-md:h-screen max-md:inset-0 max-md:flex-col max-md:py-20 max-md:items-start max-md:gap-14 max-md:bg-[#e9ecef] 
                     ${
                       !openMenu
                         ? "  max-md:opacity-0 z-10"
                         : "  opacity-100 z-30"
                     }
                    `}
            >
              {linksData.map((link) => (
                <li
                  key={link.id}
                  onClick={() => setOpenMenu(false)}
                  className="transition-all duration-300 px-7 hover:text-[#ef8354]  "
                >
                  <span className="text-lg font-semibold max-md:text-3xl max-md:font-normal">
                    <a href={link.href}>{link.text}</a>
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="relative z-40 p-2 hidden max-md:block"
            >
              {openMenu ? (
                <MdOutlineClose className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
