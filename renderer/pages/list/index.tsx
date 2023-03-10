import React, { useEffect, useState } from "react";
import { getUserList, makeChatRoom } from "../../src/apis/firebase";
import { useAuthContext } from "../../src/context/AuthContext";
import SideBar from "../../src/components/Sidebar";
import { Avatar, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../src/components/ui/LoadingSpinner";

interface IUserList {
  email: string;
  name: string;
  userId: string;
}

export default function list() {
  const { uid, name, email } = useAuthContext();
  const router = useRouter();

  const { isLoding, data: userList } = useQuery<IUserList[] | unknown[]>(
    ["chatList"],
    getUserList,
    { staleTime: 1000 * 60 * 5 }
  );

  const handleGoChatRoom = (yourId, yourName) => {
    makeChatRoom(uid, name, yourId, yourName).then((roomId) => {
      router.push({
        pathname: `chat/${roomId}`,
        query: {
          roomId,
          yourName,
        },
      });
    });
  };

  return (
    <SideBar>
      <p>유저를 클릭하면 1:1 채팅방을 생성합니다.</p>
      <p>이미 채팅방이 존재하는 경우 생성된 채팅방으로 이동합니다.</p>
      <hr />
      {isLoding && <LoadingSpinner />}
      {userList?.map((user, index) => {
        if (user.name === name || user.email === email) return;
        else {
          return (
            <section className="userBox" key={index}>
              <div className="wrapper">
                <Space wrap size={16}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Space>
                <span className="name">{user.name}</span>
                <span className="email">{user.email}</span>
              </div>
              <Button onClick={() => handleGoChatRoom(user.userId, user.name)}>
                1:1 채팅하기
              </Button>
            </section>
          );
        }
      })}
    </SideBar>
  );
}
