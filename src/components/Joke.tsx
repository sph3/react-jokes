interface IJoke {
  joke: string;
}

export const Joke = ({ joke }: IJoke) => {
  return <span className='text-subtext0'>{joke}</span>;
};
