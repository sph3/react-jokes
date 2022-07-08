import { About } from "./components/About";
import { Header } from "./components/Header";
import { JokeContainer } from "./components/JokeContainer";

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <JokeContainer />
    </div>
  );
};
