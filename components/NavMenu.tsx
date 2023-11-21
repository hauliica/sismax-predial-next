import {AcunaLogo} from "@/assets/AcunaLogo";
import Link from "next/link";
import {Button} from "./ui/Button";

function NavMenu() {
  return (
    <header className="bg-white w-full border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <AcunaLogo className="h-10 w-auto"/>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
            <Link href="#"
                  className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</Link>
            <Link href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</Link>
            <Link href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Services</Link>
            <Link href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="sm"
                    className="text-orange-600 border-orange-600 border bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground">¡Paga
              Ahora!</Button>
            <Button size="sm" className="ml-4">Solicita tu Cuenta-Folio</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;