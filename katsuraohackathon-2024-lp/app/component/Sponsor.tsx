import { ReactNode } from 'react'
import Image from "next/image";

type ContainerProps = {
    children?: ReactNode
    title?: string;
    describe?: string;
    logo_url?: string;
    hp_url?: string;
}
  
const Sponsors = ({ 
    children, 
    title = "",
    describe="",
    logo_url="",
    hp_url=""
}: ContainerProps) => (
    <>
        <div id={title} className="flex flex-col items-center mb-20">
            <h1 className="text-5xl">{title}</h1>
            {logo_url&& <Image src={logo_url} alt="logo" width={200} height={100}/>}
            <p className="font-bold md:font-light text-sm md:text-xl mb-6 md:ml-32 md:mr-32 mr-8 ml-8">{describe}</p>
            {hp_url&&<a href={hp_url} className="border-b-2 border-black-300 hover:text-gray-300">{title}についてはこちら</a>}
        </div>
    </>
)
export default Sponsors;