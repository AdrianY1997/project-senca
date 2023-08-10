'use client'

import Link from 'next/link';
import { faHome, faBook, faGamepad, faCircleQuestion, faSearch, faBars, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Icon from '@/component/general/icon';

export default function NavButtons({ }) {
    const [menuIsCollapsed, setMenuIsCollapsed] = useState(true);
    const path = usePathname();
    const router = useRouter();
    const buttons = [
        {
            text: "menu",
            icon: <Icon icon={faBars} size={1.5} />,
            onclick: () => setMenuIsCollapsed(!menuIsCollapsed)
        },
        {
            link: '/home',
            text: 'inicio',
            icon: <Icon icon={faHome} size={1.5} />,
        },
        {
            link: '/library',
            text: 'librería',
            icon: <Icon icon={faBook} size={1.5} />,
        },
        {
            link: '/games',
            text: 'juegos',
            icon: <Icon icon={faGamepad} size={1.5} />,
        },
        {
            link: '/help',
            text: 'ayuda',
            icon: <Icon icon={faCircleQuestion} size={1.5} />,
        },
        {
            link: '/search',
            text: 'búsqueda',
            icon: <Icon icon={faSearch} size={1.5} />,
        },
        {
            text: 'avanzar',
            icon: <Icon icon={faForward} size={1.5} />,
            onclick: () => router.forward(),
        },
        {
            text: 'retroceder',
            icon: <Icon icon={faBackward} size={1.5} />,
            onclick: () => router.back()
        }
    ]
    return (
        <>
            <p></p>
            {buttons.map((b, i) => b.link ? (
                <Link
                    key={i}
                    href={b.link}
                    prefetch
                    className={`${path == b.link && 'bg-gray-100 text-senca before:shadow-[0_-10px_0_0_whitesmoke] after:shadow-[0_-10px_0_0_whitesmoke]'}`}
                >
                    {path == b.link
                        ? <i style={{ animation: "none" }}>{b.icon}</i>
                        : <i>{b.icon}</i>}
                    <span className={`capitalize overflow-hidden max-w-[100px] ${menuIsCollapsed ? 'w-0' : 'w-[100px]'}`}>{b.text}</span>
                </Link>
            ) : (
                <p key={i} onClick={b.onclick}>
                    <i>
                        {b.icon}
                    </i>
                    <span className={`capitalize overflow-hidden max-w-[100px] ${menuIsCollapsed ? 'w-0' : 'w-[100px]'}`}>{b.text}</span>
                </p>
            ))}
            <p></p>
        </>
    )
}