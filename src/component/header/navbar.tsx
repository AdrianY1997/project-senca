import style from '@/component/header/navButton.module.css';
import NavButtons from "@/component/header/navButtons"

export default function NavBar({ }) {
    return (
        <>
            <nav className={`${style.navbar} ps-2 flex flex-col h-full justify-between bg-senca text-white rounded-lg`}>
                <NavButtons />
            </nav>
        </>
    )
}