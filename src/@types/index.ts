export type ItemType = {
    name: string
    document: string
}

export interface SectionContainerProps {
    title: string
    items: ItemType[]
    subTitle: string
}