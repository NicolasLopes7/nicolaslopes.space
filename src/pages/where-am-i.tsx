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
      "https://nomadlist.com/cdn-cgi/image/format=auto,width=1920,quality=100/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1590093804249-491680485e5d%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDMwfHxGbG9yaWFub3BvbGlzJTIwJTIwQnJhemlsfGVufDF8MHx8fDE2NzIyNzI4OTU%26ixlib%3Drb-4.0.3%26q%3D50%26w%3D700&hash=f3a9860042caca70003bb6620d22b125",
    name: "Floripa, Brazil",
    period: "17th March - 27th March",
  },
  {
    image:
      "https://nomadlist.com/cdn-cgi/image/format=auto,width=1920,quality=100/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1601997476064-f44852383201%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDF8fEN1cml0aWJhfGVufDB8MHx8fDE2NDEzNDE2Mjk%26ixlib%3Drb-1.2.1%26q%3D50%26w%3D700&hash=d85e075b131b8a05d73c9cecfd2521a0",
    name: "Curitiba, Brazil",
    period: "27th March - 10th April",
  },
  {
    image:
      "https://nomadlist.com/cdn-cgi/image/format=auto,width=1920,quality=100/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1566830790860-f9cad9d4cfbd%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDR8fEJlbG8lMjBIb3Jpem9udGUlMjAlMjBCcmF6aWx8ZW58MXwwfHx8MTY3ODE0ODEzMw%26ixlib%3Drb-4.0.3%26q%3D50%26w%3D700&hash=77ad47cec7c5feb71d45d8b8dfa838b7",
    name: "Belo Horizonte, Brazil",
    period: "10th April - 20th April",
  },
  {
    image:
      "https://nomadlist.com/cdn-cgi/image/format=auto,width=1920,quality=100/https://nomadlist.com/imageProxy.php?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1561722797-8b4dffabb19f%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwzMTM1N3wwfDF8c2VhcmNofDEzfHxTJUMzJUEzbyUyMFBhdWxvfGVufDF8MHx8fDE2NDI2MzczOTU%26ixlib%3Drb-1.2.1%26q%3D50%26w%3D700&hash=cfe9dcbc5c86d5809b2c6215c32535a5",
    name: "São Paulo, Brazil",
    period: "20th April - 27th April",
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
