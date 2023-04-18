import Link from 'next/link';
import { client } from '../libs/client';
import { Blogs } from '../models/Blog';

async function getBlogTitles() {
  const result = await client.get<Blogs>({
    endpoint: 'blogs',
    queries: {
      fields: 'id,title,content',
    },
  });
  return result.contents;
}

export default async function Page() {
  const titles = await getBlogTitles();
  console.dir(titles);
  return (
    <div className="pt-6">
      <h2 className="text-4xl font-serif">AIが書いた怪談ブログ</h2>
      <h6 className="text-sm text-gray-300 font-serif pt-3">
        毎日23~24時の間に自動更新。AI(Chat-GPT3.5)が書いた怪談を掲載します。
      </h6>
      <div className="grid gap-4 pt-8">
        {titles.map((title) => (
          <Link href={`/content/${title.id}`} key={title.id}>
            <span
              key={title.id}
              className="block max-w-full p-5 bg-slate-800 border border-gray-600 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-1 text-xl font-bold tracking-tight text-white">
                {title.title}
              </h5>
              <p className="font-normal text-sm text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis pt-1 w-[500px]">
                {title.content
                  .replaceAll('¥r¥r', '')
                  .replaceAll('¥r¥n', '')
                  .replaceAll('¥r', '')
                  .replaceAll('¥n', '')
                  .replaceAll('<br>', '')
                  .replaceAll('<p>', '')
                  .replaceAll('</p>', '')}
              </p>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
