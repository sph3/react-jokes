interface IThemeChangerProps {
  changeThemeFunction: () => void;
}

export const ThemeChanger = ({ changeThemeFunction }: IThemeChangerProps) => {
  return (
    <div className='bg-base h-screen w-full absolute z-50 flex flex-col justify-start text-center p-6'>
      <span className='text-3xl font-bold'>Choose your theme!</span>
      <div className='flex mt-6 gap-4 items-center justify-evenly'>
        {/* Still gonna make this dynamically */}
        <div className='bg-base border-2 border-crust rounded-2xl w-40 h-24 p-4'>
          <span className=''>Placeholder</span>
        </div>
        <div className='bg-light-base rounded-2xl w-40 h-24 p-4'>
          <span className='text-light-text'>Placeholder</span>
        </div>
      </div>
    </div>
  );
};
