import { Suspense } from 'react';
import { Content, getContent } from '../../../components/server/Content';
import Loading from '../../../components/client/Loading';

export const revalidate = 60;

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const content = await getContent(params.id);
  return {
    title: content.title,
  };
}

export default async function Page({ params }: Props) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <Content id={params.id} />
      </Suspense>
    </div>
  );
}
