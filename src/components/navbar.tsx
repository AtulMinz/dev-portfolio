import { ModeToggle } from "./theme-switch";

const navLinks = [
  { name: "about", path: "#about" },
  { name: "achievements", path: "#achievements" },
  { name: "projects", path: "#projects" },
  { name: "skills", path: "#skills" },
];

export function NavBar() {
  return (
    <nav className="flex justify-center">
      <div className="lg:w-[50vw] mt-3 hidden sm:block">
        <div className="flex lg:justify-end">
          <div>
            {navLinks.map((link, key) => (
              <a
                className="dark:text-slate-300 hover:text-white transition duration-300 ease-in-out cursor-pointer text-base font-medium mr-4"
                key={key}
                href={link.path}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-1 ml-[-9]">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
