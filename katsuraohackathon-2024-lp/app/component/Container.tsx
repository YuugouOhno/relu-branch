import { ReactNode } from 'react'
import Image from "next/image";

type ContainerProps = {
    children: ReactNode
    imageUrl: string;
    title?: string;
    subTitle?: string;
    navbar?: ReactNode
  }
  
const Container = ({ 
    children, 
    imageUrl, 
    title = "",
    subTitle = "",
    navbar,
}: ContainerProps) => (
<>
    <div className="fullscreen-image min-h-screen flex flex-col items-center md:justify-center text-white font-bold">
        <Image
            src={imageUrl}
            alt={title || "Background Image"}
            fill
            priority
            className="z-0"
        />
        <div className="z-10 text-center">
            {title && <p className="text-vh-25 -mb-10 outline-text">{title}</p>}
            {subTitle && <h2 className="text-3xl mb-10">{subTitle}</h2>}
        </div>
        <div className="z-10 text-center">
        {children}
        </div>
        {/* {navbar} */}
    </div>
</>
)

export default Container;