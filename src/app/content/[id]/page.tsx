import { client } from '../../../libs/client';
import { Blog } from '../../../models/Blog';

type Props = {
  params: {
    id: string;
  };
};

async function getContent(contentId: string) {
  const result = await client.get<Blog>({
    endpoint: 'blogs',
    contentId,
  });
  return result;
}

export async function generateMetadata({ params }: Props) {
  const content = await getContent(params.id);

  return {
    title: content.title,
  };
}

export default async function Page({ params }: Props) {
  const content = await getContent(params.id);

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
