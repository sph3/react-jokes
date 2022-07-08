import { MouseEvent } from 'react';
import { ArrowCounterClockwise } from 'phosphor-react';

export const JokeContainer = () => {
  const reloadPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.reload();
  };

  const fetchJoke = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='flex flex-col justify-center items-center mt-6 px-4'>
      <span className='font-bold text-2xl text-subtext1'>
        So anyway, here's a joke:
      </span>
      <div className='w-full h-auto max-h-32 p-4 bg-mantle mt-4 rounded-2xl border-2 border-crust overflow-y-scroll'>
        <span className='text-subtext0 text-sm'>
          You better watch out, you better not cry; you better not pout, I'm
          telling you why - Chuck Norris is coming to kill you. And have sex
          with every female member of your family.
        </span>
      </div>
      <span className='font-bold text-subtext1 text-2xl mt-6'>
        Did you like it?
      </span>
      <span className='font-bold text-subtext1 text-xl text-center mt-2'>
        Well, you can always{' '}
        <button
          onClick={reloadPage}
          className='text-blue focus:outline-none focus:underline hover:underline'
        >
          reload the page
        </button>{' '}
        or click{' '}
        <button className='text-blue focus:outline-none focus:underline hover:underline'>
          this button below
        </button>{' '}
        for a brand new joke!
      </span>

      <button
        onClick={fetchJoke}
        className='mt-6 bg-blue rounded-2xl p-6 text-base hover:brightness-[.85] transition duration-100 focus:ring focus:ring-red focus:outline-none'
      >
        <ArrowCounterClockwise size={32} weight='bold' />
      </button>
    </div>
  );
};
