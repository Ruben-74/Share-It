import Head from "next/head";

interface Props{
    title: string;
    description : string
    //si on place un ? devant s'est optionnel (description?)
}

//title devient obligatoire dans n'importe quel page qui appelle le component Seo
export const Seo = ({title, description}: Props) => {
    return (
        <>
            <Head>
            <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="viewport" content="width-device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head> 
        </>
    )
}