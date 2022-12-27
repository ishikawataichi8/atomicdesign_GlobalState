//globalstate(グローバルな変数)を扱うのに必要
import React, { createContext, useState } from "react";

//初期化は必要ないので空のオブジェクトを渡す
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
