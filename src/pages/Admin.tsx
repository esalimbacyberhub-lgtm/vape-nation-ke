import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { User, Session } from "@supabase/supabase-js";
import { LogOut, Plus, Trash2, Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import AdminBlogManager from "@/components/AdminBlogManager";

interface Product {
  id: string;
  name: string;
  price: number;
  puffs: string;
  flavor: string;
  image: string;
  popular: boolean;
  badge: string;
  category: string;
  display_order: number;
}

const emptyProduct = {
  name: "",
  puffs: "",
  flavor: "",
  price: 0,
  image: "",
  popular: false,
  badge: "",
  category: "disposable",
  display_order: 100,
};

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<Product>>({});
  const [newProduct, setNewProduct] = useState(emptyProduct);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();

      if (error || !data) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
      setLoading(false);
      loadProducts();
    };

    if (user) {
      checkAdmin();
    } else if (session === null) {
      navigate("/auth");
    }
  }, [user, session, navigate]);

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("display_order");

    if (error) {
      toast.error("Failed to load products");
      return;
    }

    setProducts(data || []);
  };

  const handleUpdate = async (id: string) => {
    const updates: Record<string, unknown> = {};
    if (editData.price !== undefined) updates.price = editData.price;
    if (editData.name !== undefined) updates.name = editData.name;
    if (editData.puffs !== undefined) updates.puffs = editData.puffs;
    if (editData.flavor !== undefined) updates.flavor = editData.flavor;
    if (editData.image !== undefined) updates.image = editData.image;
    if (editData.badge !== undefined) updates.badge = editData.badge;
    if (editData.category !== undefined) updates.category = editData.category;
    if (editData.popular !== undefined) updates.popular = editData.popular;
    if (editData.display_order !== undefined) updates.display_order = editData.display_order;

    if (Object.keys(updates).length === 0) {
      setEditingId(null);
      return;
    }

    const { error } = await supabase
      .from("products")
      .update(updates)
      .eq("id", id);

    if (error) {
      toast.error("Failed to update product");
      return;
    }

    toast.success("Product updated!");
    setEditingId(null);
    setEditData({});
    loadProducts();
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.puffs || !newProduct.flavor || !newProduct.badge || newProduct.price <= 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    const { error } = await supabase
      .from("products")
      .insert([newProduct]);

    if (error) {
      toast.error("Failed to add product");
      console.error(error);
      return;
    }

    toast.success("Product added!");
    setNewProduct(emptyProduct);
    setAddDialogOpen(false);
    loadProducts();
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Failed to delete product");
      return;
    }

    toast.success("Product deleted!");
    loadProducts();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const startEditing = (product: Product) => {
    setEditingId(product.id);
    setEditData({ ...product });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Manage Products ({products.length})</CardTitle>
            <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
              <DialogTrigger asChild>
                <Button><Plus className="mr-2 h-4 w-4" />Add Product</Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label>Name *</Label>
                    <Input value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder="e.g. KK Energy 2 Blueberry Ice" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Price (KSH) *</Label>
                      <Input type="number" value={newProduct.price || ""} onChange={(e) => setNewProduct({ ...newProduct, price: parseInt(e.target.value) || 0 })} />
                    </div>
                    <div className="grid gap-2">
                      <Label>Category *</Label>
                      <Select value={newProduct.category} onValueChange={(v) => setNewProduct({ ...newProduct, category: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disposable">Disposable Vapes</SelectItem>
                          <SelectItem value="juice">Vape Juice</SelectItem>
                          <SelectItem value="pods">Pod Kits</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Puffs *</Label>
                      <Input value={newProduct.puffs} onChange={(e) => setNewProduct({ ...newProduct, puffs: e.target.value })} placeholder="e.g. 5000 Puffs" />
                    </div>
                    <div className="grid gap-2">
                      <Label>Flavor *</Label>
                      <Input value={newProduct.flavor} onChange={(e) => setNewProduct({ ...newProduct, flavor: e.target.value })} placeholder="e.g. Blueberry Ice" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Badge *</Label>
                    <Input value={newProduct.badge} onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value })} placeholder="e.g. 5,000 PUFFS" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Image URL</Label>
                    <Input value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} placeholder="/lovable-uploads/..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Display Order</Label>
                      <Input type="number" value={newProduct.display_order} onChange={(e) => setNewProduct({ ...newProduct, display_order: parseInt(e.target.value) || 100 })} />
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <Switch checked={newProduct.popular} onCheckedChange={(v) => setNewProduct({ ...newProduct, popular: v })} />
                      <Label>Popular</Label>
                    </div>
                  </div>
                  <Button onClick={handleAddProduct} className="w-full">Add Product</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Puffs</TableHead>
                    <TableHead>Flavor</TableHead>
                    <TableHead>Price (KSH)</TableHead>
                    <TableHead>Popular</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium max-w-[200px]">
                        {editingId === product.id ? (
                          <Input value={editData.name ?? product.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
                        ) : product.name}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Select value={editData.category ?? product.category} onValueChange={(v) => setEditData({ ...editData, category: v })}>
                            <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="disposable">Disposable</SelectItem>
                              <SelectItem value="juice">Juice</SelectItem>
                              <SelectItem value="pods">Pods</SelectItem>
                              <SelectItem value="accessories">Accessories</SelectItem>
                            </SelectContent>
                          </Select>
                        ) : product.category}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Input value={editData.puffs ?? product.puffs} onChange={(e) => setEditData({ ...editData, puffs: e.target.value })} className="w-28" />
                        ) : product.puffs}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Input value={editData.flavor ?? product.flavor} onChange={(e) => setEditData({ ...editData, flavor: e.target.value })} className="w-28" />
                        ) : product.flavor}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Input type="number" value={editData.price ?? product.price} onChange={(e) => setEditData({ ...editData, price: parseInt(e.target.value) || 0 })} className="w-24" />
                        ) : `KSH ${product.price.toLocaleString()}`}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Switch checked={editData.popular ?? product.popular} onCheckedChange={(v) => setEditData({ ...editData, popular: v })} />
                        ) : (product.popular ? "🔥 Yes" : "No")}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <Input type="number" value={editData.display_order ?? product.display_order} onChange={(e) => setEditData({ ...editData, display_order: parseInt(e.target.value) || 0 })} className="w-16" />
                        ) : product.display_order}
                      </TableCell>
                      <TableCell>
                        {editingId === product.id ? (
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => handleUpdate(product.id)}>Save</Button>
                            <Button size="sm" variant="outline" onClick={() => { setEditingId(null); setEditData({}); }}>Cancel</Button>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => startEditing(product)}>
                              <Pencil className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete(product.id, product.name)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <AdminBlogManager />
        </div>
      </div>
    </div>
  );
};

export default Admin;
