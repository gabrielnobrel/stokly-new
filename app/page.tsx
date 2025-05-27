import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "./_components/header";
import { Button } from "./_components/ui/button";

const Home = () => {
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
        </HeaderLeft>

        <HeaderRight>
          <Button>Adicionar</Button>
        </HeaderRight>
      </Header>
    </div>
  );
};
export default Home;
