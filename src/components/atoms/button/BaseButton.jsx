//PrimaryButtonとSecondaryButtonはatomにあたる
// PrimaryButtonとSecondaryButtonの共通のスタイルを保持
import styled from "styled-components";
//styledコンポーネントもexportできる
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 9999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
