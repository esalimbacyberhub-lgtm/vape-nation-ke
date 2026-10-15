import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 6;

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const totalPages = Math.max(1, Math.ceil((posts?.length || 0) / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const visiblePosts = (posts || []).slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (next: number) => {
    setSearchParams(next === 1 ? {} : { page: String(next) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vape Blog Kenya | Vaping Tips, News & Guides | Vape Nation KE</title>
        <meta
          name="description"
          content="Read the latest vaping tips, product reviews, and guides from Vape Nation KE. Stay updated on disposable vapes, e-liquids, and vape culture in Kenya."
        />
        <meta name="keywords" content="vape blog Kenya, vaping tips Nairobi, vape guides, disposable vape reviews, e-liquid Kenya, vape news Africa" />
        <link rel="canonical" href={`https://vapenationke.co.ke/blog${page > 1 ? `?page=${page}` : ""}`} />
      </Helmet>
      <Header />

      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🔥 Vape Nation <span className="text-primary">Blog</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tips, guides, product reviews, and the latest vape news from Kenya's #1 vape shop.
          </p>

          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading posts...</div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No blog posts yet. Check back soon! 💨
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                {visiblePosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                      {post.image_url && (
                        <div className="overflow-hidden rounded-t-lg">
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString("en-KE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          <Badge variant="secondary" className="ml-auto text-[10px]">
                            {post.author}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-primary text-sm font-semibold">Read more →</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Blog pagination">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => goToPage(page - 1)}
                    className="border-primary/30"
                  >
                    <ChevronLeft className="h-4 w-4" /> Prev
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Button
                      key={n}
                      variant={n === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => goToPage(n)}
                      className={n === page ? "" : "border-primary/30"}
                      aria-current={n === page ? "page" : undefined}
                    >
                      {n}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => goToPage(page + 1)}
                    className="border-primary/30"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
