import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={200}
              height={200}
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
              Product
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              ></svg>
            </button>
          </div>

          <a href="#" className="text-sm/6 font-semibold text-white">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-white">
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
