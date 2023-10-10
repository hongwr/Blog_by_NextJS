import { getPostData } from '@/api/posts';

type Props = {
    params: {
        slug: string;
    };
};

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);
    console.log(post, 'post');

    return (
        <>
            <h1>{post.title}</h1>
            <pre>{post.content}</pre>
        </>
    );
}