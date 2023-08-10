import introImg from '@/assets/img/library/development/introduction.png';
import langImg from '@/assets/img/library/development/languages.png';
import dbImg from '@/assets/img/library/development/databases.png';
import agdvImg from '@/assets/img/library/development/agile-development.png';
import webdevImg from '@/assets/img/library/development/web-development.png';

import Image from "next/image";
import Link from 'next/link';
import Categories from '@/component/library/categories';

export default function LibraryPage({ }) {
    return (
        <>
            <div className="section flex">
                <Categories />
                <div className="flex flex-col gap-8 pt-4 ms-4 border-s-1 border-senca ps-4">
                    Bienvenido a la biblioteca SENA
                </div>
            </div>
        </>
    )
}