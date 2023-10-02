import { ItemType, SectionContainerProps } from "@/components/SectionContainer";

const itemsCadastros: ItemType[] = [
    {
        name: "Cadastro de pessoas",
        document: "http://www.lirio.com.br:8086/kb/2020/03/23/video-aula-cadastro-de-pessoas/"
    },
    {
        name: "Grupo de pessoas",
        document: "http://www.lirio.com.br:8086/kb/cadastro-de-grupo-de-pessoas/"
    },
    {
        name: 'Atividades',
        document: 'http://www.lirio.com.br:8086/kb/2020/03/23/video-aula-cadastro-de-atividades-pessoal/'
    },
    {
        name: 'Cadastro de cidades',
        document: 'http://www.lirio.com.br:8086/kb/cadastro-de-cidades/'
    },
    {
        name: 'Cadastro de CFOPs',
        document: 'http://www.lirio.com.br:8086/kb/cadastro-de-cfop/'
    }
]

export const Section2: SectionContainerProps = {
    title: 'Telas do Lírio - Cadastros',
    items: itemsCadastros
}