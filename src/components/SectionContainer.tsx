"use client"

import { useEffect, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

export type ItemType = {
    name: string
    document: string
}

export interface SectionContainerProps {
    title: string
    items: ItemType[]
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    title,
    items,

}) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredItems, setFilteredItems] = useState<ItemType[]>([])

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredItems(items)
        } else {
            setFilteredItems(items.filter(item =>
                item.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ))
        }
    }, [searchTerm, filteredItems, items])

    return (
        <section
            className="
                p-4
                flex
                flex-col
                items-center
                rounded-md
                bg-blue-500
                gap-10
                drop-shadow-[0px_0px_2px_black]
                w-full
                max-w-[624px]
                h-[500px]
              
            "
        >

            <div
                className="
                    drop-shadow-[0px_0px_2px_black]
                    flex
                    flex-col
                    items-start
                    w-full
                "
            >
                <h2
                    className="
                        text-3xl
                        font-black
                        text-white
                        pb-4
                    "
                >
                    {title}
                </h2>
                <hr
                    className='
                        border-2
                        border-white
                        w-full
                    '
                />
                <input
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Buscar...'
                    className='
                      mt-1
                      rounded-md
                      font-bold
                      p-2
                  '
                />
            </div>
            <div
                className="
                  w-full
                  max-h-[300px]
                  overflow-y-scroll
                  p-4
              "
            >
                <div
                    className="
                    flex
                    flex-col
                    items-start
                    gap-2
                    justify-center
                  "
                >
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.name}
                            className="
                              bg-white
                              overflow-hidden
                              rounded-lg
                              flex
                              flex-col
                              gap-4
                              drop-shadow-[0px_0px_2px_black]
                            "
                        >
                            <div
                                className='
                                    flex
                                    gap-4
                                    items-center
                                    justify-between
                                    p-2
                                '
                            >
                                <span
                                    className='
                                      text-xl
                                      font-semibold
                                 '
                                >
                                    {item.name}
                                </span>
                                <a
                                    target={"_blank"}
                                    href={item.document}
                                    className='
                                        bg-neutral-100
                                        drop-shadow-[0px_0px_2px_black]
                                        text-black
                                        rounded-full
                                        text-5xl
                                        flex
                                        items-center
                                        w-[60px]
                                        h-[60px]
                                        hover:drop-shadow-[0px_0px_1px_black]
                                        hover:brightness-95
                                    '
                                >
                                    <BsFillPlayFill
                                        className="
                                      text-center
                                      w-full
                                  "
                                    />
                                </a>
                            </div>
                            <button
                                className='
                                    w-full
                                    flex
                                    items-start
                                    bg-neutral-200
                                    p-2
                                '
                            >Comentários...</button>
                        </div>
                    ))}
                </div>
                <footer></footer>
            </div>

        </section>
    );
}

export default SectionContainer;