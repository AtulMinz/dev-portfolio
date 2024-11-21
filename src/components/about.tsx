import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Project from "./project";

export default function About() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="lg:w-[45%] max-w-4xl">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/profile.svg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-2xl font-bold">hi, i&apos;m atulya minz</h1>
            <p className="text-gray-400 text-sm">
              a full-stack and web3 developer, from India.
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                href="https://www.linkedin.com/in/atulya-minz-714022179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="hover:text-white cursor-pointer"
                  size={18}
                />
              </a>
              <a
                href="https://x.com/fxith_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  className="hover:text-white cursor-pointer"
                  size={18}
                />
              </a>
              <a
                href="https://github.com/AtulMinz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="hover:text-white cursor-pointer"
                  size={18}
                />
              </a>
              <a
                href="mailto:atulminz.jsr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  className="hover:text-white cursor-pointer"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>

        <section id="about" className="mt-8">
          <h2 className="text-lg font-bold">about me.</h2>
          <p className="mt-2">
            i&apos;m a full-stack and Web3 developer passionate about creating
            innovative and intuitive solutions. I love tackling challenges,
            building impactful projects, and collaborating to make a difference.
          </p>
          <div className="dark:bg-[#27272a] p-4 rounded-lg mt-4 bg-slate-200">
            <p>i&apos;m open to collabarate. feel free to:</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://x.com/fxith_dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="bg-black text-white px-4 py-2 rounded-md border">
                  Drop message on X
                </button>
              </a>
              <a
                href="AtulMinz-Resume.pdf"
                className="group flex items-center transition"
                download={true}
              >
                Resume
                <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mt-8">
          <h2 className="text-lg font-bold">achievements.</h2>

          <div className="mt-6 flex group">
            <div className="w-[2px] h-auto bg-gray-400 group-hover:bg-red-300 transition duration-300"></div>

            <div className="ml-4">
              <h3 className="font-semibold">
                Winner at MLH Web3Apps Hackathon
              </h3>
              <p className="text-sm text-gray-400">
                <a
                  href="https://devpost.com/software/flowfund"
                  className="underline dark:hover:text-white hover:text-black"
                >
                  devpost
                </a>
                (march)
              </p>
              <p className="dark:text-gray-400 mt-2 text-black">
                Bagged First prize at MLH Web3Apps Hackathon. Created{" "}
                <span className="underline">Flowfund</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex group">
            <div className="w-[2px] h-auto bg-gray-400 group-hover:bg-red-300 transition duration-300"></div>

            <div className="ml-4">
              <h3 className="font-semibold">
                Winner at MLH Web3Apps Hackathon
              </h3>
              <p className="text-sm text-gray-400">
                <a
                  href="https://devpost.com/software/taskflow-nl752t"
                  className="underline dark:hover:text-white hover:text-black"
                >
                  devpost
                </a>
                (april)
              </p>
              <p className="dark:text-gray-400 mt-2 text-black">
                Bagged First prize at MLH Web3Apps Hackathon. Created{" "}
                <span className="underline">TaskFlow</span>
              </p>
            </div>
          </div>
        </section>
        <section id="projects" className="mt-8">
          <Project />
        </section>
      </div>
    </main>
  );
}
