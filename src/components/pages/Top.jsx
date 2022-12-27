import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//リンク以外での画面遷移に必要
import { useHistory } from "react-router-dom";
//グローバルステートを受け取るのに必要
import React, { useContext } from "react";
//globalStateの変数名もimportする
import { UserContext } from "../../providers/UserProvider";
//globalステート名を引数に取る

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    //グローバルステートを更新する際にはその子要素も再レンダリングされるので注意する
    setUserInfo({ isAdmin: true });
    //push("url")またはpush{pathname:"url"}でurlを変更できるまたpush{pathname:"url",A:aaa}などとステート(変数)をリンク先に渡せる}
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
