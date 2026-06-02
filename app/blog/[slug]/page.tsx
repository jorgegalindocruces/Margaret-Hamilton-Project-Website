import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { MDXContent } from '@/components/mdx/mdx-content'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return { title: 'Post no encontrado' }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'
  const postUrl = `${siteUrl}/blog/${post.slug}`
  const ogImageSrc = post.ogImage || post.coverImage
  const ogImageUrl = ogImageSrc
    ? ogImageSrc.startsWith('http') ? ogImageSrc : `${siteUrl}${ogImageSrc}`
    : undefined
  const description = post.excerpt || post.title

  return {
    title: post.title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description,
      url: postUrl,
      type: 'article',
      locale: 'es_ES',
      siteName: 'Proyecto Margaret Hamilton',
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: ogImageUrl ? [{ url: ogImageUrl, alt: post.title }] : [],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article>
        {/* Header */}
        <Section className="bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <Container size="md">
            <div className="mx-auto max-w-3xl">
              {post.category && (
                <div className="mb-4">
                  <Link href={`/blog-category/${post.categorySlug}`}>
                    <Badge variant="primary">{post.category}</Badge>
                  </Link>
                </div>
              )}
              <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading sm:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <Link
                  href={`/blog-author/${post.authorSlug}`}
                  className="font-medium hover:text-primary-600"
                >
                  {post.author}
                </Link>
                <span>•</span>
                <time>{formatDate(post.date)}</time>
              </div>
            </div>
          </Container>
        </Section>

        {/* Cover Image */}
        {post.coverImage && (
          <Section className="pt-0 pb-0">
            <Container size="md">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Container>
          </Section>
        )}

        {/* Content */}
        <Section>
          <Container size="md">
            <MDXContent source={post.content} />
          </Container>
        </Section>

        {/* Author info */}
        <Section variant="gray">
          <Container size="md">
            <h2 className="sr-only">Sobre el autor</h2>
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {post.author}
                </h3>
                <Link
                  href={`/blog-author/${post.authorSlug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver todos los posts de {post.author} →
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </article>

      {/* Back to Blog */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Volver al blog
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
