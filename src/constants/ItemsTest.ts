import { ItemType, SectionContainerProps } from "@/@types"


const itemsPreparandoAmbiente: ItemType[] = [
    {
        name: "Playbook-SUPPORTED_NATIVE_MODULES.pdf",
        document: "https://drive.google.com/file/d/1QtqSKlV1fPfXhVALAMtUqsbHpeTAjDv9/view?pli=1",
    },
    {
        name: "Configurar TemViewer",
        document: "https://docs.google.com/document/d/1pSBJ1RIKesgKX_uFlf7EkSk3_l92_2BTa3CRNDXNr1A/edit",
    },
    {
        name: 'Desativar AutoRefresh FireFox',

        document: 'https://docs.google.com/document/d/1we9nOlb7haJLS7mDYpG0dLqFAYiLIkcKCb4rGcak4Uk/edit'
    },
    {
        name: 'Instalando o Firebird 1.5 e 2.5.1 no mesmo servidor',

        document: 'https://docs.google.com/document/d/1Cyois4RlvQOfgpL82rBIih65eJAjP-kfkGzGPS18-ro/edit'
    },
    {
        name: 'Configurar/Instalar o Lirio no servidor passo a passo',

        document: 'https://docs.google.com/document/d/1PA7KJU_bB4zwnrwb4YIMV2idT026JSRY-jEKO8YYGYw/edit'
    },
    {
        name: 'HDBackup - manual completo',

        document: 'https://docs.google.com/document/d/1frk6b0l9rFqAcqyM79tbT_wd0QgKHBnt0-8gB28aCoo/edit'
    },
    {
        name: 'Restaurar banco de dados - HDBackup',

        document: 'https://docs.google.com/document/d/1kFYmmPy4oZcUgdCpoIEazRQPGeHjtKsG8xvkxKWBDlk/edit'
    }
]

export const Section1: SectionContainerProps = {
    title: 'Preparando ambiente para teste e atendimento',
    items: itemsPreparandoAmbiente,
    subTitle: 'preparação'
}