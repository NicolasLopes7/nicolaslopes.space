import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Button, Heading, IconArrowRight, Text } from "../design-system";

export default function Web() {
  const title = "404 | nicolaslopes.space";
  const description = `Maybe, you're on the wrong page 🤔`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-center px-4 h-screen-ios">
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <Heading
              className="relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-shine before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['404'] "
              size="10"
            >
              404
            </Heading>
            <div className="sm:px-20">
              <Text size="5">
                This page doesn{`'`}t exist or has been moved.
              </Text>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="4">
              <Link href="/">
                Back home
                <IconArrowRight />
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
        <Image
          className="absolute top-[220px] left-0 -z-10 h-full w-full select-none md:top-0"
          fill
          priority
          src="/static/bg.png"
          alt={""}
          style={{ position: "absolute" }}
        />
      </div>
    </>
  );
}
