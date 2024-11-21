const projects = [
  {
    name: "BuildTrust",
    description: [
      "Built a Web3 app to scale trust in professional relationships using blockchain-based 'proofs' and an on-chain reputation graph for verifiable credibility.",
      "Integrated Farcaster to enable users to create attestations directly from their feed by tagging user IDs, simplifying relationship tracking.",
      "Developed an MVP showcasing how the app fosters collaboration by helping users identify and leverage trusted connections in the Web3 ecosystem.",
    ],
    github: "https://github.com/AtulMinz/build-trust",
    live: "https://build-trust.vercel.app/",
    status: "📦completed",
  },
  {
    name: "FlowFund",
    description: [
      "Managed the development and implementation of Flowfund, a decentralized crowdfunding platform leveraging the Flow blockchain",
      "Designed and optimized a user-friendly interface for seamless campaign funding using Flow tokens, ensuring a smooth user experience.",
    ],
    github: "https://github.com/AtulMinz/flowfund",
    live: "https://flowfund.vercel.app/",
    status: "📦completed",
  },
  {
    name: "Novacast",
    description: [
      "Pioneered the development of Novacast, a cutting-edge streaming platform allowing users to broadcast live content directly through their web browsers.",
      "Integrated web sockets technology to facilitate real-time communication and seamless streaming experiences for Novacasters.",
      "Utilized ffmpeg to enable the conversion of media streams to RTMP (Real-Time Messaging Protocol), ensuring efficient and reliable transmission of live content on the platform",
    ],
    github: "https://github.com/AtulMinz/novacast",
    status: "📦completed",
  },
];

export default function Project() {
  return (
    <>
      <h2 className="text-lg font-bold">projects.</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mt-6 flex group rounded-lg transition duration-300"
        >
          {/* Vertical Indicator */}
          <div className="w-[2px] h-auto bg-gray-400 group-hover:bg-red-300 transition duration-300"></div>

          {/* Project Content */}
          <div className="ml-4">
            {/* Title and Status */}
            <h3 className="font-semibold flex items-center">
              {project.name}
              <span className="ml-3 dark:bg-slate-500 text-sm px-2 py-1 rounded-sm bg-slate-600 text-white">
                {project.status}
              </span>
            </h3>

            {/* Links */}
            <p className="text-sm text-gray-400 space-x-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline dark:hover:text-white hover:text-black"
              >
                source code
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline dark:hover:text-white hover:text-black"
                >
                  live preview
                  <span className="ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              ) : (
                <span></span>
              )}
            </p>

            {/* Description */}
            <ul className="list-disc pl-5 mt-4 text-gray-500 dark:text-gray-400">
              {project.description.map((point, idx) => (
                <li key={idx} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <br></br>
        </div>
      ))}
    </>
  );
}
