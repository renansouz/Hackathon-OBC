import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { ServicesCard } from './ServicesCard';

export function MySchedules() {
    return (
        <>
            <div className="flex h-lvh items-center justify-center">
                <p className="text-center">Você precisa de uma conta para ter acesso a página meus agendamentos</p>
            </div>

            <Card className="m-[5%] p-5 ">
                <CardHeader>
                    <CardTitle>Meus agendamentos</CardTitle>
                    <CardDescription>Verifique todos os seus agendamentos pendentes</CardDescription>
                </CardHeader>
                <CardContent>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </CardContent>
            </Card>
        </>
    );
}