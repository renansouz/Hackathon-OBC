import { ChevronDown, Home, Layers, LifeBuoy, Menu, Settings, User, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { AsideItem } from '@/components/asideItem';
import { useTheme } from '@/components/theme/theme-provider';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useAuth } from '@/context/auth-provider';
import Logo from '@/public/Logo.svg';
import LightLogo from '@/public/Logo-light.svg';
import LogoMenor from '@/public/only-logo-white.svg';

import { ClientMenu } from './ClientMenu';

export const ClientAside = () => {
  const { isAuthenticated } = useAuth();
  const { theme } = useTheme();
  const { setTheme } = useTheme();

  return (
    <>
      <aside className="fixed flex h-screen w-[20rem] flex-col items-center justify-between border-r-2 bg-card py-8 max-lg:w-20 max-lg:px-4 max-lg:py-4 max-sm:hidden max-sm:border-0 max-sm:px-0 ">
        <div className=" flex flex-col gap-y-10 max-lg:gap-0 max-sm:hidden">
          <div className="flex flex-col gap-y-1">
            <img
              src={theme === 'dark' ? Logo : LightLogo}
              alt=""
              className="mb-0 h-20 max-lg:hidden"
            />
            <img
              src={theme === 'dark' ? LogoMenor : LightLogo}
              alt=""
              className="img mb-10 h-11 items-center lg:hidden"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem link="/dashboard/services" title="Serviços" icon={Home} />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Serviços</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem
                    link="/dashboard/myschedules"
                    title="Meus Agendamentos"
                    icon={Layers}
                  />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Meus Agendamentos</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Dialog>
              <DialogTrigger>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={'ghost'}
                        className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0"
                      >
                        <Users />
                        <span className="max-lg:hidden">Grupos</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Grupos</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="gap-1 ">
                  <DialogTitle className="text-xl ">Desculpe-nos!</DialogTitle>
                  <DialogDescription className="pb-5 ">
                    A seção de grupos ainda não está disponível. Estamos trabalhando duro para
                    trazê-la até você nas próximas versões. Pedimos desculpas pela inconveniência e
                    agradecemos sua paciência.
                  </DialogDescription>
                  <span>Atenciosamente, MeetFlow</span>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="mt-[10%] flex w-full flex-col gap-y-1 max-lg:gap-0 max-sm:hidden">
          {!isAuthenticated && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AsideItem link="/register" title="fazer uma conta" icon={User} />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Fazer uma conta</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0"
                    >
                      <LifeBuoy />
                      <p className=" max-lg:hidden">suporte</p>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Suporte</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DialogContent className="h-2/3  overflow-y-auto">
              <DialogHeader className="my-5 flex items-center rounded-md bg-primary/40 p-10 text-center">
                <DialogTitle className="text-center text-2xl font-bold">
                  Bem-vindo ao <br /> Suporte MeetFlow!
                </DialogTitle>
                <DialogDescription className="text-base">
                  Estamos sempre presentes para te ajudar
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3">
                <div className="mb-5 flex  flex-col gap-2">
                  <h2 className="text-center text-2xl">Seções e Acessibilidade</h2>
                  <h3 className="mb-3 text-xl font-semibold">Aside</h3>
                  <p>
                    <span className="font-bold">Serviços:</span> Todos profissionais disponiveis na
                    plataforma
                  </p>
                  <p>
                    <span className="font-bold">Meus Agendamentos:</span> Confirme a data de seus
                    agendamentos marcados.
                  </p>
                  <p>
                    <span className="font-bold">Configurações: </span>Mude seu tema para claro ou
                    escuro de acordo com sua preferênciaz
                  </p>
                </div>
                <div className="mb-5 flex  flex-col gap-2">
                  <h3 className="mb-3 text-xl font-semibold">Opções perfil</h3>
                  <p>
                    <span className="font-bold">Sair: </span>Sair da sua conta
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-center text-2xl font-bold">Entre em Contato</h2>
                  <p>
                    <span className="font-bold">E-mail:</span> support@meetflow.com.
                  </p>
                  <p>
                    <span className="font-bold">Telefone: </span> Ligue para (+55) 9945-6162 durante
                    o horário comercial.
                  </p>
                  <h2 className="my-5 text-center text-2xl font-bold">Nosso Compromisso</h2>
                  <p>
                    Sua satisfação é nossa prioridade. Estamos aqui para garantir que sua
                    experiência com o MeetFlow seja suave e produtiva.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {isAuthenticated && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={'ghost'}
                    className="flex h-11 items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0"
                    asChild
                  >
                    <ClientMenu />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Usuário</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <Dialog>
            <DialogTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={'ghost'}
                      className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0"
                    >
                      <Settings className="text-primary-foreground" />
                      <p className="text-primary-foreground max-lg:hidden">Configurações</p>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Configurações</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Configurações</DialogTitle>
                <DialogDescription>
                  Personalize a aparência da página de acordo com seu gosto visual. Escolha entre um
                  dos nossos temas cuidadosamente criados para tornar sua experiência de navegação
                  mais agradável e personalizada.
                </DialogDescription>
              </DialogHeader>
              <label htmlFor="theme-select">Escolha o Tema:</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tema" />
                </SelectTrigger>
                <SelectContent className="flex flex-col">
                  <Button
                    className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                    onClick={() => setTheme('light')}
                    value={'light'}
                  >
                    Claro
                    <ChevronDown />
                  </Button>
                  <Button
                    className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                    onClick={() => setTheme('dark')}
                    value={'dark'}
                  >
                    Escuro
                    <ChevronDown />
                  </Button>
                </SelectContent>
              </Select>
            </DialogContent>
          </Dialog>
        </div>
      </aside>

      {/* PHONE MENU */}

      <div className="absolute left-2 top-3 h-10 items-center rounded-md bg-secondary sm:hidden">
        <Sheet>
          <SheetTrigger className="bg-card p-1">
            <Menu className="h-10 w-10 text-foreground " />
          </SheetTrigger>
          <SheetContent
            side={'left'}
            className="fixed flex h-screen w-auto flex-col items-center justify-between py-8 "
          >
            <div className="flex flex-col gap-y-1">
              <img src={theme === 'dark' ? Logo : LightLogo} alt="" className="mb-0 h-20" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      asChild
                      variant={'ghost'}
                      className="flex h-11 items-center justify-start gap-3 px-10 py-7 "
                    >
                      <Link to={'/dashboard/services'}>
                        <Home />
                        <span>Serviços</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Serviços</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      asChild
                      variant={'ghost'}
                      className="flex h-11 items-center justify-start gap-3 px-10 py-7 "
                    >
                      <Link to={'/dashboard/myschedules'}>
                        <Layers />
                        <span>Meus Agendamentos</span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Meus Agendamentos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Dialog>
                <DialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7 "
                        >
                          <Users />
                          <span>Grupos</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Grupos</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="gap-1 ">
                    <DialogTitle className="text-xl ">Desculpe-nos!</DialogTitle>
                    <DialogDescription className="pb-5 ">
                      A seção de grupos ainda não está disponível. Estamos trabalhando duro para
                      trazê-la até você nas próximas versões. Pedimos desculpas pela inconveniência
                      e agradecemos sua paciência.
                    </DialogDescription>
                    <span>Atenciosamente, MeetFlow</span>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-[10%] flex w-full flex-col gap-y-1 ">
              {!isAuthenticated && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        asChild
                        variant={'ghost'}
                        className="flex h-11 items-center justify-start gap-3 px-10 py-7 "
                      >
                        <Link to={'/register'}>
                          <User />
                          <span>Fazer uma conta</span>
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Fazer uma conta</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <Dialog>
                <DialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7"
                        >
                          <LifeBuoy />
                          <p className="">suporte</p>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Suporte</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="tex-xl text-primary">
                      Bem-vindo ao Suporte MeetFlow!
                    </DialogTitle>
                    <DialogDescription className="pb-3 text-base">
                      Estamos aqui para ajudar você a aproveitar ao máximo a plataforma MeetFlow. Se
                      surgirem dúvidas ou problemas, nossa equipe está pronta para auxiliar.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl text-primary">Como Podemos Ajudar?</h2>
                      <p>
                        <span className="text-gray-500">FAQ:</span> Encontre respostas rápidas para
                        suas perguntas mais comuns.
                      </p>
                      <p>
                        <span className="text-gray-500">Tutoriais e Guias:</span> Explore nossos
                        guias passo a passo para dominar a plataforma.
                      </p>
                      <p>
                        <span className="text-gray-500">Suporte Direto: </span>
                        Entre em contato conosco para assistência personalizada.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl text-primary">Entre em Contato</h2>
                      <p>
                        <span className="text-gray-500">E-mail:</span> Envie suas dúvidas para
                        support@meetflow.com.
                      </p>
                      <p>
                        <span className="text-gray-500">Telefone: </span> Ligue para (+55) 9945-6162
                        durante o horário comercial.
                      </p>
                      <h2 className="text-xl text-primary">Nosso Compromisso</h2>
                      <p>
                        Sua satisfação é nossa prioridade. Estamos aqui para garantir que sua
                        experiência com o MeetFlow seja suave e produtiva.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {isAuthenticated && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant={'ghost'}
                        className="flex h-11 items-center justify-start gap-3 px-10 py-7"
                        asChild
                      >
                        <ClientMenu />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Usuário</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              <Dialog>
                <DialogTrigger>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={'ghost'}
                          className="flex h-11 w-full items-center justify-start gap-3 px-10 py-7"
                        >
                          <Settings className="text-primary-foreground" />
                          <p className="text-primary-foreground ">Configurações</p>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Configurações</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Configurações</DialogTitle>
                    <DialogDescription>
                      Personalize a aparência da página de acordo com seu gosto visual. Escolha
                      entre um dos nossos temas cuidadosamente criados para tornar sua experiência
                      de navegação mais agradável e personalizada.
                    </DialogDescription>
                  </DialogHeader>
                  <label htmlFor="theme-select">Escolha o Tema:</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tema" />
                    </SelectTrigger>
                    <SelectContent className="flex flex-col">
                      <Button
                        className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                        onClick={() => setTheme('light')}
                        value={'light'}
                      >
                        Claro
                        <ChevronDown />
                      </Button>
                      <Button
                        className="w-full items-start justify-between bg-background p-2 text-lg text-foreground hover:bg-primary"
                        onClick={() => setTheme('dark')}
                        value={'dark'}
                      >
                        Escuro
                        <ChevronDown />
                      </Button>
                    </SelectContent>
                  </Select>
                </DialogContent>
              </Dialog>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
