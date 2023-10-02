import { NavbarINitialOptions } from "@/constants/NavbarInitialOptions";
import Link from "next/link";

const Navbar = ({
    setData
}: { setData: (e: any) => void }) => {
    return (
        <nav
            className="
              fixed
              top-0
              w-full
              p-4
              flex
              items-center
              justify-between
              px-20
              py-4
              bg-green-500
              z-20
              drop-shadow-[0px_2px_2px_#000000a8]
            "
        >
            <div
                className="
                flex
                items-center
                flex-col
                justify-start
                gap-8
                w-full
                px-4
              "
            >
                <h1
                    className="
                    text-5xl
                    font-black
                    text-white
                    drop-shadow-[1px_1px_1px_black]
                  "
                >
                    Treinamento suporte nivel 1 completo
                </h1>
                <input
                    onChange={setData}
                    placeholder="Buscar..."
                    className="
                    w-full
                    rounded-lg
                    drop-shadow-[1px_1px_1px_black]
                    max-w-[400px]
                    p-1
                  "
                />
            </div>
            {/* <div
                className="
                w-full
                flex
                items-center
                gap-[8px]
                justify-around
              "
            >
                {NavbarINitialOptions.map((item, index) => (
                    <button
                        key={index}
                        className="
                          relative
                          w-[200px]
                          h-[60px]
                          OptionButtonStyle
                          rounded-lg
                          overflow-hidden
                          bg-white
                          drop-shadow-[1px_1px_1px_black]
                          text-black
                          text-xl
                          hover:text-white
                          hover:bg-green-500
                        "
                    >
                        <span
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-bold"
                        >
                            {item}
                        </span>
                    </button>
                ))}
            </div> */}
        </nav>
    );
}

export default Navbar;