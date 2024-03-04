import Image from "next/image";

export default function Aboutme() {
  const programmingLanguages = [
    { name: "Java", image: "java.svg" },
    { name: "Python", image: "python.svg" },
    { name: "C++", image: "c-lang.svg" },
    { name: "Javascript", image: "javascript.svg" },
    { name: "Typescript", image: "python.svg" },
  ];

  const frontend = [{}];

  const backend = [{}];

  const other = [{}];

  return (
    <div className="lg:pt-20 rounded-lg p-[1px] my-2 w-full">
      <div className="bg-neutral-900 rounded-lg p-8 flex flex-col md:flex-row gap-6 border-2 border-violet-600 shadow-lg shadow-violet-800">
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
      <div className="bg-white w-full h-full mt-4 text-black">
        <h2 className="pt-3">Programming Languages</h2>
        <br></br>
        {programmingLanguages.map((element) => (
          <div key={element.name}>
            <Image
              src={element.image}
              alt={element.name}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
      <div className="bg-white w-full h-full mt-4 text-black">
        <h2>Frontend</h2>
      </div>
      <div className="bg-white w-full h-full mt-4 text-black">
        <h2>Backend</h2>
      </div>
      <div className="bg-white w-full h-full mt-4 text-black">
        <h2>Others</h2>
      </div>
    </div>
  );
}
