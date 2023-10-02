"use client"

import Navbar from "@/components/Navbar";
import SectionContainer, { ItemType, SectionContainerProps } from "@/components/SectionContainer";
import { manuaisTreinamentoSuporteN1 } from "@/constants";
import { useEffect, useState } from "react";


export default function Home() {

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState<SectionContainerProps[]>([])

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredItems(manuaisTreinamentoSuporteN1)
    } else {
      setFilteredItems(manuaisTreinamentoSuporteN1.filter(item =>
        item.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ))
    }
  }, [searchTerm, filteredItems])

  return (
    <main className="
      w-full
      h-full
      min-h-screen
      flex
      gap-32
      items-center
      justify-center
      flex-wrap
      pb-20
      pt-56
    ">
      <Navbar
        setData={(e: any) => setSearchTerm(e.target.value)}
      />
      {filteredItems.map(item => (
        <SectionContainer
          key={item.title}
          title={item.title}
          items={item.items}
        />
      ))}
    </main>
  )
}
