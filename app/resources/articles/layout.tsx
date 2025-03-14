import { createSampleArticleIfNoneExist } from "@/lib/article-service"

export default async function ArticlesLayout({ children }: { children: React.ReactNode }) {
  // Create sample article if none exist
  await createSampleArticleIfNoneExist();
  
  return (
    <div>
      {children}
    </div>
  )
}