import Image from "next/image";
export default function Aboutme() {
    return (
        <div className="lg:pt-20 rounded-lg p-[1px] my-2 w-full">
            <div className="bg-black rounded-lg p-8 flex flex-col md:flex-row gap-6 border-2 border-purple-600">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="font-semibold gap-1 text-center md:items-start tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
                        About me
                    </h2>
                    <p className="font-mono items-center tracking-wide text-base md:text-sm leading-normal">
                        Hey, I&apos;m Atul Minz, a passionate full-stack web developer dedicated to turning ideas into dynamic digital experiences. I thrive on the challenges of turning ideas into dynamic digital experiences. Beyond the screen, I explore new technologies and enjoy the ever-evolving landscape of web development.
                        Let&apos;s connect and explore the endless possibilities together!
                    </p>
                </div>
            </div>
        </div>
    );
}