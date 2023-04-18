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
    <div className="pt-6">
      <label className="text-4xl font-sans">AIが書いた怪談ブログ</label>
      <div className="grid gap-4 pt-8">
        {titles.map((title) => (
          <div key={title.id}>
            <Link href={`/content/${title.id}`}>{title.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
