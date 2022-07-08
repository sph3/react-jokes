import { MouseEvent } from 'react';

export const JokeContainer = () => {
  const reloadPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div className='flex flex-col justify-center items-center mt-6 px-4'>
      <span className='font-bold text-2xl'>So anyway, here's a joke:</span>
      <div className='w-full h-auto max-h-32 p-4 bg-mantle mt-4 rounded-2xl border-2 border-crust overflow-y-scroll'>
        <span className='text-subtext0 text-sm'>
          You better watch out, you better not cry; you better not pout, I'm
          telling you why - Chuck Norris is coming to kill you. And have sex
          with every female member of your family.
        </span>
      </div>
      <span className='font-bold text-2xl mt-4'>Did you like it?</span>
      <span className='font-bold text-xl text-center'>
        Well, you can always{' '}
        <button onClick={reloadPage} className='text-blue'>
          reload the page
        </button>{' '}
        or click{' '}
        <a href='' className='text-blue'>
          this button below
        </a>{' '}
        for a brand new joke!
      </span>
    </div>
  );
};
