import { Separator } from '@radix-ui/react-separator';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className="px-10 pt-10 flex flex-col jus">
            <h1 className="text-2xl">{title}</h1>
            <Separator orientation="horizontal" className="w-full h-0.5 my-10 bg-white" />
        </div>
    );
};
