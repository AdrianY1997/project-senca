"use client"

import devImg from '@/assets/img/library/development.png';
import langImg from '@/assets/img/library/languages.png';
import mathImg from '@/assets/img/library/maths.png';
import ecoImg from '@/assets/img/library/eco.png';
import grapImg from '@/assets/img/library/graphics.png';
import emprImg from '@/assets/img/library/entrepreneurship.png';
import style from './categories.module.css';
import Image from "next/image";
import Link from 'next/link';
import Icon from '../general/icon';
import { faCaretDown, faCaretUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Categories({ }) {
    const categories = [
        {
            link: "/library/development",
            img: devImg,
            title: "programación",
            details: "Aprender a programar no solo implica el dominio del lenguaje de programación, sino también la mejora de tus habilidades para resolver problemas de manera eficiente y efectiva",
        },
        {
            link: "/library/languages",
            img: langImg,
            title: "bilingüismo",
            details: "Aprender un nuevo idioma no solo implica el dominio de vocabulario y gramática, sino también el desarrollo de habilidades para comunicarte de manera efectiva y creativa."
        },
        {
            link: "/library/math",
            img: mathImg,
            title: "álgebra",
            details: "Aprender álgebra no solo implica la comprensión de ecuaciones y fórmulas, sino también el fortalecimiento de tus habilidades para resolver problemas de manera eficiente y creativa."
        },
        {
            link: "/library/eco",
            img: ecoImg,
            title: "Energías renovables",
            details: "TEMPLATE"
        },
        {
            link: "/library/graphics",
            img: grapImg,
            title: "Diseño gráfico",
            details: "TEMPLATE"
        },
        {
            link: "/library/entrep",
            img: emprImg,
            title: "Emprendimiento",
            details: "TEMPLATE"
        }
    ]
    const [offSet, setOffSet] = useState(0);

    const handleScrollCategories = (n: number) => {
        let tmpOffSet = offSet + n;

        if (tmpOffSet > 5 || tmpOffSet < 0) {
            return;
        };

        setOffSet(tmpOffSet);
    }

    return (
        <>
            <div className={style.categories + ` w-min py-12 h-[100vh] -my-4 overflow-hidden fixed`}>
                <span onClick={() => handleScrollCategories(-1)} className='absolute top-0 w-full flex justify-center pt-4 py-2 bg-[whitesmoke]/90 shadow-[0_0_20px_5px_whitesmoke] z-10 cursor-pointer'>
                    <Icon icon={faChevronUp} />
                </span>
                <span onClick={() => handleScrollCategories(1)} className='absolute bottom-0 w-full flex justify-center pb-4 py-2 bg-[whitesmoke]/90 shadow-[0_0_20px_5px_whitesmoke] z-10 cursor-pointer'>
                    <Icon icon={faChevronDown} />
                </span>
                <div className={`flex flex-col gap-12 ease-in-out duration-200`} style={{
                    transform: `translateY(calc(-${offSet} * 16rem))`
                }}>
                    {categories && categories.map((e, i) => (
                        <Link href={e.link} key={i} className={style.container}>
                            <div className={`border-transparent border-1 rounded-md bg-white hover:border-senca shadow-sm relative pb-8 cursor-pointer`}>
                                <div className={style.content}>
                                    <div className='w-48 h-36 p-12 pb-1'>
                                        <Image className='w-full h-full' src={e.img} priority alt=""></Image>
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-bold capitalize'>{e.title}</p>
                                        <p className={style.details + " w-100 absolute text-xs"}>{e.details}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}