import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//const SButton = BaseButton;とやるとスタイルの変更点を加えることができない
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
