import { ReactNode } from 'react'
import Image from "next/image";

type ContainerProps = {
    children: ReactNode
    title?: string;
    subTitle?: string;
    navbar?: ReactNode;
    backgroundColor?: string;
}
  
const Container = ({ 
    children, 
    title = "",
    subTitle = "",
    
    navbar,
    backgroundColor = "transparent",
}: ContainerProps) => (
<>
    <div className={`md:min-h-screen text-black flex flex-col items-center justify-center font-bold ${backgroundColor} md:px-0 px-6`}>
        <div className="z-10 text-center">
            {title && <p className="md:text-vh-25 md:mb-16 text-5xl">{title}</p>}
            {subTitle && <h2 className="text-3xl mb-10">{subTitle}</h2>}
        </div>
        <div className="z-10 text-center md:mb-0 mb-12 ">
        {children}
        </div>
        {/* {navbar} */}
    </div>
</>
)

export default Container;