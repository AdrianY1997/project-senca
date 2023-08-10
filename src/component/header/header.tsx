import NavBar from "@/component/header/navbar";

export default function Header({ }) {
    return (
        <>
            <header className="fixed h-full max-h-[900px] p-4 z-20">
                <div className="h-full">
                    <NavBar />
                </div>
            </header>
        </>
    )
}