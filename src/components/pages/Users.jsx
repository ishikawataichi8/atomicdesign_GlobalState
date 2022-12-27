import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `秋田犬${val}`,
    img: "https://www.pakutaso.com/shared/img/thumb/paku1210A1130_TP_V.jpg",
    email: "12345@example.com",
    phone: "000-999-1234",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});
//コンポーネントは<コンポーネント></コンポーネント>ではさむ使い方<コンポーネント/>の二つがある
export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard user={user}></UserCard>;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
`;
