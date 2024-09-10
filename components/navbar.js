import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    // "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-charcoalGrey dark:text-gray-100">
                    <span>
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-12 rounded fill-roseQuartz text-charcoalGrey "
                      >
                        <path d="M0 0h512v512H0z" />
                        <path
                          d="M166.9 448.7c-7.8 0-14.19-1.64-19.14-4.95-4.9-3.3-8.52-8.2-10.85-14.7-2.34-6.49-3.5-14.52-3.5-24.1v-68.78c0-8.66 1.13-16.06 3.41-22.21 2.28-6.16 5.9-10.88 10.85-14.19 4.96-3.3 11.45-4.95 19.49-4.95 6.03 0 11.13.94 15.3 2.81a24.59 24.59 0 0 1 10.07 8.2c2.57 3.54 4.42 7.87 5.56 13a75.88 75.88 0 0 1 1.8 17.34v68.79c0 9.57-1.15 17.6-3.42 24.1-2.23 6.49-5.76 11.39-10.6 14.7-4.84 3.3-11.17 4.95-18.97 4.95Zm0-19.81c2.85 0 4.98-.86 6.4-2.57 1.43-1.7 2.37-4.3 2.83-7.77.51-3.54.77-7.98.77-13.34v-70.06c0-6.55-.63-11.6-1.88-15.13-1.2-3.59-3.82-5.38-7.86-5.38-4.16 0-6.98 1.74-8.46 5.21-1.48 3.42-2.22 8.49-2.22 15.21v70.15c0 5.47.22 9.97.68 13.5.51 3.48 1.5 6.05 2.99 7.7 1.54 1.65 3.79 2.47 6.75 2.47Zm92.45 19.82c-7.8 0-14.19-1.65-19.14-4.96-4.9-3.3-8.52-8.2-10.85-14.7-2.34-6.49-3.5-14.52-3.5-24.1v-68.78c0-8.66 1.13-16.06 3.41-22.21 2.28-6.16 5.9-10.88 10.85-14.19 4.96-3.3 11.45-4.95 19.49-4.95 6.03 0 11.13.94 15.3 2.81a24.59 24.59 0 0 1 10.07 8.2c2.57 3.54 4.42 7.87 5.56 13a75.88 75.88 0 0 1 1.8 17.34v68.79c0 9.57-1.15 17.6-3.42 24.1-2.23 6.49-5.76 11.39-10.6 14.7-4.84 3.3-11.17 4.95-18.97 4.95Zm0-19.82c2.85 0 4.98-.86 6.4-2.57 1.43-1.7 2.37-4.3 2.83-7.77.51-3.54.77-7.98.77-13.34v-70.06c0-6.55-.63-11.6-1.88-15.13-1.2-3.59-3.82-5.38-7.87-5.38-4.15 0-6.97 1.74-8.45 5.21-1.49 3.42-2.23 8.49-2.23 15.21v70.15c0 5.47.23 9.97.69 13.5.51 3.48 1.5 6.05 2.99 7.7 1.54 1.65 3.79 2.47 6.75 2.47ZM311.29 447l21.45-150.4H363L385.81 447h-21.37l-3.58-26.83h-24.27L333.34 447H311.3Zm27.52-45.2h19.65l-10.08-75.54h-.34l-9.23 75.54Z"
                          fill="currentColor"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="20"
                          strokeLinecap="round"
                          d="M59 374.5h37.05M431 348l28 27m-28 27 28-27m0 0h-57.5"
                        />
                        <path
                          d="m260.1 192.45-1.46-58.18c66.9-36.36 14.54-120.73-43.64-84.36M61 277c153.12-125.99 240.95-124.68 402 0H61Z"
                          stroke="currentColor"
                          strokeWidth="20"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="uppercase font-brand">
                      One Outfit Ahead
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:midnightBlue focus:midnightBlue focus:bg-roseQuartz focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:midnightBlue focus:midnightBlue focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-charcoalGrey font-medium bg-roseQuartz rounded-md lg:ml-5"
                    >
                      Download now
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:midnightBlue focus:midnightBlue focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 font-medium text-charcoalGrey bg-roseQuartz rounded-md md:ml-5"
          >
            Download now
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
