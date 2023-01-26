import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import avatar from "../public/AvatarMaker2.svg";
import arnoldclark from "../public/arnoldclark.jpg";
import coxauto from "../public/coxauto.png";
import aggreko from "../public/aggreko.png";
import recapi from "../public/recapi-mobile.png";
import cocktail from "../public/cocktail-mobile.png";
import messandmore from "../public/messandmore-mobile.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>John Mailey - portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xlr dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                  title={darkMode ? "Light mode" : "Dark mode"}
                />
              </li>
              <li>
                <a
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/johnmailey_resume.docx"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
              John Mailey
            </h2>
            <h3 className="text-2xl md:text-3xl py-2 dark:text-white">
              Web developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              I am a highly skilled web developer with experience in creating
              visually appealing and user-friendly websites and web
              applications.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/john-mailey-25664558/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl flex justify-center text-gray-600"
          >
            <AiFillLinkedin />
          </a>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:w-96 md:h-96 mt-20 overflow-hidden">
            <Image src={avatar} fill alt="profile picture" priority />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Me</h3>
            <p className="leading-8 py-2 mb-10 text-gray-800  md:text-xl max-w-xl dark:text-white">
              I am proficient in <span className="text-teal-500">HTML</span>,{" "}
              <span className="text-teal-500">CSS</span>,{" "}
              <span className="text-teal-500">Javascript</span> and{" "}
              <span className="text-teal-500">Typescript</span>, and have
              experience using frameworks such as{" "}
              <span className="text-teal-500">React</span>. I have a strong
              understanding of{" "}
              <span className="text-teal-500">Web design principles</span> and
              can effectively translate design mockups and wire frames into
              fully functional responsive websites.
            </p>
          </div>
          <h3 className="text-3xl py-1 mb-3 dark:text-white">My work</h3>
          <div className="lg:flex gap-10">
            <div className="text-center border shadow-lg p-10 rounded-xl mb-10 flex-1 dark:bg-white ">
              <Image
                src={arnoldclark}
                width={100}
                height={100}
                className="inline"
                alt="Arnold Clark logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Arnold Clark</h3>
              <p className="py-2">Frontend developer</p>
              <h4 className="py-4 text-teal-600">The tech stack I used</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Cypress</p>
            </div>

            <div className="text-center border shadow-lg p-10 rounded-xl mb-10 flex-1 dark:bg-white">
              <Image
                src={coxauto}
                width={100}
                height={100}
                className="inline"
                alt="Cox automotive logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Cox Automotive</h3>
              <p className="py-2">Senior Frontend developer</p>
              <h4 className="py-4 text-teal-600">The tech stack I used</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Typescript</p>
            </div>

            <div className="text-center border shadow-lg p-10 rounded-xl mb-10 flex-1 dark:bg-white">
              <Image
                src={aggreko}
                width="auto"
                height={100}
                className="inline"
                alt="Aggreko logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Aggreko</h3>
              <p className="py-2">Developer and test engineer</p>
              <h4 className="py-4 text-teal-600">The tech stack I used</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Cypress</p>
              <p className="text-gray-800 py-1">Puppeteer</p>
              <p className="text-gray-800 py-1">AWS</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-white mb-3">Portfolio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="text-center shadow-lg border p-4 rounded-xl dark:bg-white">
              <div class="relative  h-[500px] mx-auto">
                <Image src={recapi} className="object-contain" fill />
              </div>
              <Link
                href="https://recapi.co.uk"
                className="text-lg font-medium pt-8 pb-2 block underline underline-offset-4"
              >
                RECAPI
              </Link>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                recapi is a place to store and share your favorite recipes.
                Recapi was created with{" "}
                <span className="text-teal-500">NextJS</span>,{" "}
                <span className="text-teal-500">Typescript</span>,
                <span className="text-teal-500"> Auth0</span>,{" "}
                <span className="text-teal-500"> Cloudinary</span> and
                <span className="text-teal-500"> Prisma</span>. It uses googles
                rich text to give users the best chance of there recipes being
                discovered on google and allows the recipes to be followed on
                devices like google home.
              </p>
            </div>

            <div className="text-center shadow-lg border p-4 rounded-xl dark:bg-white ">
              <div className="relative  h-[500px] mx-auto">
                <Image src={cocktail} className="object-contain" fill />
              </div>
              <Link
                href="https://cocktails-jmailey.vercel.app/"
                className="text-lg font-medium pt-8 pb-2 block underline underline-offset-4"
              >
                COCKTAIL
              </Link>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                Cocktail was made in just one day after I discovered{" "}
                <span className="text-teal-500">thecocktailDB</span>. It is made
                with
                <span className="text-teal-500"> React</span>,{" "}
                <span className="text-teal-500">Typescript</span> and
                <span className="text-teal-500"> react-query</span>. I styled it
                based on a movie poster for the movie Cocktail and its a great
                place to go if you want recipes for cocktails. You can also
                search by ingredient if you want to make a cocktail based on
                what you have available.
              </p>
            </div>

            <div className="text-center shadow-lg border p-4 rounded-xl dark:bg-white ">
              <div className="">
                <div className="relative h-[500px] mx-auto">
                  <Image src={messandmore} className="object-contain" fill />
                </div>
                <Link
                  href="https://messandmore.vercel.app/"
                  className="text-lg font-medium pt-8 pb-2 block underline underline-offset-4"
                >
                  MESS AND MORE
                </Link>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                  Mess and more was made made for a client that is doing baby
                  and toddler morning classes. It is made with
                  <span className="text-teal-500"> NextJS</span>,{" "}
                  <span className="text-teal-500">Tailwind</span> and integrates
                  their BookingWhen form.
                </p>
              </div>
            </div>
          </div>

          <div className="p-10 py-96 text-center dark:text-white">
            <h3 className="text-xl md:text-3xl py-2">
              If you would like to hire me please email me
            </h3>
            <h3 className="text-xl md:text-3xl py-2">johnmmailey@gmail.com</h3>

            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Thanks for your time
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
