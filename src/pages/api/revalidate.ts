import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  console.dir(req.query);
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/');
    return res.json({ revalidated: true });
  } catch (err) {
    console.dir(err);
    return res.status(500).send('Error revalidating');
  }
}
