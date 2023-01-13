import { Button, Heading, IconArrowRight, Text } from "../design-system/";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Topbar } from "../components/TopBar";
import { Footer } from "../components/Footer";
export default function Web() {
  const title = "Nicolas Lopes | Space";
  const description = `A space of myself on the web. See what i'm reading 📖.
  Tweets i'm liking ❤️. Habits i'm pursuing 🏃‍♂️.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 h-screen-ios">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <Heading
              className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['My_🪟_to_the_web'] "
              size="10"
            >
              My 🪟 to the web
            </Heading>
            <div className="sm:px-20">
              <Text size="5">
                A space of myself on the web. See what i{`'`}m reading 📖.
                Tweets i{`'`}m liking ❤️. Habits i{`'`}m pursuing 🏃‍♂️.
              </Text>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="4">
              <Link href="https://github.com/NicolasLopes7">
                Explore
                <IconArrowRight />
              </Link>
            </Button>
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
