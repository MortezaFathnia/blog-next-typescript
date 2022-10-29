// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string;
  body: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: `So I guess I’ll say it.

  The way npm audit works is broken. Its rollout as a default after every npm install was rushed, inconsiderate, and inadequate for the front-end tooling.
  
  Have you heard the story about the boy who cried wolf? Spoiler alert: the wolf eats the sheep. If we don’t want our sheep to be eaten, we need better tools.
  
  As of today, npm audit is a stain on the entire npm ecosystem. The best time to fix it was before rolling it out as a default. The next best time to fix it is now.
  
  In this post, I will briefly outline how it works, why it’s broken, and what changes I’m hoping to see.` })
}
