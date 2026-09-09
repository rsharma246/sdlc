import Link from 'next/link';

export default function BlogPost({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <ul>
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <Link href={`/posts/${post.id}`}>View Post</Link>
    </div>
  );