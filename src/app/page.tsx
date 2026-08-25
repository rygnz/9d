"use client"

import { AText } from "@/components/AText";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { CardText } from "@/components/CardText";
import { Header } from "@/components/Header";
import { ImageCard } from "@/components/ImageCard";
import { Page } from "@/components/MainPage";
import { MobileMenu } from "@/components/MobileMenu";
import { Navbar } from "@/components/Navbar";
import { PlayerCard } from "@/components/PlayerCard";
import { Tooltip } from "@/components/Tooltip";
import { ArrowUpRight, Ellipsis, Mail, Paperclip, Share2, Sun, Trees, User} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [mobileMenu,setMobileMenu] = useState<boolean>(false)
  const [dayPassed,setDayPassed] = useState<number>(0)
  useEffect(() => {
    const update = () => {
      const startDate = Date.UTC(2026,7)
      const differenceInMs = Date.now() - startDate
      const afterPassedNow = Math.max(0, Math.floor(differenceInMs / (1000 * 60 * 60 * 24)))
      setDayPassed(afterPassedNow)
    }
    update()
  },[])

  return (
    <main>
      <Navbar // Navigation Bar
        className={`
          select-none
          transition-all
          fixed
          top-0
          px-12
          sm:px-14
          lg:px-32
          md:px-12
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
                26 - 27
              </span>
            </a>
          </li>
        </ul>
        <ul
          className={`
            lg:gap-14
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
            <a
              href="https://www.instagram.com/nine.dominoo"
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
            </a>
          </Button>
        </ul>
      </Navbar>
      <MobileMenu // Mobile Menu if seeing in mobile phone
        footer="#Credits by rygenzz"
        title="Mobile Menu"
        closeButtonAction={() => {
          setMobileMenu(false)
        }}
        className={`
          ${!mobileMenu ? "translate-x-56" : ""}
          z-100
          md:hidden
          transition-all
          duration-150
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

      <Page // Page 1 Introduction
        id="home"
        className={`
          lg:flex-row
          lg:px-42
          md:px-24
          sm:px-12

          sm:py-34
          md:pt-32
          bg-transparent
          bg-linear-to-tl
          from-red-600/20
          to-black
        `}
      >
        <div
          className={`
            lg:max-w-2xl
          `}
        >
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
              md:text-xl
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
            Kelas dengan memori tanpa batas
          </span>
          <h1
            className={`
              lg:text-6xl
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
              md:text-xl
              flex
              justify-start
              items-center
              mt-6

              font-sans
              tracking-tight
              text-slate-100/65
            `}
          >
            Selamat datang di website IX - D | SMPN 13 MALANG, disinilah tempat kami menyimpan kenangan bersama, IX - D Solid sampai akhir, website khusus kelas IX - D yang dibuat oleh salah satu anggotanya. Website ini bukan Web resmi dari sekolah, melainkan dari salah satu anak didiknya.
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
            <a href="https://www.instagram.com/nine.dominoo">
              Kenalan Sama Kami
            </a>
          </Button>
        </div>
          <div
            className={`
              select-none
              rounded-lg
              bg-slate-950/80
              p-4
              w-max
              h-max
              mt-12
              -rotate-6
              shadow-2xl
              drop-shadow-2xl
            `}
          >
            <Image
              src="/src.public.photo_of_us.jpg"
              alt="Foto kelas IX-D"
              width={1280}
              height={560}
              className="rounded-md object-cover select-none max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-full"
              loading="eager"
            />
          </div>
      </Page>
      <Page // Page 2 Structure Class
        id="struktur_kelas"
        className={`
          lg:px-42
          lg:flex-col
          lg:pt-24
          bg-transparent
          bg-linear-to-bl
          from-red-600/20
          to-black

        `}
      >
        <Header
          sectionName="Stuktur kelas"
          textHeading={<span>Tiada kelas yang kondusif tanpa seorang <span className={`text-red-400 italic font-semibold`}>pemimpin</span> yang tegas.</span>}
          subtext="Kelas yang bersih, asri, asik, dan seru tidak tercipta begitu saja. Melainkan tumbuh dengan pemimpin yang jujur dan tegas. 32 Siswa berpartisipasi aktif dalam kelas ini."
        />
        <div // Player Card
          className={`
            md:scale-125
            md:gap-5
            md:py-27

            lg:flex-row
            lg:overflow-x-scroll
            lg:max-w-2xl
            lg:p-5
            lg:gap-12

            [&::-webkit-scrollbar]:h-1
            [&::-webkit-scrollbar-track]:bg-transparent 
            [&::-webkit-scrollbar-thumb]:bg-gray-800
            [&::-webkit-scrollbar-thumb]:rounded-md
            [&::-webkit-scrollbar-thumb]:drop-shadow-2xl

            flex
            flex-col
            justify-start
            items-center
            gap-4
            max-w-svh
          `}
        >
          <PlayerCard
            title="Siti Khoirun Ervin N, S.pd"
            subtitle="Wali Kelas IX - D"
            profileSize="lg"
            backgroundColor="bg-red-900"
            textColor="text-slate-100"
            className={`
              hover:outline-4
              hover:outline-[#f45748]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            title="M Rizki Putra Difa"
            subtitle="Ketua Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-l
              from-slate-200
              to-[#f45748]
              hover:outline-4
              hover:outline-[#f45748]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            title="Riski Kresna Wijayanto"
            subtitle="Wakil Ketua Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-r
              from-slate-100
              to-[#f45748]
              hover:outline-4
              hover:outline-[#f45748]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            title="Alya Dwi Oktavia"
            subtitle="Sekertaris 1 Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-l
              from-slate-100
              to-[#F4AC48]
              hover:outline-4
              hover:outline-[#F4AC48]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            tiktokUrl="https://www.tiktok.com/@genzzwae"
            instagramUrl="https://www.instagram.com/rygnzzncc"
            title="M Rafid Dwi Wicaksana"
            subtitle="Sekertaris 2 Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-r
              from-slate-100
              to-[#F4AC48]
              hover:outline-4
              hover:outline-[#F4AC48]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            title="n/a"
            subtitle="Bendahara 1 Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-l
              from-slate-100
              to-[#F44890]
              hover:outline-4
              hover:outline-[#F44890]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
          <PlayerCard
            title="n/a"
            subtitle="Bendahara 2 Kelas IX - D"
            profileSize="default"
            className={`
              bg-transparent
              bg-linear-to-r
              from-slate-100
              to-[#F44890]
              hover:outline-4
              hover:outline-[#F44890]
              hover:outline-offset-2
              transition-all
              duration-200
            `}
          />
        </div>
        <div // Footer Struktur
          className={`
            lg:-mt-24
            flex
            justify-center
            items-center
          `}
        >
          <span
            className={`
              text-slate-100/75
              font-fredoka
              tracking-wider
              text-sm
              mt-20
              text-center
            `}
          >
            Stuktur ini di dasarkan pemilihan bersama seluruh anggota kelas IX - D.
          </span>
        </div>
      </Page>
      <Page // Page 3 About us
        id="tentang_kami"
        className={`
          lg:px-42
          md:mt-52
          md:px-16
          bg-transparent
          bg-linear-to-bl
          from-black
          to-red-600/20
        `}
      >
        <div
          className={`
            flex
            flex-col
            gap-12
          `}
        >
          <Header
            sectionName="Tentang kami."
            textHeading={<span>Tak kenal maka tak <span className={`text-red-400 font-semibold italic`}>sayang</span>, maka ini <span className={`text-red-400 font-semibold italic`}>tentang kami</span>.</span>}
            subtext="Sebuah kisah yang tak pernah habis, tidak akan pernah ada jika kita tak saling mengenal satu sama lain, karena itu maka inilah tentang kami."
          />
          <div // Subtitle
            className={`
              
            `}
          >
            <span
              className={`
                md:text-2xl
                text-md
                text-slate-100
                font-sans
                text-shadow-2xs
              `}
            >
              Kami memiliki 32 anggota kelas IX - D, yang terdiri dari ketua, wakil, sekertaris, dan bendahara kelas. Kelas yang solid dan asik, sudah cukup lama waktu yang kita lewati, semoga kita terus mengenal. Kami memiliki instagram kelas yang cukup aktif. datanglah ke kelas kami jika kamu mau :P
            </span>
          </div>
          <div // Card
            className={`
              lg:flex-row
              md:scale-150
              md:mt-32
              flex
              flex-col
              gap-6
              justify-center
              items-center
            `}
          >
            <Card
              className={`
                flex
                bg-black
                gap-3
                text-slate-200
                border-2
                border-slate-100/20
              `}
            >
              <div
                className={`
                  rounded-xl
                  w-12
                  h-12
                  bg-slate-200
                  text-slate-900
                  flex
                  justify-center
                  items-center
                  drop-shadow-2xl
                `}
              >
                <span>32</span>
              </div>
              <div>
                <span
                  className={`
                    text-slate-200
                    drop-shadow-2xl
                    font-fredoka
                    font-semi
                  `}
                >
                  Jumlah anggota IX - D
                </span>
              </div>
            </Card>
            <Card
              className={`
                flex
                bg-slate-200
                gap-3
                border-2
                border-slate-900/20
              `}
            >
              <div>
                <span
                  className={`
                    text-black
                    drop-shadow-2xl
                    font-fredoka
                    font-semi
                  `}
                >
                  Jumlah hari yang di lewati
                </span>
              </div>
              <Tooltip
                position="top"
                text="Jumlah Hari belum tentu benar."
              >
                <div
                  className={`
                    rounded-xl
                    w-12
                    h-12
                    bg-black
                    flex
                    justify-center
                    items-center
                    drop-shadow-2xl
                  `}
                >
                  <span>
                    {dayPassed}
                  </span>
                </div>
              </Tooltip>
            </Card>
            <Card
              className={`
                flex
                bg-black
                gap-3
                border-2
                border-slate-100/20
              `}
            >
              <div
                className={`
                  rounded-xl
                  w-12
                  h-12
                  bg-slate-200
                  text-black
                  flex
                  justify-center
                  items-center
                  drop-shadow-2xl
                `}
              >
                <span>2026</span>
              </div>
              <div>
                <span
                  className={`
                    text-slate-200
                    drop-shadow-2xl
                    font-fredoka
                    font-semi
                  `}
                >
                  Pertemuan Pertama
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Page>
      <Page // Page 4 Our story
        id="cerita_kita"
        backgroundColor="bg-black"
        className={`
          lg:pt-24
          lg:px-32
          bg-transparent
          bg-linear-to-br
          from-red-600/20
          to-black
        `}
      >
        <Header
          sectionName="Cerita Kita."
          subtext="Sebuah cerita yang penuh dengan cerita dan kenangan yang takkan terlupakan oleh kami."
          textHeading={<span>Setiap kelas pasti memiliki <span className="text-red-400 italic font-semibold">cerita</span> masing masing, dan mereka memiliki kenangan yang dalam.</span>}
        />
        <div // Card
          className={`
            lg:scale-95
            lg:gap-17
            lg:flex-row
            lg:mt-24
            sm:pb-12
            sm:scale-125
            sm:mt-54
            sm:gap-4
            flex
            flex-col
            gap-12
            justify-center
            items-center
            scale-85
            -mt-12
          `}
        >
          <ImageCard
            source="/src.public.juara_satu_lomba_bulutangkis.jpg"
            textColor="text-white"
            height={120}
            width={120}
            title="Lomba Bulutangkis Putri"
            subtitle="Kelas kami memenangkan lomba bulutangkis putri dengan juara 1"
            animation={true}
            className={`
              bg-red-950/60
              backdrop-blur-2xl
              shadow-2xl
            `}
          />
          <ImageCard
            source="/src.public.photo_of_us_arema.jpg"
            textColor="text-white"
            height={250}
            width={250}
            title="Foto Bersama Arema"
            subtitle="foto bareng satu kelas pakai baju arema."
            animation={true}
            className={`
              bg-red-950/60
              backdrop-blur-2xl
              shadow-2xl
            `}
          />
          <ImageCard
            source="/src.public.lomba_kebersihan.jpg"
            textColor="text-white"
            height={250}
            width={250}
            title="Lomba Kebersihan kelas"
            subtitle="footage asli kita kerja membersihkan kelas"
            animation={true}
            className={`
              bg-red-950/60
              backdrop-blur-2xl
              shadow-2xl
            `}
          />
        </div>
      </Page>
      <Page // Page 5 Art
        id="karya"
        className={`
          lg:mt-52
          md:mt-24
          bg-linear-to-b
          bg-transparent
          from-black
          to-red-600/20
        `}
      >
        <Header
          sectionName="Karya"
          textHeading={<span>Sebuah <span className="text-red-400 font-semibold italic">karya tangan</span> yang takkan pernah ter luapakan</span>}
          subtext="Sebuah karya tangan anggota IX - D yang sangat indah dan keren."
        />
        <div // Card
          className={`
            lg:flex-row
            lg:gap-24
            lg:scale-125
            md:scale-90
            md:flex-row
            justify-center
            items-center
            flex
            flex-col
            gap-6
          `}
        >
          <CardText
            backgroundPrimaryColor="bg-red-400"
            backgroundSecondaryColor="bg-red-900"
            icon= {<Sun/>}
            subtitle="Karya majalah dinding yang merupakan hasil tangan, dan berisi informasi penting dari kelas IX - D"
            title="Madding"
            upperTitle="kelengkapan"
          />
          <CardText
            backgroundPrimaryColor="bg-red-300"
            backgroundSecondaryColor="bg-red-200"
            textColor="text-black"
            icon= {<Trees/>}
            subtitle="Hasil perawatan taman depan kelas yang asri, dan sangatlah indah."
            title="Taman"
            upperTitle="kanyamanan"
          />
          <CardText
            backgroundPrimaryColor="bg-red-200"
            backgroundSecondaryColor="bg-red-300"
            textColor="text-black"
            icon= {<Sun/>}
            subtitle="Karya seni hasil tangan yang tercipta dengan ide ide kreatif dari anggota IX - D"
            title="Mural"
            upperTitle="keindahan"
          />
        </div>
        <div // Word
          className={`
            w-full
            justify-start
          `}
        >
          <span
            className={`
              text-slate-100/25
              select-none
            `}
          >
            People do come and go, but not for us.
          </span>
        </div>
      </Page>

      <footer // Footer
        className={`
          lg:flex-col
          md:flex-row
          bg-black
          w-full
          min-h-96
          h-auto
          flex
          flex-col
        `}
      >
        <div
          className={`
            lg:flex-row
            p-9
            w-full
            flex
            flex-col
            gap-12
          `}
        >
          <div
            className={`
              flex
              flex-col
            `}
          >
            <span
              className={`
                text-4xl
                font-sans
                tracking-wide
                text-white
              `}
            >
              Mari membuat
            </span>
            <span
              className={`
                text-4xl
                font-sans
                tracking-wide
                text-red-400
                font-semibold
                italic
              `}
            >
              Cerita baru.
            </span>
          </div>
          <div // Used tool
            className={`
              w-full
              h-auto
              flex
              flex-col
              gap-4
            `}
          >
            <span
              className={`
                text-xl
                uppercase
                text-slate-100
              `}
            >
              Alat yang di gunakan
            </span>
            <ul
              className={`
                text-md
                gap-2
                text-slate-100/70
              `}
            >
              <li>
                <a href="https://nextjs.org/" className="hover:text-slate-50 transition-all">Next JS</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:text-slate-50 transition-all">Tailwind CSS</a>
              </li>
              <li>
                <a href="https://lucide.dev/" className="hover:text-slate-50 transition-all">Lucide React</a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org/" className="hover:text-slate-50 transition-all">TypeScript</a>
              </li>
              <li>
                <a href="https://react.dev/" className="hover:text-slate-50 transition-all">React TypeScript</a>
              </li>
              <li>
                <a href="https://vercel.com/home" className="hover:text-slate-50 transition-all">Vercel</a>
              </li>
            </ul>
          </div>
          <div // Credits
            className={`
              w-full
              h-auto
              flex
              flex-col
              gap-4
            `}
          >
            <span
              className={`
                text-xl
                uppercase
                text-slate-100
              `}
            >
              Orang yg terlibat.
            </span>
            <ul
              className={`
                text-md
                gap-2
                text-slate-100/70
              `}
            >
              <li>
                <span className="text-slate-100/90">Developer : </span><a href="https://www.instagram.com/rygnzzncc/">M Rafid Dwi Wicaksana</a>
              </li>
              <li>
                <span className="text-slate-100/90">Tester 1: </span><a href="#">not defined yet</a>
              </li>
              <li>
                <span className="text-slate-100/90">Tester 2: </span><a href="#">not defined yet</a>
              </li>
              <li>
                <span className="text-slate-100/90">Member : </span>Seluruh anggota IX-D
              </li>
            </ul>
          </div>
          <div // About school
            className={`
              w-full
              h-auto
              flex
              flex-col
              gap-4
            `}
          >
            <span
              className={`
                text-xl
                uppercase
                text-slate-100
              `}
            >
              Tentang sekolah kita
            </span>
            <ul
              className={`
                text-md
                gap-2
                text-slate-100/70
              `}
            >
              <li>
                <span>
                  Jawa timur
                </span>
              </li>
              <li>
                <span>
                  SMPN 13 Kota Malang
                </span>
              </li>
              <li>
                <span>
                  Lowokwaru, Dinoyo
                </span>
              </li>
              <li>
                <a href="https://smpn13malang.sch.id/" className="hover:text-slate-50 transition-all">School site</a>
              </li>
            </ul>
          </div>
          <div // Social Media
            className={`
              w-full
              h-auto
              flex
              flex-col
              gap-4
            `}
          >
            <span
              className={`
                text-xl
                uppercase
                text-slate-100
              `}
            >
              Media sosial
            </span>
            <ul
              className={`
                text-md
                gap-2
                text-slate-100/70
              `}
            >
              <li>
                <a href="https://www.instagram.com/nine.dominoo" className="hover:text-slate-50 transition-all">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div // About me
          className={`
            bg-black
            border-t-2
            border-t-slate-100/20
            w-full
            h-auto
            min-h-16
            justify-start
            items-center
            flex
            flex-col
            p-6

            gap-4
          `}
        >
          <span
            className={`
              w-full
              text-slate-100/80
              font-fredoka
              select-none
            `}
          >
            &copy; Rygenzz 2026 - 2027 GALAS IX-D
          </span>
          <div
            className={`
              w-full
              flex
              gap-5
              justify-start
              items-center
            `}
          >
            <Tooltip
              position="top"
              text="Github"
            >
              <a href="https://github.com/rygnz">
                <User/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="Instagram"
            >
              <a href="https://www.instagram.com/rygnzzncc/">
                <Share2/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="Tiktok"
            >
              <a href="https://www.tiktok.com/@genzzwae">
                <Paperclip/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="anggatakp@gmail.com"
            >
              <span>
                <Mail/>
              </span>
            </Tooltip>
          </div>
          <span
            className={`
              w-full
              select-none
              text-slate-50/70
              font-fredoka
            `}
          >
            Semua yang ada di website ini hanya diperuntukkan belajar, tidak lebih.
          </span>
        </div>
      </footer>
    </main>
  );
}