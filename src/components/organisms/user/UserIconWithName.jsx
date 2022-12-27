//グローバルステートを受け取るのに必要
import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  //userInfoが存在していればuserInfo.isAdminを、存在していなければfalseを代入する
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage heiht={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {/* isAdminがtrueならSEditを表示する */}
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.p`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
