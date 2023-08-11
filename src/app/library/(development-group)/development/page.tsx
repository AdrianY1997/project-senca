import introImg from '@/assets/img/library/development/introduction.png';
import langImg from '@/assets/img/library/development/languages.png';
import dbImg from '@/assets/img/library/development/databases.png';
import agdvImg from '@/assets/img/library/development/agile-development.png';
import webdevImg from '@/assets/img/library/development/web-development.png';

import Image from "next/image";
import Link from 'next/link';
import Categories from '@/component/library/categories';

export default function DevelopmentPage({ }) {
    const links = [
        {
            img: introImg,
            link: "/library/development-introduction",
            text: "Introducción a la programación"
        },
        {
            img: langImg,
            link: "/library/development-languages",
            text: "Lenguajes de Programación"
        },
        {
            img: dbImg,
            link: "/library/storages-databases",
            text: "Bases de Datos y Almacenamiento de Datos"
        },
        {
            img: agdvImg,
            link: "/library/agile-development",
            text: "Desarrollo Ágil y Metodologías"
        },
        {
            img: webdevImg,
            link: "/library/web-development",
            text: "Desarrollo Web"
        },
    ]

    return (
        <>
            <div className="section flex">
                <Categories />
                <div className="flex flex-col gap-8 pt-4 ms-4 border-s-1 border-senca ps-4 ms-52">
                    {links && links.map((b, i) => (
                        <div key={i} className="flex gap-4 items-center">
                            <div className='bg-white p-1 w-16 h-16 rounded-lg shadow-sm'>
                                <Image className='w-full h-full' src={b.img} alt="" />
                            </div>
                            <Link href={b.link} className="font-bold underline">{b.text}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}