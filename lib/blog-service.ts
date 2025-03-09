import type { BlogPost, Comment, Tag, BlogPostFormData } from "@/types/blog"

// In a real application, these would be API calls to your backend
// For now, we'll use localStorage to simulate persistence

const STORAGE_KEY = "vgm_blog_posts"
const COMMENTS_KEY = "vgm_blog_comments"
const TAGS_KEY = "vgm_blog_tags"

// Helper to generate slugs
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Helper to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Initialize with sample data if empty
function initializeData() {
  if (typeof window === "undefined") return

  if (!localStorage.getItem(TAGS_KEY)) {
    const sampleTags: Tag[] = [
      { id: "1", name: "Marketing", slug: "marketing" },
      { id: "2", name: "Small Business", slug: "small-business" },
      { id: "3", name: "Social Media", slug: "social-media" },
      { id: "4", name: "Google Ads", slug: "google-ads" },
      { id: "5", name: "Website Design", slug: "website-design" },
    ]
    localStorage.setItem(TAGS_KEY, JSON.stringify(sampleTags))
  }

  if (!localStorage.getItem(STORAGE_KEY)) {
    const samplePosts: BlogPost[] = [
      {
        id: "1",
        title: "How to Create an Effective Marketing Strategy on a Small Budget",
        slug: "effective-marketing-strategy-small-budget",
        excerpt: "Learn practical tips for maximizing your marketing impact without breaking the bank.",
        content: `
# How to Create an Effective Marketing Strategy on a Small Budget

Small businesses often face the challenge of making a big impact with limited resources. Here are some practical tips to help you maximize your marketing efforts without breaking the bank.

## 1. Define Your Target Audience

Before spending a single dollar, make sure you know exactly who you're trying to reach. Creating detailed buyer personas can help you understand your ideal customers' needs, pain points, and behaviors.

## 2. Focus on Value, Not Volume

Instead of trying to reach as many people as possible, focus on reaching the right people with the right message. Quality always trumps quantity when it comes to effective marketing.

## 3. Leverage Free and Low-Cost Digital Tools

- **Social Media**: Build a presence on platforms where your audience spends time
- **Email Marketing**: Use services like Mailchimp that offer free plans for small lists
- **Content Marketing**: Create valuable blog posts, videos, or podcasts that address your audience's needs

## 4. Network and Build Partnerships

Collaborate with complementary businesses to cross-promote each other's services. This can help you reach new audiences without additional costs.

## 5. Track and Measure Results

Use free analytics tools to track the performance of your marketing efforts. This data will help you identify what's working and where to allocate your limited resources.

Remember, effective marketing isn't about having the biggest budget—it's about being strategic, consistent, and authentic in your approach.
        `,
        author: {
          id: "1",
          name: "Marketing Expert",
          avatar: "/placeholder.svg?height=100&width=100",
          bio: "Marketing specialist with 10+ years of experience helping small businesses grow.",
        },
        tags: [
          { id: "1", name: "Marketing", slug: "marketing" },
          { id: "2", name: "Small Business", slug: "small-business" },
        ],
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        isPublished: true,
        readingTime: 5,
        featuredImage: "/placeholder.svg?height=600&width=1200",
      },
      {
        id: "2",
        title: "5 Common Marketing Mistakes Small Businesses Make",
        slug: "5-common-marketing-mistakes-small-businesses",
        excerpt: "Avoid these pitfalls that can waste your marketing budget and limit your growth.",
        content: `
# 5 Common Marketing Mistakes Small Businesses Make

Even with the best intentions, small businesses often make marketing mistakes that can waste resources and limit growth. Here are five common pitfalls to avoid.

## 1. Not Having a Clear Strategy

Many businesses jump into marketing activities without a clear plan. Before launching campaigns, define your goals, target audience, and key messages.

## 2. Trying to Appeal to Everyone

When you try to appeal to everyone, you end up appealing to no one. Focus on your niche and speak directly to the specific customers who need your products or services.

## 3. Inconsistent Branding

Consistency builds recognition and trust. Ensure your visual identity, messaging, and customer experience are aligned across all touchpoints.

## 4. Neglecting Data and Analytics

Marketing without measuring results is like driving with your eyes closed. Set up proper tracking to understand what's working and what's not.

## 5. Underinvesting in Customer Retention

Acquiring new customers costs 5-25 times more than retaining existing ones. Don't focus so much on new business that you neglect your current customers.

By avoiding these common mistakes, you can make your marketing more effective and get better returns on your investment.
        `,
        author: {
          id: "1",
          name: "Marketing Expert",
          avatar: "/placeholder.svg?height=100&width=100",
          bio: "Marketing specialist with 10+ years of experience helping small businesses grow.",
        },
        tags: [
          { id: "1", name: "Marketing", slug: "marketing" },
          { id: "2", name: "Small Business", slug: "small-business" },
        ],
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        isPublished: true,
        readingTime: 4,
        featuredImage: "/placeholder.svg?height=600&width=1200",
      },
      {
        id: "3",
        title: "Understanding Google Ads: A Beginner's Guide",
        slug: "understanding-google-ads-beginners-guide",
        excerpt: "Everything you need to know to get started with effective Google Ads campaigns.",
        content: `
# Understanding Google Ads: A Beginner's Guide

Google Ads is one of the most powerful advertising platforms available to businesses of all sizes. This guide will help you understand the basics and get started with your first campaign.

## What is Google Ads?

Google Ads is an online advertising platform developed by Google where advertisers pay to display brief advertisements, service offerings, product listings, or videos to web users. It can place ads both in the results of search engines like Google Search and on non-search websites, mobile apps, and videos.

## Why Use Google Ads?

- **Reach**: Access to billions of searches performed on Google every day
- **Intent**: Target people actively searching for your products or services
- **Control**: Set your own budget and only pay when someone clicks on your ad
- **Measurability**: Track the performance of your campaigns in detail

## Getting Started with Google Ads

### 1. Set Clear Goals

Before creating your first campaign, define what you want to achieve:
- Increase website traffic
- Generate leads
- Boost sales
- Raise brand awareness

### 2. Understand Keywords

Keywords are the foundation of search advertising. These are the terms people type into Google when looking for something. Research and select keywords that:
- Are relevant to your business
- Have decent search volume
- Match your customers' search intent

### 3. Create Compelling Ad Copy

Your ad should:
- Include your main keyword
- Highlight a unique selling proposition
- Contain a clear call to action
- Address the searcher's needs or pain points

### 4. Set Up Proper Tracking

Implement conversion tracking to measure the effectiveness of your campaigns. This helps you understand which ads and keywords are driving valuable actions on your website.

### 5. Start Small and Optimize

Begin with a modest budget and a focused campaign. As you gather data, refine your approach by:
- Adjusting bids for better-performing keywords
- Pausing underperforming keywords
- Testing different ad variations
- Refining your targeting

## Common Mistakes to Avoid

- **Broad Keywords**: Using overly general keywords can drain your budget quickly
- **Ignoring Negative Keywords**: Failing to exclude irrelevant search terms
- **Poor Landing Pages**: Sending traffic to pages that don't match the ad's promise
- **Set and Forget**: Not regularly monitoring and optimizing your campaigns

With the right approach, Google Ads can be a cost-effective way to grow your business and reach new customers who are actively looking for what you offer.
        `,
        author: {
          id: "1",
          name: "Marketing Expert",
          avatar: "/placeholder.svg?height=100&width=100",
          bio: "Marketing specialist with 10+ years of experience helping small businesses grow.",
        },
        tags: [
          { id: "1", name: "Marketing", slug: "marketing" },
          { id: "4", name: "Google Ads", slug: "google-ads" },
        ],
        createdAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
        isPublished: true,
        readingTime: 6,
        featuredImage: "/placeholder.svg?height=600&width=1200",
      },
      {
        id: "4",
        title: "Social Media Marketing: Which Platforms Are Right for Your Business?",
        slug: "social-media-marketing-which-platforms-right-for-business",
        excerpt:
          "Not all social platforms are created equal. Find out which ones will work best for your specific business.",
        content: `
# Social Media Marketing: Which Platforms Are Right for Your Business?

With so many social media platforms available, it can be overwhelming to decide where to focus your marketing efforts. This guide will help you determine which platforms are most likely to benefit your specific business.

## The Major Social Media Platforms

### Facebook

**Best for**: Most businesses, especially those targeting adults 25-65+
**Strengths**: Massive user base, detailed targeting options, variety of content formats
**Business types that excel**: Local businesses, B2C companies, community-oriented organizations

### Instagram

**Best for**: Businesses with strong visual content
**Strengths**: High engagement, visual storytelling, influencer marketing
**Business types that excel**: Fashion, food, travel, beauty, fitness, lifestyle brands

### LinkedIn

**Best for**: B2B companies, professional services, recruitment
**Strengths**: Professional audience, thought leadership, industry networking
**Business types that excel**: Consulting, SaaS, recruiting, higher education, corporate services

### Twitter

**Best for**: News, customer service, real-time engagement
**Strengths**: Real-time communication, trending topics, direct customer interaction
**Business types that excel**: Media, entertainment, tech, customer service-oriented businesses

### Pinterest

**Best for**: Products and services with visual appeal
**Strengths**: Inspiration-seeking audience, high purchase intent, long content lifespan
**Business types that excel**: Home decor, fashion, DIY, food, wedding, travel

### TikTok

**Best for**: Brands targeting Gen Z and younger Millennials
**Strengths**: Viral potential, creative expression, authentic content
**Business types that excel**: Entertainment, fashion, beauty, fitness, food

## How to Choose the Right Platforms

### 1. Know Your Audience

Research where your target customers spend their time online. Consider:
- Age demographics
- Professional status
- Interests and behaviors
- Platform usage patterns

### 2. Assess Your Resources

Be realistic about:
- Time available for content creation and community management
- Skills and capabilities (video production, photography, writing)
- Budget for paid promotion

### 3. Evaluate Your Content Type

Different platforms favor different content formats:
- Video-heavy strategy? Consider TikTok, Instagram, YouTube
- Text and thought leadership? LinkedIn, Twitter
- Beautiful product photos? Instagram, Pinterest

### 4. Analyze Your Competitors

Look at:
- Which platforms they're active on
- What type of content performs well for them
- Where they have the most engagement

### 5. Start Small and Expand

It's better to excel on one or two platforms than to perform poorly on many. Begin with the platforms that best align with your audience and resources, then expand as you build capacity.

## Measuring Success

For each platform, track metrics that align with your business goals:
- Awareness: Followers, impressions, reach
- Engagement: Likes, comments, shares, saves
- Traffic: Click-through rate, website visits
- Conversions: Leads, sales, sign-ups

Remember that social media marketing requires consistency and patience. Test different approaches, analyze your results, and refine your strategy over time.
        `,
        author: {
          id: "1",
          name: "Marketing Expert",
          avatar: "/placeholder.svg?height=100&width=100",
          bio: "Marketing specialist with 10+ years of experience helping small businesses grow.",
        },
        tags: [
          { id: "1", name: "Marketing", slug: "marketing" },
          { id: "3", name: "Social Media", slug: "social-media" },
        ],
        createdAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
        isPublished: true,
        readingTime: 7,
        featuredImage: "/placeholder.svg?height=600&width=1200",
      },
    ]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePosts))
  }

  if (!localStorage.getItem(COMMENTS_KEY)) {
    const sampleComments: Comment[] = [
      {
        id: "1",
        postId: "1",
        author: {
          name: "John Smith",
          email: "john@example.com",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content: "Great article! These tips are really practical for my small business.",
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        isApproved: true,
      },
      {
        id: "2",
        postId: "1",
        author: {
          name: "Sarah Johnson",
          email: "sarah@example.com",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content: "I implemented some of these strategies and saw immediate results. Thanks for sharing!",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        isApproved: true,
      },
    ]
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(sampleComments))
  }
}

// Blog post operations
export const BlogService = {
  getAllPosts: async (): Promise<BlogPost[]> => {
    if (typeof window === "undefined") return []

    initializeData()
    const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    return posts.sort((a: BlogPost, b: BlogPost) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },

  getPublishedPosts: async (): Promise<BlogPost[]> => {
    const posts = await BlogService.getAllPosts()
    return posts.filter((post) => post.isPublished)
  },

  getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    const posts = await BlogService.getAllPosts()
    return posts.find((post) => post.slug === slug) || null
  },

  createPost: async (postData: BlogPostFormData): Promise<BlogPost> => {
    const posts = await BlogService.getAllPosts()

    const newPost: BlogPost = {
      ...postData,
      id: Date.now().toString(),
      slug: generateSlug(postData.title),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      readingTime: calculateReadingTime(postData.content),
      comments: [],
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify([...posts, newPost]))
    return newPost
  },

  updatePost: async (postData: BlogPostFormData): Promise<BlogPost> => {
    if (!postData.id) throw new Error("Post ID is required for updates")

    const posts = await BlogService.getAllPosts()
    const existingPostIndex = posts.findIndex((p) => p.id === postData.id)

    if (existingPostIndex === -1) throw new Error("Post not found")

    const updatedPost: BlogPost = {
      ...posts[existingPostIndex],
      ...postData,
      slug: generateSlug(postData.title),
      updatedAt: new Date().toISOString(),
      readingTime: calculateReadingTime(postData.content),
    }

    posts[existingPostIndex] = updatedPost
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))

    return updatedPost
  },

  deletePost: async (id: string): Promise<void> => {
    const posts = await BlogService.getAllPosts()
    const filteredPosts = posts.filter((post) => post.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts))

    // Also delete associated comments
    const comments = await CommentService.getAllComments()
    const filteredComments = comments.filter((comment) => comment.postId !== id)
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(filteredComments))
  },

  getPostsByTag: async (tagSlug: string): Promise<BlogPost[]> => {
    const posts = await BlogService.getPublishedPosts()
    return posts.filter((post) => post.tags.some((tag) => tag.slug === tagSlug))
  },
}

// Comment operations
export const CommentService = {
  getAllComments: async (): Promise<Comment[]> => {
    if (typeof window === "undefined") return []

    initializeData()
    return JSON.parse(localStorage.getItem(COMMENTS_KEY) || "[]")
  },

  getCommentsByPostId: async (postId: string): Promise<Comment[]> => {
    const comments = await CommentService.getAllComments()
    return comments
      .filter((comment) => comment.postId === postId && comment.isApproved)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  },

  addComment: async (postId: string, author: { name: string; email: string }, content: string): Promise<Comment> => {
    const comments = await CommentService.getAllComments()

    const newComment: Comment = {
      id: Date.now().toString(),
      postId,
      author: {
        name: author.name,
        email: author.email,
        avatar: `/placeholder.svg?height=50&width=50&text=${author.name.charAt(0)}`,
      },
      content,
      createdAt: new Date().toISOString(),
      isApproved: true, // Auto-approve for demo purposes
    }

    localStorage.setItem(COMMENTS_KEY, JSON.stringify([...comments, newComment]))
    return newComment
  },

  deleteComment: async (id: string): Promise<void> => {
    const comments = await CommentService.getAllComments()
    const filteredComments = comments.filter((comment) => comment.id !== id)
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(filteredComments))
  },

  approveComment: async (id: string): Promise<Comment> => {
    const comments = await CommentService.getAllComments()
    const commentIndex = comments.findIndex((c) => c.id === id)

    if (commentIndex === -1) throw new Error("Comment not found")

    comments[commentIndex].isApproved = true
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))

    return comments[commentIndex]
  },
}

// Tag operations
export const TagService = {
  getAllTags: async (): Promise<Tag[]> => {
    if (typeof window === "undefined") return []

    initializeData()
    return JSON.parse(localStorage.getItem(TAGS_KEY) || "[]")
  },

  createTag: async (name: string): Promise<Tag> => {
    const tags = await TagService.getAllTags()

    const newTag: Tag = {
      id: Date.now().toString(),
      name,
      slug: generateSlug(name),
    }

    localStorage.setItem(TAGS_KEY, JSON.stringify([...tags, newTag]))
    return newTag
  },

  deleteTag: async (id: string): Promise<void> => {
    const tags = await TagService.getAllTags()
    const filteredTags = tags.filter((tag) => tag.id !== id)
    localStorage.setItem(TAGS_KEY, JSON.stringify(filteredTags))

    // Also remove this tag from all posts
    const posts = await BlogService.getAllPosts()
    const updatedPosts = posts.map((post) => ({
      ...post,
      tags: post.tags.filter((tag) => tag.id !== id),
    }))

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts))
  },
}

