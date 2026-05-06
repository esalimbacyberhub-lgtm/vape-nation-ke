import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import logo from "@/assets/vape-nation-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#shop" },
    { name: "Categories", href: "#categories" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10"
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Vape Nation KE - Premium Vape Store in Nairobi, Kenya"
              className="h-[60px] w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors tracking-wider text-sm uppercase font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors tracking-wider text-sm uppercase font-medium"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary/30 hover:border-primary/60 text-xs tracking-widest uppercase">
                Admin
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:text-primary">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-primary/10" style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(20px)' }}>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) =>
                    item.href.startsWith("/") ? (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
