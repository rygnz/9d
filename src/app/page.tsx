"use client"

import { AText } from "@/components/AText";
import { Button } from "@/components/Button";
import { Page } from "@/components/MainPage";
import { MobileMenu } from "@/components/MobileMenu";
import { Navbar } from "@/components/Navbar";
import { ArrowUpRight, Ellipsis} from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [mobileMenu,setMobileMenu] = useState<boolean>(false)

  return (
    <main>
      <Navbar
        className={`
          ${mobileMenu ? "opacity-85" : ""}
          transition-all
        `}
      >
        <ul
          className={`
            flex
            justify-start
            items-center
          `}
        >
          <li
            className={`
              font-fredoka
              uppercase
            `}
          >
            <a href="#home">
              <span>
                IX - D
              </span>
              <span
                className={`
                  text-red-400
                  mx-1
                `}
              >
                /
              </span>
              <span>
                2026 - 2027
              </span>
            </a>
          </li>
        </ul>
        <ul
          className={`
            md:flex
            hidden
            justify-center
            items-center
            gap-5
          `}
        >
          <li>
            <a href="#home"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#struktur_kelas"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              Struktur kelas
            </a>
          </li>
          <li>
            <a href="#tentang_kami"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              Tentang kami
            </a>
          </li>
          <li>
            <a href="#cerita_kita"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              Cerita kita
            </a>
          </li>
          <li>
            <a href="#karya"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              Karya
            </a>
          </li>
        </ul>
        <ul
          className={`
            flex
            justify-center
            items-center
            gap-3 
          `}
        >
          <Button
            backgroundColor="bg-transparent"
            textColor="text-slate-100"
            className={`
              md:hidden  
            `}
            onClick={() => {
              setMobileMenu(prev => !prev)
            }}
          >
            <Ellipsis/>
          </Button>
          <Button
            backgroundColor="bg-transparent"
            textColor="text-slate-100"
            variant="borderedFullRound"
            className={`
              group
            `}
          >
            <span
              className={`
                justify-center
                items-center
                flex
                gap-1
              `}
            >
              Say hi.
              <ArrowUpRight
                className={`
                  group-hover:rotate-45
                  group-hover:scale-90
                  group-active:translate-x-2
                  transition-all
                  duration-75
                `}
              />
            </span>
          </Button>
        </ul>
      </Navbar>
      <MobileMenu
        footer="#Credits by rygenzz"
        title="Mobile Menu"
        closeButtonAction={() => {
          setMobileMenu(false)
        }}
        className={`
          ${!mobileMenu ? "translate-x-56" : ""}
          transition-all
          duration-150
          md:hidden
        `}
      >
        <div
          className={`
            flex
            flex-col
            gap-2
          `}
        >
          <AText
            href="#home"
            clickAction={() => {
              setMobileMenu(false)
            }}
          >
            Home
          </AText>
          <AText
            href="#struktur_kelas"
            clickAction={() => {
              setMobileMenu(false)
            }}
          >
            Struktur kelas
          </AText>
          <AText
            href="#tentang_kami"
            clickAction={() => {
              setMobileMenu(false)
            }}
          >
            Tentang kami
          </AText>
          <AText
            href="#cerita_kita"
            clickAction={() => {
              setMobileMenu(false)
            }}
          >
            Cerita Kita
          </AText>
          <AText
            href="#karya"
            clickAction={() => {
              setMobileMenu(false)
            }}
          >
            Karya
          </AText>
        </div>
      </MobileMenu>
      <Page
        className={`
          md:flex
          bg-transparent
          bg-linear-to-tl
          from-red-600/20
          to-black
        `}
      >
        <div>
          <span
            className={`
              flex
              justify-start
              items-center
              gap-2
              mb-3

              font-fredoka
              text-sm
              tracking-wide
              text-slate-50/85
            `}
          >
            <div
              className={`
                flex
                justify-center
                items-center
                bg-red-500
                w-5
                h-0.5  
              `}
            />
            A class with limitless memories
          </span>
          <h1
            className={`
              text-5xl
              font-sans
              tracking-tight
              text-slate-100
            `}
          >
            Kami datang untuk <span className="text-red-400 font-semibold italic hover:text-red-800 transition-all">tumbuh</span> dan <span className="text-red-400 font-semibold italic hover:text-red-800 transition-all">berkembang</span> bersama.
          </h1>
          <span
            className={`
              flex
              justify-start
              items-center
              mt-6

              font-sans
              tracking-tight
              text-slate-100/65
            `}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui corrupti veritatis nam ea nesciunt distinctio aliquam delectus temporibus dolor voluptatem! Voluptatem, fugiat architecto asperiores iste ipsam repellat laborum quas necessitatibus!
          </span>
          <Button
            backgroundColor="bg-slate-100"
            textColor="text-slate-900"
            variant="primaryFullRound"
            animation={true}
            className={`
              hover:rotate-2
              active:rotate-0
              font-semibold
              mt-5
            `}
          >
            <span>
              Kenalan Sama Kami
            </span>
          </Button>
          <div
            className={`
              rounded-lg
              bg-slate-950/80
              p-4
              mt-12
              -rotate-6
              shadow-2xl
              drop-shadow-2xl
            `}
          >
            <Image
              src="/src.public.photo_of_us.jpg"
              alt="Foto kelas IX-D"
              width={600}
              height={400}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </Page>
      <Page
        backgroundColor="bg-white"
      >

      </Page>
    </main>
  );
}