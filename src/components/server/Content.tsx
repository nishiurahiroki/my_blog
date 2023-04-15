import { client } from '../../libs/client';
import { Blog } from '../../models/Blog';

export type Props = {
  id: string;
};

export async function getContent(contentId: string) {
  const result = await client.get<Blog>({
    endpoint: 'blogs',
    contentId,
  });
  return result;
}

export async function Content({ id }: Props) {
  const content = await getContent(id);

  return (
    <div>
      <h1>{content.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.content}`,
        }}
      />
    </div>
  );
}
