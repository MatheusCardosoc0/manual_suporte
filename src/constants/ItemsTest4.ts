import { ItemType, SectionContainerProps } from "@/components/SectionContainer";

const items: ItemType[] = [
    {
        name: "Créditos financeiros",
        document: "http://www.lirio.com.br:8086/kb/2020/03/30/video-aula-creditos-financeiros/"
    },
    {
        name: "Débitos financeiros",
        document: "http://www.lirio.com.br:8086/kb/2020/03/30/video-aula-debitos-financeiros/"
    },
    {
        name: 'Como fazer a baixa de créditos',
        document: 'http://www.lirio.com.br:8086/kb/baixa-manual-de-parcelas-credito/'
    },
    {
        name: 'Como fazer a baixa de débitos',
        document: 'http://www.lirio.com.br:8086/kb/baixa-manual-de-parcelas-debito/'
    },
    {
        name: 'Como cancelar pagamentos',
        document: 'http://www.lirio.com.br:8086/kb/baixa-manual-de-parcelas-cancelamento/'
    },
    {
        name: 'Crédito antecipado',
        document: 'http://www.lirio.com.br:8086/kb/video-aula-de-credito-antecipado/'
    }
]

export const Section4: SectionContainerProps = {
    title: 'Telas do Lírio - Financeiro',
    items: items
}