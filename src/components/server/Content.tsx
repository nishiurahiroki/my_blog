import Link from 'next/link';
import { Blog } from '../../models/Blog';

export type Props = {
  id: string;
};

export async function getContent(contentId: string) {
  const response = await fetch(`${process.env.API_HOST}/blog?id=${contentId}`);
  const result: Blog = await response.json();
  return result;
}

export async function getCategories(contentId: string) {
  const response = await fetch(`${process.env.API_HOST}/blog?id=${contentId}`);
  const result: Blog = await response.json();
  return result.category?.map(({ id, name }) => ({ id, name }));
}

export async function Content({ id }: Props) {
  const content = await getContent(id);
  const categories = await getCategories(id);

  return (
    <div>
      <h2>{content.title}</h2>
      <div>
        <ul>
          {categories?.map((category) => (
            <Link href="/" key={category.id}>
              <li>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.content}`,
        }}
      />
    </div>
  );
}
