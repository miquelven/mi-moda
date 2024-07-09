import Container from "../../Container";
import linksData from "../../../data/linksData";

import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="py-5 shadow-lg shadow-zinc-300/50 relative z-10">
      <Container>
        <div className="flex  items-center justify-between">
          <h1>Logo</h1>

          <nav>
            <ul
              className={`transition-all duration-300 flex items-center max-md:absolute max-md:h-screen max-md:inset-0 max-md:flex-col max-md:py-20 max-md:items-start max-md:gap-14 max-md:bg-[#e9ecef] 
                     ${
                       !openMenu ? " max-md:opacity-0 z-0" : " opacity-100 z-20"
                     }
                    `}
            >
              {linksData.map((link) => (
                <li
                  key={link.id}
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
              className="relative z-20 p-2 hidden max-md:block"
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
