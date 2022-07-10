interface IThemeChangerProps {
  changeThemeFunction: () => void;
}

export const ThemeChanger = ({ changeThemeFunction }: IThemeChangerProps) => {
  return (
    <div className='bg-base h-screen w-full absolute z-50 flex flex-col justify-start text-center p-6'>
      <span className='text-3xl font-bold'>Choose your theme!</span>
      <div className='flex mt-6 gap-4 items-center justify-evenly'>
        {/* Still gonna make this dynamically */}
        <div className='bg-base border-2 border-crust rounded-2xl w-40 h-24 p-4 flex flex-col text-center justify-center'>
          <span className=''>Dark theme</span>
          <div className='flex flex-row mt-2 justify-between'>
            <span className='bg-red h-4 w-4 rounded-full'></span>
            <span className='bg-blue h-4 w-4 rounded-full'></span>
            <span className='bg-green h-4 w-4 rounded-full'></span>
            <span className='bg-yellow h-4 w-4 rounded-full'></span>
            <span className='bg-mauve h-4 w-4 rounded-full'></span>
          </div>
        </div>
        <div className='bg-light-base border-2 rounded-2xl w-40 h-24 p-4 flex flex-col text-center justify-center'>
          <span className='text-light-text'>Light theme</span>
          <div className='flex flex-row mt-2 justify-between'>
            <span className='bg-light-red h-4 w-4 rounded-full'></span>
            <span className='bg-light-blue h-4 w-4 rounded-full'></span>
            <span className='bg-light-green h-4 w-4 rounded-full'></span>
            <span className='bg-light-yellow h-4 w-4 rounded-full'></span>
            <span className='bg-light-mauve h-4 w-4 rounded-full'></span>
          </div>
        </div>
      </div>
    </div>
  );
};
