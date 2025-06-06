import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/toggle-theme/toggle-theme";
import Image from "next/image";
import Link from "next/link";

const LOGO_WIDTH = 150;
const LOGO_HEIGHT = 150;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const ListItem = ({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-500">{children}</div>
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav
      className="max-w-max shadow-md fixed 
        left-1/2 -translate-x-1/2 z-50 md:flex
        w-full top-5 gap-3
        rounded-full border border-dark/[0.9] 
        dark:bg-background
        dark:border-white/[0.2]
       bg-white shadow-input 
       justify-center 
       items-center 
        px-4 py-2"
    >
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="h-14 overflow-hidden flex items-center">
          <Link href="/">
            <Image
              src="/logo-dark.png"
              className="hidden dark:block"
              alt="logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
            <Image
              src="/logo-white.png"
              className="block dark:hidden"
              alt="logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
