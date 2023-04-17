import Link from 'next/link';
import { client } from '../libs/client';
import { Blogs } from '../models/Blog';

import styles from './styles.module.css';

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
    <div className={styles.container}>
      <header>
        <h2>AIが書いた怪談</h2>
      </header>

      <div className={styles.articles}>
        {titles.map((title) => (
          <div key={title.id} className={styles.article}>
            <Link href={`/content/${title.id}`}>{title.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
