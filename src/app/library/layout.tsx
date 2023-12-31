import introImg from '@/assets/img/library/development/introduction.png';
import langImg from '@/assets/img/library/development/languages.png';
import dbImg from '@/assets/img/library/development/databases.png';
import agdvImg from '@/assets/img/library/development/agile-development.png';
import webdevImg from '@/assets/img/library/development/web-development.png';

import Image from "next/image";
import Link from 'next/link';
import Categories from '@/component/library/categories';

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}