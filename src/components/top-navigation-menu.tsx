import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ListItem from "@/components/list-item";

const TopNavigationMenu = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_.75fr] xl:w-[900px] xl:grid-cols-[1fr_1fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Fin.ai
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        AI-powered tools for financial planning, analysis, and advice.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/financial-review" title="Financial Review">
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Review your financial situation and get advice from our AI.
                  </p>
                </ListItem>
                <ListItem href="/financial-planning" title="Financial Planning">
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Plan your financial future and get suggestions.
                  </p>
                </ListItem>
                <ListItem href="/financial-results" title="Financial Results">
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    View and download your financial report history.
                  </p>
                </ListItem>
                <ListItem href="/financial-analysis" title="Financial Analysis">
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Analyze multiple financial situations and find the best strategy.
                  </p>
                </ListItem>
                <ListItem href="/financial-advice" title="Financial Advice">
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Get advice on your financial decisions.
                  </p>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default TopNavigationMenu;
