import { SidebarSimple, Sun } from 'phosphor-react';

export const Header = () => {
  return (
    <header className='bg-mantle h-16 py-5 px-2 w-full flex items-center justify-between border-b border-crust'>
      <button className='bg-base h-10 w-10 rounded-xl flex justify-center items-center hover:brightness-[1.2]'>
        <SidebarSimple size={20} />
      </button>
      <span className='font-bold text-xl'>React Jokes 😀</span>
      <button className='bg-base h-10 w-10 rounded-xl flex justify-center items-center animate-pulse hover:animate-none hover:brightness-[1.2]'>
        <Sun size={20} />
      </button>
    </header>
  );
};
