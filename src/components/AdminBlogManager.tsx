import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published: boolean;
  author: string;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
}

const AdminBlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image_url: "",
    published: false,
    author: "Vape Nation KE",
    meta_title: "",
    meta_description: "",
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Failed to load blog posts");
      return;
    }
    setPosts(data || []);
  };

  const generateSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const resetForm = () => {
    setForm({
      title: "", slug: "", excerpt: "", content: "", image_url: "",
      published: false, author: "Vape Nation KE", meta_title: "", meta_description: "",
    });
    setEditingPost(null);
    setShowForm(false);
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.content) {
      toast.error("Title, slug, and content are required");
      return;
    }

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      content: form.content,
      image_url: form.image_url || null,
      published: form.published,
      author: form.author,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
    };

    if (editingPost) {
      const { error } = await supabase
        .from("blog_posts")
        .update(payload)
        .eq("id", editingPost.id);
      if (error) {
        toast.error("Failed to update post");
        return;
      }
      toast.success("Post updated!");
    } else {
      const { error } = await supabase.from("blog_posts").insert(payload);
      if (error) {
        toast.error("Failed to create post: " + error.message);
        return;
      }
      toast.success("Post created!");
    }

    resetForm();
    loadPosts();
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.image_url || "",
      published: post.published,
      author: post.author,
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete");
      return;
    }
    toast.success("Post deleted");
    loadPosts();
  };

  const handleTogglePublish = async (post: BlogPost) => {
    const { error } = await supabase
      .from("blog_posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    if (error) {
      toast.error("Failed to update");
      return;
    }
    loadPosts();
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manage Blog Posts</CardTitle>
        <Button onClick={() => { resetForm(); setShowForm(!showForm); }} size="sm">
          <Plus className="mr-2 h-4 w-4" /> {showForm ? "Cancel" : "New Post"}
        </Button>
      </CardHeader>
      <CardContent>
        {showForm && (
          <div className="space-y-4 mb-8 p-4 border border-primary/20 rounded-lg">
            <Input
              placeholder="Post Title"
              value={form.title}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) });
              }}
            />
            <Input
              placeholder="URL Slug (auto-generated)"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
            <Input
              placeholder="Excerpt (short summary)"
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            />
            <Textarea
              placeholder="Content (HTML supported)"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="min-h-[200px]"
            />
            <Input
              placeholder="Image URL (optional)"
              value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            />
            <Input
              placeholder="SEO Meta Title (optional)"
              value={form.meta_title}
              onChange={(e) => setForm({ ...form, meta_title: e.target.value })}
            />
            <Input
              placeholder="SEO Meta Description (optional)"
              value={form.meta_description}
              onChange={(e) => setForm({ ...form, meta_description: e.target.value })}
            />
            <div className="flex items-center gap-2">
              <Switch
                checked={form.published}
                onCheckedChange={(checked) => setForm({ ...form, published: checked })}
              />
              <span className="text-sm">Published</span>
            </div>
            <Button onClick={handleSave}>
              {editingPost ? "Update Post" : "Create Post"}
            </Button>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="text-muted-foreground text-sm">/blog/{post.slug}</TableCell>
                <TableCell>
                  <Switch
                    checked={post.published}
                    onCheckedChange={() => handleTogglePublish(post)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                      <Pencil className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminBlogManager;
