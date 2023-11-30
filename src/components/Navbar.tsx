import Link from "next/link";

interface NavbarProps {
    params: string
}

const Navbar = ({
    params
}: NavbarProps) => {

    const sectionsName = ["Informação", "Preparação", "Cadastros", "Vendas", "Financeiro", "Movimentação", "Relatórios", "Avaliação", "Feedback"]

    return (
        <nav
            className="
                    bg-neutral-100
                    drop-shadow-[0px_2px_2px_#000000b8]
                    w-full
                    p-3
                    border-b-4
                    border-neutral-400
              "
        >
            <div
                className="
                      flex
                      justify-between
                      gap-2
                  "
            >
                {sectionsName.map((section, i) => (
                    <Link
                        key={i}
                        href={`/main/${section.toLowerCase()}`}
                        className={`
                               p-4
                               bg-green-600
                               text-white
                               drop-shadow-[1px_1px_2px_black]
                               rounded-lg
                               text-xl
                               font-bold
                               OptionButtonStyle
                               overflow-hidden
                               relative
                               w-[320px]
                               h-[50px]
                               ${params === section.toLowerCase() && 'bg-[rgba(239,108,36)]'}
                            `}
                    >
                        <span
                            className="
                                    absolute
                                    top-1/2
                                    left-1/2
                                    -translate-y-1/2
                                    -translate-x-1/2
                                "
                        >
                            {section}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;