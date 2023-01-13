import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const tweetsRouter = createTRPCRouter({
  getTweets: publicProcedure
    .input(
      z.object({
        take: z.number().optional(),
        skip: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) =>
      ctx.p.tweet.findMany({
        skip: input.skip,
        take: input.take,
      })
    ),

  likeTweet: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { id } }) =>
      ctx.p.tweet.update({
        where: { id },
        data: {
          likes: {
            increment: 1,
          },
        },
      })
    ),
});
