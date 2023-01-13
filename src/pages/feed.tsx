import { Heading } from "../design-system";
import Head from "next/head";
import Image from "next/image";

import { Topbar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { Tweet } from "../components/Tweet";

export default function Web() {
  const title = "Nicolas Lopes | Feed";
  const description = `Here you can find what i'm consuming`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className="relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 h-screen-ios">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col">
          <div className="max-w-[725px] text-center">
            <Heading
              className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['Tweets_🐦'] "
              size="10"
            >
              Tweets 🐦
            </Heading>
            <div className="flex flex-col gap-4">
              <Tweet
                text={`Have you ever need to create graphQL nodes that only fetches an rest endpoint or whatever behavior that can done on the same way?

Don't waste more time coding brainless things, create a directive!

Check the example on the thread ->

cc 
@sseraphini`}
              />
              <Tweet
                text={`it's crazy that this is the guy who decides if restaurants are good`}
              />
              <Tweet
                text={`app recommendation: strong`}
              />
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
