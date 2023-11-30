"use client"

import { SectionContainerProps as dataProps } from '@/@types'
import Link from 'next/link';
import { useState } from 'react';

interface SectionContainerProps {
    data: dataProps
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    data
}) => {

    return (
        <section
            className='
                w-full
                max-w-[1080px]
                bg-gradient-to-tr from-blue-400 to-blue-600
                flex
                flex-col
                items-start
                justify-center
                p-4
                gap-12
                rounded-xl
                drop-shadow-[0px_0px_2px_black]
            '
        >
            <div
                className='
                    bg-yellow-400
                    text-white
                    rounded-lg
                    p-2
                    border-b-4
                    border-r-4
                    border-yellow-500
                    drop-shadow-[0px_1px_2px_black]
              '
            >
                <h2
                    className='
                        text-3xl
                        font-black
                        drop-shadow-[1px_1px_2px_black]
                    '
                >{data.title}</h2>
            </div>
            <div
                className='   
                  flex
                  flex-col
                  gap-4
                  w-full            
                  text-xl
                  font-bold
                  max-h-[400px]
                  overflow-y-scroll
                  p-4
                  drop-shadow-[0px_0px_3px_black]
                  pl-12
                '
            >
                {data.items.map((item, i) => (
                    <div
                        key={i}
                        className='
                           bg-white
                           border-r-4
                           border-b-4
                           border-black
                           rounded-xl
                           flex
                           items-center
                           text-black
                           font-bold
                           text-2xl
                           cursor-pointer
                        '
                    >
                        <a
                            href={item.document}
                            target={"_blank"}
                            className='w-[620px] p-4 hover:bg-[#b1ff1f] rounded-l-xl overflow-hidden'
                        >
                            {item.name}
                        </a>
                        <span
                            className='border-l-4 p-4 hover:bg-[#b1ff1f] border-black w-[200px]'
                        >
                            Não realizado
                        </span>
                        <span
                            className='border-l-4 p-4 hover:bg-[#b1ff1f] rounded-r-xl border-black w-[148px]'
                        >Comentário</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectionContainer;