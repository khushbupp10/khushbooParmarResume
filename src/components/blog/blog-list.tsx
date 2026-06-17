"use client";

import { useState, useMemo } from "react";
import { Search, Clock, ExternalLink } from "lucide-react";
import type { BlogArticle, ArticlePlatform } from "@/data/blog";
import { platformLabels } from "@/data/blog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

interface BlogListProps {
  posts: BlogArticle[];
  categories: string[];
  tags: string[];
}

export function BlogList({ posts, categories, tags }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState<ArticlePlatform | "all">("all");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
      const matchesTag = tagFilter === "all" || post.tags.includes(tagFilter);
      const matchesPlatform = platformFilter === "all" || post.platform === platformFilter;

      return matchesSearch && matchesCategory && matchesTag && matchesPlatform;
    });
  }, [posts, search, categoryFilter, tagFilter, platformFilter]);

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            aria-label="Search blog articles"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by platform">
          {(["all", "medium", "devto", "linkedin"] as const).map((platform) => (
            <Button
              key={platform}
              variant={platformFilter === platform ? "default" : "outline"}
              size="sm"
              onClick={() => setPlatformFilter(platform)}
              aria-pressed={platformFilter === platform}
            >
              {platform === "all" ? "All Platforms" : platformLabels[platform]}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <Button
            variant={categoryFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setCategoryFilter("all")}
            aria-pressed={categoryFilter === "all"}
          >
            All Categories
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={categoryFilter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter(cat)}
              aria-pressed={categoryFilter === cat}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
          {tags.slice(0, 10).map((tag) => (
            <Button
              key={tag}
              variant={tagFilter === tag ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setTagFilter(tagFilter === tag ? "all" : tag)}
              aria-pressed={tagFilter === tag}
            >
              #{tag}
            </Button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        Showing {filtered.length} of {posts.length} articles
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.05}>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{platformLabels[post.platform]}</Badge>
                  <Badge variant="secondary">{post.category}</Badge>
                  {post.featured && <Badge variant="gradient">Featured</Badge>}
                </div>
                <CardTitle>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </a>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read on {platformLabels[post.platform]}
                  <ExternalLink className="ml-1 h-3 w-3" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">No articles match your search criteria.</p>
      )}
    </div>
  );
}
