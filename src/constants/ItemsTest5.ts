import { ItemType, SectionContainerProps } from "@/@types";

const items: ItemType[] = [
    {
        name: "Entrada de produtos",
        document: "http://www.lirio.com.br:8086/kb/2020/03/06/video-aula-entrada-de-produtos/"
    },
    {
        name: "Devolução de compras",
        document: "http://www.lirio.com.br:8086/kb/2020/03/06/video-aula-devolucao-de-compra/"
    },
    {
        name: 'Simples entrada',
        document: 'http://www.lirio.com.br:8086/kb/2020/03/06/video-aula-simples-entrada/'
    },
    {
        name: 'Simples saída',
        document: 'http://www.lirio.com.br:8086/kb/2020/03/06/video-aula-simples-saida/'
    },
    {
        name: 'Simples faturamento',
        document: 'http://www.lirio.com.br:8086/kb/2020/03/26/video-aula-simples-faturamento/'
    },
    {
        name: 'Iventário de produtos',
        document: 'http://www.lirio.com.br:8086/kb/2020/03/26/video-aula-inventario-de-produtos/'
    }
]

export const Section5: SectionContainerProps = {
    title: 'Telas do Lírio - Movimentação',
    items: items,
    subTitle: 'movimentação'
}