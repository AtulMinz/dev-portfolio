"use client"

import Image from "next/image";

export default function BackgroundImage(){
    return (
        <div>
            <Image src="blurry-gradient-haikei.svg" alt='hero-background' fill
                   sizes="100vw"
                   style={{
                       objectFit: "cover",
                       zIndex: -1,
                       opacity: 0.6,
                       overflow: "hidden"
                   }}/>
            <Image src="ooorganize.svg" alt='hero-background' fill
                   sizes="100vw"
                   style={{
                       objectFit: "cover",
                       zIndex: -1,
                       opacity:0.6,
                       overflow: "hidden"
                   }}/>
        </div>
    )
}
