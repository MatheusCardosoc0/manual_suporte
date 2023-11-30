import { ItemType, SectionContainerProps } from "@/@types";

const items: ItemType[] = [
    {
        name: "Como lançar um Orçamento",
        document: "http://www.lirio.com.br:8086/kb/2020/03/26/video-aula-orcamentos-vendas/"
    },
    {
        name: "Como lançar uma pré-venda",
        document: "http://www.lirio.com.br:8086/kb/venda-balcao-pedido-de-venda/"
    },
    {
        name: 'Venda Balcão',
        document: 'http://www.lirio.com.br:8086/kb/venda-balcao/'
    },
    {
        name: 'Como cancelar NFe / NFCe',
        document: 'http://www.lirio.com.br:8086/kb/cancelar-nota-fiscal-venda-balcao-nfe-nfce/'
    },
    {
        name: 'Venda entrega futura / Baixa da venda entrega futura',
        document: 'http://www.lirio.com.br:8086/kb/venda-entrega-futura/'
    }
]

export const Section3: SectionContainerProps = {
    title: 'Telas do Lírio - Vendas',
    items: items,
    subTitle: 'vendas'
}