import { BlogCard } from '@/components/cards/blog-card'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { getBlogPostsByCategory, getAllBlogCategories } from '@/lib/content'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface BlogCategoryPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const categories = getAllBlogCategories()
  return categories.map((cat) => ({ slug: cat.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.margarethamiltonproject.org'
  const categories = getAllBlogCategories()
  const category = categories.find((cat) => cat.slug === params.slug)
  const title = category ? `${category.title} - Blog` : 'Categoría'
  const description = category
    ? `Artículos de ${category.title} en el blog del Proyecto Margaret Hamilton, escuela de programación en Cádiz.`
    : 'Categoría del blog del Proyecto Margaret Hamilton.'
  const url = `${siteUrl}/blog-category/${params.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'es_ES',
      siteName: 'Proyecto Margaret Hamilton',
    },
  }
}

export default function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const categories = getAllBlogCategories()
  const category = categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const posts = getBlogPostsByCategory(params.slug)

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-blue-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 font-heading sm:text-5xl">
              {category.title}
            </h1>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Volver al blog
            </Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  coverImage={post.coverImage}
                  publishedAt={post.date}
                  authorName={post.author}
                  categoryTitle={post.category}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-600">
                No hay posts en esta categoría todavía.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
