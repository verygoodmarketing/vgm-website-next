import { redirect } from 'next/navigation';
import { getArticleBySlug } from "@/lib/article-service"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Check if the article exists in the new system
  const article = await getArticleBySlug(params.slug);
  
  // If the article exists with the same slug, redirect to it
  if (article) {
    redirect(`/articles/${params.slug}`);
  } else {
    // Otherwise redirect to the articles index
    redirect('/articles');
  }
}

