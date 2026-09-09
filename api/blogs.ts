import { NextApiRequest, NextApiResponse } from 'next';
import BlogPost from '../../models/BlogPost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await BlogPost.find();
  return res.json(posts);
}