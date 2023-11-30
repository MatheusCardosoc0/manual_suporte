"use client"

import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import InformationContainer from "@/components/SectionContainer/InformationContainer";
import { manuaisTreinamentoSuporteN1 } from "@/constants";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useState } from "react";

const Main = () => {

    const params = useParams()
    const { id } = params

    const [name, setName] = useState('')

    const user = useSession()

    console.log(user)



    const currentSession = decodeURI(id.toString()).toLowerCase()

    const currentManual = manuaisTreinamentoSuporteN1.find(item => item.subTitle.toLowerCase() === currentSession)

    return (
        <main
            className="
            flex
            flex-col
            min-h-screen
            w-full
            items-center
            gap-12
          "
        >
            <Navbar params={decodeURI(id.toString()).toLowerCase() as string} />

            <div>
                {currentManual && (
                    <SectionContainer
                        data={currentManual}
                    />
                )}
                {currentSession === 'informação' && (
                    <InformationContainer />
                )}
            </div>
        </main>
    );
}

export default Main;