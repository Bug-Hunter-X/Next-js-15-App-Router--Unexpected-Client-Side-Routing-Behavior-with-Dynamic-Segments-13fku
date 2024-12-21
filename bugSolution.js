```javascript
// pages/posts/[id].js
import { MetadataRoute } from 'next/server';
import { useRouter } from 'next/navigation';

export default function Post({ params }) {
  const router = useRouter();

  return (
    <div>
      <h1>Post {params.id}</h1>
      <button onClick={() => router.push(`/posts/${parseInt(params.id) + 1}`)}>Next Post</button>
    </div>
  );
}

export const metadata = {
  title: `Post ${params.id}`,
} satisfies MetadataRoute;
```