import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { Card } from "../../atoms/card/Card";
export const UserCard = (props) => {
  const { user } = props;

  const context = useContext(UserContext);
  console.log(context);

  return (
    <Card>
      <img height={160} width={160} src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <SDL>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
