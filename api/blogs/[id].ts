import { NextApiRequest, NextApiResponse } from 'next';
import BlogPost from '../../models/BlogPost';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);
  const post = await BlogPost.findById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  return res.json(post);
}