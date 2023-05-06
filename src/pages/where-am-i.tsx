import { Heading, Text } from "../design-system";
import Head from "next/head";
import Image from "next/image";

import { Footer } from "../components/Footer";
import Link from "next/link";
import type { PlaceProps } from "../components/Place";
import { Place } from "../components/Place";

const places: PlaceProps[] = [
  {
    image: "https://ondeficarnaviagem.com/wp-content/uploads/2022/02/onde-ficar-em-maragogi-alagoas-dicas-hoteis-pousadas-10.jpg",
    name: "Maragogi",
    period: "07 - 14, may. 2023",
  },
  {
    image: "https://a.cdn-hotels.com/gdcs/production170/d1541/37153966-167c-4334-9b81-823d6ffce6dd.jpg",
    name: "Crete",
    period: "02 - 11, jun. 2023",
  },
  {
    image: "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg",
    name: "Santorini",
    period: "11 - 15, jun. 2023",
  },
  {
    image: "https://lp-cms-production.imgix.net/2021-08/shutterstockRF_1541944991.jpg",
    name: "Mykonos",
    period: "15 - 19, jun. 2023",
  },
  {
    image: "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg",
    name: "Athens",
    period: "19 - 23, jun. 2023",
  },
  {
    image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-brasilia-capa2019-01.jpg",
    name: "Brasília",
    period: "21 - 23, jul. 2023",
  },
  {
    image: "https://a.cdn-hotels.com/gdcs/production164/d1916/76adf5d6-a867-49c6-872d-524b3ca73da5.jpg",
    name: "João Pessoa",
    period: "02 - 22, ago. 2023",
  },
];

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
