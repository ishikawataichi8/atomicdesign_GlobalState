import { Header } from "../molecules/layout/Header";

export const HeaderOnly = (props) => {
  //propsの変数名をchildrenにするとheaderonlyの子要素全てを取得できる
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
