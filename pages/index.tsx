import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );