import { ItemType, SectionContainerProps } from "@/@types";

const items: ItemType[] = [
    {
        name: "Relatório de Vendas",
        document: "http://www.lirio.com.br:8086/kb/relatorio-de-vendas/"
    },
    {
        name: "Relatório de movimentações financeiras",
        document: "http://www.lirio.com.br:8086/kb/relatorio-movimentacoes-financeiras/"
    },
    {
        name: 'Relatório de pedidos',
        document: 'http://www.lirio.com.br:8086/kb/relatorio-de-pedidos/'
    },
    {
        name: 'Relatório "Pessoal e mala direta"',
        document: 'http://www.lirio.com.br:8086/kb/relatorio-pessoal-e-mala-direta/'
    }
]

export const Section6: SectionContainerProps = {
    title: 'Telas do Lírio - Relatórios',
    items: items,
    subTitle: 'relatórios'
}