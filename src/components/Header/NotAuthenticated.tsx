import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

//import { useAuth } from '@/context/auth-provider';
import { useTheme } from '@/components/theme/theme-provider';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';

import { ThemeToggle } from '../theme/theme-toggle';

export const NotAuthenticated = () => {
  //const { setAuth, isAuth } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="relative w-screen border-b bg-background">
      <div className="flex max-h-24 items-center justify-between gap-6 px-6">
        <Link to={'/'}>
          <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="max-h-28" />
        </Link>
        <div>
          <div className="mr-8 flex gap-5 text-xl max-lg:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={'/'}>Início</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={'/about'}>Sobre</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={'/login'}>Profissional</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to={'/login'}>Entrar</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className="group ml-10 inline-flex h-10 w-max items-center justify-center rounded-md bg-background bg-indigo-600 px-6 py-2 text-white"
                  >
                    <Link to={'/register'}>Agende Agora!</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem></NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <div className="mr-8 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-10 w-10" />
              </SheetTrigger>
              <SheetContent className="fixed">
                <div className="mt-20 flex flex-col items-center ">
                  <Link
                    to={'/'}
                    className="w-full rounded-md border-solid p-4 text-center hover:bg-accent"
                  >
                    Início
                  </Link>
                  <Separator />
                  <Link
                    to={'/about'}
                    className="w-full rounded-md border-solid p-4 text-center hover:bg-accent "
                  >
                    Sobre
                  </Link>
                  <Separator />
                  <Link
                    to={'/login'}
                    className="w-full rounded-md border-solid p-4 text-center hover:bg-accent "
                  >
                    Área do Profissional
                  </Link>
                  <Separator />
                  <Link
                    to={'/register'}
                    className="mt-10 w-full rounded-md border-solid bg-primary p-4 text-center hover:bg-primary/90 "
                  >
                    Agende Agora!
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
