import Categories from '@/component/library/categories';

export default function LibraryPage({ }) {
    return (
        <>
            <div className="section flex">
                <Categories />
                <div className="flex flex-col gap-8 pt-4 border-s-1 border-senca ms-52 ps-4">
                    Bienvenido a la biblioteca SENA
                </div>
            </div>
        </>
    )
}