/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Button, Text } from "../design-system";

export type PlaceProps = { image: string; name: string; period: string };
export const Place = ({ image, name, period }: PlaceProps) => {
  const router = useRouter();
  return (
    <div className="shadow-surface-elevation-low flex gap-3 rounded-2xl bg-white/5">
      <img
        src={image}
        className="aspect-video h-full w-[50%] rounded-l-lg"
        alt={name}
      />

      <div className="mt-4 flex flex-col gap-3 whitespace-pre-wrap text-left text-base text-blue-100/60">
        <div className="flex flex-col gap-1">
          <Text size="4" className="font-bold text-white/75">
            📍 Place:
          </Text>
          <Text size="2">{` ${name}`}</Text>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="4" className="text-white/75">
            📅 Period:
          </Text>
          <Text size="2">{period}</Text>
        </div>

        <Button
          appearance="black"
          className="flex items-center gap-1 border-none transition-all hover:gap-3"
          size="3"
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            router.push("https://twitter.com/nicolaslopess__");
          }}
        >
          <span>DM me</span>
          <span>🗣️ </span>
        </Button>
      </div>
    </div>
  );
};
