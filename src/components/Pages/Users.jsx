import styled from "styled-components";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SearchInput } from "../molecules/SearchInput.jsx";
import { UserCard } from "../organisms/user/UserCard.jsx";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `tee-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "sample",
    phone: "090-1111-0000",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザ一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
