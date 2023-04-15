import Link from 'next/link';
import { client } from '../libs/client';
import { Blogs } from '../models/Blog';

async function getBlogTitles() {
  const result = await client.get<Blogs>({
    endpoint: 'blogs',
    queries: {
      fields: 'id,title',
    },
  });
  return result.contents;
}

export default async function Page() {
  const titles = await getBlogTitles();

  return (
    <div>
      {titles.map((title) => (
        <div key={title.id}>
          <Link href={`/content/${title.id}`}>{title.title}</Link>
        </div>
      ))}
    </div>
  );
}
