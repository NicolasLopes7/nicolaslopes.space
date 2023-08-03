import { Heading, Text } from "../design-system";
import Head from "next/head";
import Image from "next/image";

import { Footer } from "../components/Footer";
import Link from "next/link";
import type { PlaceProps } from "../components/Place";
import { Place } from "../components/Place";

const places: PlaceProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    name: "São Paulo",
    period: "08 - 13,Ssep. 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    name: "Buenos Aires",
    period: "13 - 21, Sep. 2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505322266409-1c77f8b33a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    name: "Bariloche",
    period: "21 - 26, Sep. 2023",
  },
  {
    image: 'https://images.unsplash.com/photo-1590093804249-491680485e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    name: "Floripa",
    period: "20 Oct - 20 Dec. 2023",
  }
].reverse();

export default function Web() {
  const title = "Here I am";
  const description = `My next locations on the 🌍`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 pt-[80px] h-screen-ios md:pt-[100px]">
        <div className="relative mx-auto flex max-w-3xl flex-col">
          <div className="max-w-[725px] text-center">
            <Heading
              className="relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-shine before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['Here_I_am!_📍🌍'] "
              size="10"
            >
              Here I am! 📍🌍
            </Heading>
            <div className="sm:px-20">
              <Text size="5">
                Check where I am on the 🌍. Feel free to{" "}
                <Link
                  href="https://twitter.com/nicolaslopess__"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="cursor-pointer font-bold text-white/90 hover:underline"
                >
                  DM
                </Link>{" "}
                me if you want to meet up!
              </Text>
            </div>
            <div className="my-10 flex flex-col gap-4">
              {places.map((place) => (
                <Place key={place.name} {...place} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Image
        className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0"
        fill
        priority
        src="/static/bg.png"
        alt={""}
        style={{ position: "absolute" }}
      />
    </>
  );
}
