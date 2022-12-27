import styled from "styled-components";
import { UserIconWithName } from "./UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <SCard>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </SCard>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;

  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

const SCard = styled.div`
  background: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
