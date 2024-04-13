import Image from "next/image";

export default function Aboutme() {
  const programmingLanguages = [
    { name: "Java", image: "java.svg" },
    { name: "Python", image: "python.svg" },
    { name: "C++", image: "c-lang.svg" },
    { name: "Javascript", image: "javascript.svg" },
    { name: "Typescript", image: "typescript.svg" },
  ];

  const frontend = [
    { name: "React", image: "react.svg" },
    { name: "Next.js", image: "nextjs-full.svg" },
    { name: "CSS", image: "css-3.svg" },
    { name: "Tailwind css", image: "tailwindcss-icon.svg" },
  ];

  const backend = [
    { name: "Node.js", image: "nodejs.svg" },
    { name: "MongoDB", image: "mongodb.svg" },
    { name: "Postgresql", image: "postgresql.svg" },
    { name: "Prisma", image: "prisma.svg" },
  ];

  const other = [
    { name: "Docker", image: "docker.svg" },
    { name: "Nginx", image: "nginx.svg" },
    { name: "Github", image: "github-new.svg" },
  ];

  return (
    <div className="lg:pt-20 rounded-lg p-[1px] my-2 w-full">
      <div className="bg-[#222222] rounded-lg p-8 flex flex-col md:flex-row gap-6 border-2 border-violet-600 shadow-lg shadow-violet-800">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold gap-1 text-center text-gray-300 md:items-start tracking-tighter text-[clamp(1rem,5vw,1.5rem)] leading-none inline-flex mb-4 border-b w-fit pb-2">
            About me
          </h2>
          <p className="items-center tracking-wide text-base text-gray-200 md:text-sm leading-normal">
            Hey, I&apos;m Atul Minz, a passionate full-stack web developer
            dedicated to turning ideas into dynamic digital experiences. I
            thrive on the challenges of turning ideas into dynamic digital
            experiences. Beyond the screen, I explore new technologies and enjoy
            the ever-evolving landscape of web development. Let&apos;s connect
            and explore the endless possibilities together!
          </p>
        </div>
      </div>
      <div className="bg-transparent w-full pb-3 mt-10 text-gray-200 font-semibold border-b-[1px] border-violet-100 border-opacity-40">
        <h1 className="text-4xl">My Tech Stack</h1>
      </div>
      <h2 className="pt-3 text-cyan-50">Programming Languages</h2>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programmingLanguages.map((language) => (
          <div
            key={language.name}
            className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors border border-zinc-800/60"
          >
            <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
              <Image
                src={language.image}
                alt={language.image}
                width={100}
                height={100}
                className="aspect-square h-full w-full object-contain"
              />
            </span>
            <h3 className="text-md text-white flex items-center">
              {language.name}
            </h3>
          </div>
        ))}
      </div>

      <br></br>
      <h2 className="pt-3 text-cyan-50">Frontend</h2>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frontend.map((language) => (
          <div
            key={language.name}
            className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
          >
            <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
              <Image
                src={language.image}
                alt={language.image}
                width={100}
                height={100}
                className="aspect-square h-full w-full object-contain"
              />
            </span>
            <h3 className="text-md text-white flex items-center">
              {language.name}
            </h3>
          </div>
        ))}
      </div>

      <br></br>
      <h2 className="pt-3 text-cyan-50">Backend</h2>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {backend.map((language) => (
          <div
            key={language.name}
            className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
          >
            <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
              <Image
                src={language.image}
                alt={language.image}
                width={100}
                height={100}
                className="aspect-square h-full w-full object-contain"
              />
            </span>
            <h3 className="text-md text-white flex items-center">
              {language.name}
            </h3>
          </div>
        ))}
      </div>

      <br></br>
      <h2 className="pt-3 text-cyan-50">Others</h2>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {other.map((language) => (
          <div
            key={language.name}
            className="flex gap-4 rounded-md px-6 py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#393939c5] transition-colors duration-150 border border-zinc-800/60"
          >
            <span className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-lg object-contain">
              <Image
                src={language.image}
                alt={language.image}
                width={100}
                height={100}
                className="aspect-square h-full w-full object-contain"
              />
            </span>
            <h3 className="text-md text-white flex items-center">
              {language.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
