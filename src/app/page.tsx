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
import { ArrowUpRight, Ellipsis, Globe, Sun, Trees} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Footers } from "../components/Footer";
import { FooterSection } from "@/components/FooterSection";
import { en_us, id } from "./lang/lang";
import { motion } from "motion/react";
import { TypingText } from "@/components/TypingText";


export default function Home() {
  const [mobileMenu,setMobileMenu] = useState<boolean>(false)
  const [dayPassed,setDayPassed] = useState<number>(0)
  const [lang,setLang] = useState<"en"|"id">("en")
  const [langCooldown,setLangCooldown] = useState<boolean>(false)


  useEffect(() => {
    const update = () => {
      const startDate = Date.UTC(2026,7)
      const differenceInMs = Date.now() - startDate
      const afterPassedNow = Math.max(0, Math.floor(differenceInMs / (1000 * 60 * 60 * 24)))
      setDayPassed(afterPassedNow)

      setLang("en")
      setLangCooldown(true)
    }
    update()
  },[])

  return (
    <main>
      <Navbar // Navigation Bar // Transleted
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
            <a href="#home"
              className={`
                text-white
              `}
            >
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
              <span
                className={`
                  text-white
                `}
              >
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
              {lang == "en" ? en_us.navbar.home : id.navbar.home}
            </a>
          </li>
          <li>
            <a href="#struktur_kelas"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              {lang == "en" ? en_us.navbar.stucture : id.navbar.stucture}
            </a>
          </li>
          <li>
            <a href="#tentang_kami"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              {lang == "en" ? en_us.navbar.about_us : id.navbar.about_us}
            </a>
          </li>
          <li>
            <a href="#cerita_kita"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              {lang == "en" ? en_us.navbar.our_stories : id.navbar.our_stories}
            </a>
          </li>
          <li>
            <a href="#karya"
              className={`
                font-fredoka
                tracking-tighter
              `}
            >
              {lang == "en" ? en_us.navbar.art : id.navbar.art}
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
              {lang == "en" ? en_us.navbar.say_hi : id.navbar.say_hi}
              <ArrowUpRight/>
            </a>
          </Button>
          <Button
            backgroundColor="bg-transparent"
            textColor="text-slate-50"
            variant="none"
            onClick={() => {
              setLangCooldown(true)
              if(langCooldown) {
              } else {
                if(lang == "en") {
                  setLang("id")
                } else if (lang == "id") {
                  setLang("en")
                }
              }
            }}
            className={`
              ${langCooldown ? "opacity-50 hover:cursor-not-allowed" : ""}
            `}
          >
            <Tooltip
              position="bottom"
              text={lang == "en" ? en_us.navbar.change_lan : id.navbar.change_lan}
            >
              <span>
                <Globe/>
              </span>
            </Tooltip>
          </Button>
        </ul>
      </Navbar>
      <MobileMenu // Mobile Menu if seing in mobile phone // Transleted
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
            className={`
              text-white
            `}
          >
            {lang == "en" ? en_us.navbar.home : id.navbar.home}
          </AText>
          <AText
            href="#struktur_kelas"
            clickAction={() => {
              setMobileMenu(false)
            }}
            className={`
              text-white
            `}
          >
            {lang == "en" ? en_us.navbar.stucture : id.navbar.stucture}
          </AText>
          <AText
            href="#tentang_kami"
            clickAction={() => {
              setMobileMenu(false)
            }}
            className={`
              text-white
            `}
          >
            {lang == "en" ? en_us.navbar.about_us : id.navbar.about_us}
          </AText>
          <AText
            href="#cerita_kita"
            clickAction={() => {
              setMobileMenu(false)
            }}
            className={`
              text-white
            `}
          >
            {lang == "en" ? en_us.navbar.our_stories : id.navbar.our_stories}
          </AText>
          <AText
            href="#karya"
            clickAction={() => {
              setMobileMenu(false)
            }}
            className={`
              text-white
            `}
          >
            {lang == "en" ? en_us.navbar.art : id.navbar.art}
          </AText>
        </div>
      </MobileMenu>

      <Page // Page 1 Introduction // Transleted
        id="home"
        className={`
          lg:flex-row
          lg:px-42
          md:px-24
          sm:px-12

          sm:py-34
          md:pt-32
          dark:bg-transparent
          bg-slate-950
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
          <motion.span
            initial={{
              opacity:0,
            }}
            animate={{
              opacity:1,
            }}
            transition={{
              duration:2,
              ease : "easeOut"
            }}
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
            {lang == "en" ? en_us.page_introduction.title.upper_text : id.page_introduction.title.upper_text}
          </motion.span>
          <motion.h1
            initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:3,
              ease:"easeOut"
            }}
            className={`
              lg:text-6xl
              text-5xl
              font-sans
              tracking-tight
              text-slate-100
            `}
          >
            {lang == "en" ? en_us.page_introduction.title.heading.text1 : id.page_introduction.title.heading.text1}<span className="text-red-400 font-semibold italic hover:text-red-800 transition-all">{lang == "en" ? en_us.page_introduction.title.heading.text2 : id.page_introduction.title.heading.text2}</span> {lang == "en" ? en_us.page_introduction.title.heading.text3 : id.page_introduction.title.heading.text3} <span className="text-red-400 font-semibold italic hover:text-red-800 transition-all">{lang == "en" ? en_us.page_introduction.title.heading.text4 : id.page_introduction.title.heading.text4}</span> {lang == "en" ? en_us.page_introduction.title.heading.text5 : id.page_introduction.title.heading.text5}
          </motion.h1>
          <motion.span
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              duration:1.2,
              ease:"easeOut",
            }}
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
            <TypingText
              text={lang == "en" ? en_us.page_introduction.title.subtitle : id.page_introduction.title.subtitle}
              ms={15}
              func={(e) => {setLangCooldown(e)}}
            />
          </motion.span>
          <motion.a href="https://www.instagram.com/nine.dominoo"
            initial={{
              opacity:0,
              scale:0
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            transition={{
              duration:0.6,
              ease:"backOut",
            }}
            whileHover={{
              rotate:3,
              scale:1.05
            }}
            className={`
              flex
              justify-center
              items-center
              w-max
              h-max
              px-3
              py-2
              bg-slate-50
              rounded-full
              drop-shadow-2xl
              text-slate-950
              font-fredoka
              font-semibold
              mt-8
            `}
          >
            {lang == "en" ? en_us.page_introduction.title.button : id.page_introduction.title.button}
          </motion.a>
        </div>
          <motion.div
            initial={{
              opacity:0,
              scale:0.1,
              rotate:-3
            }}
            animate={{
              opacity:1,
              scale:1,
              rotate:3
            }}
            transition={{
              duration:1,
              ease : "backOut",
              delay:1
            }}
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
          </motion.div>
      </Page>
      <Page // Page 2 Structure Class // Transleted
        id="struktur_kelas"
        className={`
          lg:px-42
          lg:flex-col
          lg:pt-24
          dark:bg-transparent
          bg-slate-950
          bg-linear-to-bl
          from-red-600/20
          to-black
        `}
      >
        <Header
          sectionName={lang == "en" ? en_us.page_structure_class.title.upper_text : id.page_structure_class.title.upper_text}
          textHeading={<span>{lang == "en" ? en_us.page_structure_class.title.heading.text1 : id.page_structure_class.title.heading.text1}<span className={`text-red-400 italic font-semibold`}>{lang == "en" ? en_us.page_structure_class.title.heading.text2 : id.page_structure_class.title.heading.text2}</span>{lang == "en" ? en_us.page_structure_class.title.heading.text3 : id.page_structure_class.title.heading.text3}</span>}
          subtext={lang == "en" ? en_us.page_structure_class.title.subtitle : id.page_structure_class.title.subtitle}
        />
        <div // Player Card
          className={`
            md:scale-125
            md:gap-5
            md:py-27

            lg:flex-row
            lg:overflow-x-scroll
            lg:max-w-2xl
            lg:p-8
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
            instagramUrl="https://www.instagram.com/ervin_novanti24"
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
            title="Mutiara Elsama"
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
            title="Rahma Kamila Putri"
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
            {lang == "en" ? en_us.page_structure_class.title.footer_structure : id.page_structure_class.title.footer_structure}
          </span>
        </div>
      </Page>
      <Page // Page 3 About us // Transleted
        id="tentang_kami"
        className={`
          lg:px-42
          md:mt-52
          md:px-16
          dark:bg-transparent
          bg-slate-950
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
            sectionName={lang == "en" ? en_us.page_about_us.title.upper_text : id.page_about_us.title.upper_text}
            textHeading={<span>{lang == "en" ? en_us.page_about_us.title.heading.text1 : id.page_about_us.title.heading.text1}<span className={`text-red-400 font-semibold italic`}>{lang == "en" ? en_us.page_about_us.title.heading.text2 : id.page_about_us.title.heading.text2}</span>, {lang == "en" ? en_us.page_about_us.title.heading.text3 : id.page_about_us.title.heading.text3}<span className={`text-red-400 font-semibold italic`}>{lang == "en" ? en_us.page_about_us.title.heading.text4 : id.page_about_us.title.heading.text4}</span></span>}
            subtext={lang == "en" ? en_us.page_about_us.subtitle : id.page_about_us.subtitle}
          />
          <motion.div // Subtitle
            initial={{
              opacity:0
            }}
            whileInView={{
              opacity:1
            }}
            transition={{
              duration:1,
              ease:"backOut",
              delay:1.2
            }}
            viewport={{
              once : true
            }}
          >
            <span
              className={`
                md:text-2xl
                text-md
                text-slate-100
                font-fredoka
                text-shadow-2xs
              `}
            >
              {lang == "en" ? en_us.page_about_us.about_us : id.page_about_us.about_us}
            </span>
          </motion.div>
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
                  {lang == "en" ? en_us.page_about_us.amout : id.page_about_us.amout}
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
                    text-white
                    drop-shadow-2xl
                    font-fredoka
                    font-semi
                  `}
                >
                  {lang == "en" ? en_us.page_about_us.day_passed : id.page_about_us.day_passed}
                </span>
              </div>
              <Tooltip
                position="top"
                text={lang == "en" ? en_us.page_about_us.tooltip_day_passed : id.page_about_us.tooltip_day_passed}
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
                  {lang == "en" ? en_us.page_about_us.first_meet : id.page_about_us.first_meet}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Page>
      <Page // Page 4 Our story // Transleted
        id="cerita_kita"
        backgroundColor="bg-black"
        className={`
          lg:pt-24
          lg:px-32
          dark:bg-transparent
          bg-slate-950
          bg-linear-to-br
          from-red-600/20
          to-black
        `}
      >
        <Header
          sectionName={lang == "en" ? en_us.page_our_story.title.upper_text : id.page_our_story.title.upper_text}
          subtext={lang == "en" ? en_us.page_our_story.subtitle : id.page_our_story.subtitle}
          textHeading={<span>{lang == "en" ? en_us.page_our_story.title.heading.text1 : id.page_our_story.title.heading.text1}<span className="text-red-400 italic font-semibold">{lang == "en" ? en_us.page_our_story.title.heading.text2 : id.page_our_story.title.heading.text2}</span>{lang == "en" ? en_us.page_our_story.title.heading.text3 : id.page_our_story.title.heading.text3}</span>}
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
            title={lang == "en" ? en_us.page_our_story.body.card1.title : id.page_our_story.body.card1.title}
            subtitle={lang == "en" ? en_us.page_our_story.body.card1.subtitle : id.page_our_story.body.card1.subtitle}
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
            title={lang == "en" ? en_us.page_our_story.body.card2.title : id.page_our_story.body.card2.title}
            subtitle={lang == "en" ? en_us.page_our_story.body.card2.subtitle : id.page_our_story.body.card2.subtitle}
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
            title={lang == "en" ? en_us.page_our_story.body.card3.title : id.page_our_story.body.card3.title}
            subtitle={lang == "en" ? en_us.page_our_story.body.card3.subtitle : id.page_our_story.body.card3.subtitle}
            animation={true}
            className={`
              bg-red-950/60
              backdrop-blur-2xl
              shadow-2xl
            `}
          />
        </div>
      </Page>
      <Page // Page 5 Art // Transleted
        id="karya"
        className={`
          lg:mt-52
          md:mt-24
          bg-linear-to-b
          dark:bg-transparent
          bg-slate-950
          from-black
          to-red-600/20
        `}
      >
        <Header
          sectionName={lang == "en" ? en_us.page_art.title.upper_title : id.page_art.title.upper_title}
          textHeading={<span>{lang == "en" ? en_us.page_art.title.heading.text1 : id.page_art.title.heading.text1}<span className="text-red-400 font-semibold italic">{lang == "en" ? en_us.page_art.title.heading.text2 : id.page_art.title.heading.text2}</span>{lang == "en" ? en_us.page_art.title.heading.text3 : id.page_art.title.heading.text3}</span>}
          subtext={lang == "en" ? en_us.page_art.subtitle : id.page_art.subtitle}
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
            textColor="text-white"
            icon= {<Sun/>}
            subtitle={lang == "en" ? en_us.page_art.body.card1.subtitle : id.page_art.body.card1.subtitle}
            title={lang == "en" ? en_us.page_art.body.card1.title : id.page_art.body.card1.title}
            upperTitle={lang == "en" ? en_us.page_art.body.card1.upper_text : id.page_art.body.card1.upper_text}
          />
          <CardText
            backgroundPrimaryColor="bg-red-300"
            backgroundSecondaryColor="bg-red-200"
            textColor="text-black"
            icon= {<Trees/>}
            subtitle={lang == "en" ? en_us.page_art.body.card2.subtitle : id.page_art.body.card2.subtitle}
            title={lang == "en" ? en_us.page_art.body.card2.title : id.page_art.body.card2.title}
            upperTitle={lang == "en" ? en_us.page_art.body.card2.upper_text : id.page_art.body.card2.upper_text}
          />
          <CardText
            backgroundPrimaryColor="bg-red-200"
            backgroundSecondaryColor="bg-red-300"
            textColor="text-black"
            icon= {<Sun/>}
            subtitle={lang == "en" ? en_us.page_art.body.card3.subtitle : id.page_art.body.card3.subtitle}
            title={lang == "en" ? en_us.page_art.body.card3.title : id.page_art.body.card3.title}
            upperTitle={lang == "en" ? en_us.page_art.body.card3.upper_text : id.page_art.body.card3.upper_text}
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

      <Footers // Footer // Transleted
        copyright={lang == "en" ? en_us.footer.section2.copyright : id.footer.section2.copyright}
        title={
          <div className={`flex flex-col`}>
            <span className={`text-4xl font-sans tracking-wide text-white`}>{lang == "en" ? en_us.footer.section1.title.text1 : id.footer.section1.title.text1}</span>
            <span className={`text-4xl font-sans tracking-wide text-red-400 font-semibold italic`}>{lang == "en" ? en_us.footer.section1.title.text2 : id.footer.section1.title.text2}</span>
          </div>
        }
        note={lang == "en" ? en_us.footer.section2.note : id.footer.section2.note}
      >
        <FooterSection // Used tools
          title={lang == "en" ? en_us.footer.section1.sec1.title : id.footer.section1.sec1.title}
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
          <li>
            <a href="https://motion.dev/" className="hover:text-slate-50 transition-all">Motion</a>
          </li>
          <li>
            <a href="https://v0.app/" className="hover:text-slate-50 transition-all">v0 AI</a> <span className={`text-sm text-slate-50/30`}>As Design Reference</span>
          </li>
          <li>
            <a href="https://www.deepl.com/id/translator" className="hover:text-slate-50 transition-all">DeepL</a> <span className={`text-sm text-slate-50/30`}>As Translator Reference</span>
          </li>
        </FooterSection>
        <FooterSection // Credits
          title={lang == "en" ? en_us.footer.section1.sec2.title : id.footer.section1.sec2.title}
        >
          <li>
            <span className="text-slate-100/90">{lang == "en" ? en_us.footer.section1.sec2.role.dev : id.footer.section1.sec2.role.dev}</span><a href="https://www.instagram.com/rygnzzncc/">M Rafid Dwi Wicaksana</a>
          </li>
          <li>
            <span className="text-slate-100/90">{lang == "en" ? en_us.footer.section1.sec2.role.test1 : id.footer.section1.sec2.role.test1}</span><a href="https://www.instagram.com/nn__argani/">Nandana Argani Arkananta</a>
          </li>
          <li>
            <span className="text-slate-100/90">{lang == "en" ? en_us.footer.section1.sec2.role.test2 : id.footer.section1.sec2.role.test2}</span><a href="#">not defined yet</a>
          </li>
          <li>
            <span className="text-slate-100/90">{lang == "en" ? en_us.footer.section1.sec2.role.member : id.footer.section1.sec2.role.member}</span>{lang == "en" ? en_us.footer.section1.sec2.member_value : id.footer.section1.sec2.member_value}
          </li>
        </FooterSection>
        <FooterSection // About school
          title={lang == "en" ? en_us.footer.section1.sec3.title : id.footer.section1.sec3.title}
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
            <a href="https://smpn13malang.sch.id/" className="hover:text-slate-50 transition-all">{lang == "en" ? en_us.footer.section1.sec3.school : id.footer.section1.sec3.school}</a>
          </li>
        </FooterSection>
        <FooterSection // Social Media
          title={lang == "en" ? en_us.footer.section1.sec4.title : id.footer.section1.sec4.title}
        >
          <li>
            <a href="https://www.instagram.com/nine.dominoo" className="hover:text-slate-50 transition-all">Instagram</a>
          </li>
        </FooterSection>
      </Footers>
    </main>
  );
}