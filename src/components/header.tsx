import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import TopNavigationMenu from "@/components/top-navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50 shadow-sm dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold mr-4">
              Logo
            </Link>
            <TopNavigationMenu />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
