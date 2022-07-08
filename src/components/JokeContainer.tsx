export const JokeContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-14'>
      <span className='font-bold text-2xl'>Here's a joke:</span>
      <div className='w-11/12 h-32 p-4 bg-mantle m-auto mt-4 rounded-2xl border-2 border-crust'>
        <span className='text-subtext0'>
          You better watch out, you better not cry; you better not pout, I'm
          telling you why - Chuck Norris is coming to kill you. And have sex
          with every female member of your family.
        </span>
      </div>
    </div>
  );
};
