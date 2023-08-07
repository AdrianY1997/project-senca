import banner from '@/assets/img/banner.png';
import Image from "next/image";

export default function HomePage() {
    return (
        <>
            <div className="section">
                <div>
                    <Image priority className='rounded-2xl' src={banner} alt="Banner de inicio" />
                </div>
                <p className="text-center text-2xl font-bold text-senca my-10">PROGRAMAS DE FORMACIÓN</p>
                <div className="grid grid-cols-3 gap-16">
                    <div className="text-center flex flex-col gap-5">
                        <p className="font-extrabold">TÉCNICOS</p>
                        <p>
                            Los programas tecnológicos del SENA
                            ofrecen a los estudiantes acceso a material
                            de apoyo en forma de bibliografía
                            especializada y recursos digitales. También
                            pueden disponer de presentaciones y
                            material interactivo para profundizar en los
                            conceptos teóricos
                        </p>
                        <button className="btn btn-senca mx-auto">Ver Programas</button>
                    </div>
                    <div className="text-center flex flex-col gap-5">
                        <p className="font-extrabold">TECNÓLOGOS</p>
                        <p>
                            Los programas tecnológicos del SENA
                            ofrecen a los estudiantes acceso a material
                            de apoyo en forma de bibliografía
                            especializada y recursos digitales. También
                            pueden disponer de presentaciones y
                            material interactivo para profundizar en los
                            conceptos teóricos
                        </p>
                        <button className="btn btn-senca mx-auto">Ver Programas</button>
                    </div>
                    <div className="text-center flex flex-col gap-5">
                        <p className="font-extrabold">CURSOS CORTOS</p>
                        <p>
                            Los programas tecnológicos del SENA
                            ofrecen a los estudiantes acceso a material
                            de apoyo en forma de bibliografía
                            especializada y recursos digitales. También
                            pueden disponer de presentaciones y
                            material interactivo para profundizar en los
                            conceptos teóricos
                        </p>
                        <button className="btn btn-senca mx-auto">Ver Programas</button>
                    </div>
                </div>
            </div>
        </>
    );
}
