export default function contactMe() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-violet-900 to-orange-900 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit details to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            name="email"
            action="https://getform.io/f/pbmzzpoa"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none font-mono"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none font-mono"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-[1px] rounded-md text-white focus:outline-none font-mono"
            ></textarea>
          </form>
        </div>
        <div className="lg:ml-[40rem] sm:mx-auto">
          <button
            className="text-white bg-gradient-to-b from-indigo-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-105 duration-300"
            type="submit"
          >
            Let&apos;s talk
          </button>
        </div>
      </div>
    </div>
  );
}
