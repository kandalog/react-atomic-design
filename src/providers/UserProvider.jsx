import React, { createContext, useState } from "react";

// 呼び出す際に使用する名前になる
export const UserContext = createContext();

// contextを返すcomponentを作成
export const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const { children } = props;
  const contextName = "tee";
  // valueの値がこのcomponentで囲った配下のcomponentで
  // 参照できるようになる
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
