import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ChatInput from "../../src/components/chat/ChatInput";
import ChatMsg from "../../src/components/chat/ChatMsg";
import SideBar from "../../src/components/Sidebar";
import { useAuthContext } from "../../src/context/AuthContext";
import useChat from "../../src/hooks/useChat";
import useScroll from "../../src/hooks/useScroll";
import useMsg from "../../src/hooks/useMsg";

export default function chatRoom() {
  const {
    query: { roomId, yourName },
  } = useRouter();
  const { uid, name } = useAuthContext();

  const {
    chatQuery: { data: chat },
    sendMsgQuery,
  } = useChat(roomId as string);

  const { chatWindowRef } = useScroll(chat);
  const { message, handleChange, handleSubmit } = useMsg(sendMsgQuery, {
    roomId,
    uid,
    name,
  });

  return (
    <SideBar>
      <p className="chatptag">{yourName}님과의 채팅방</p>
      <hr />

      <section className="chatForm" ref={chatWindowRef}>
        <div className="chatWindow">
          {chat?.length === 0 && (
            <p className="chatptag">
              지금 바로 {yourName}님과 채팅을 시작해보세요!
            </p>
          )}
          {chat?.map((chat, index) => {
            if (chat.name == name) {
              return (
                <div key={index} className="mychat">
                  <ChatMsg chat={chat} />
                </div>
              );
            } else {
              return (
                <div key={index} className="yourchat">
                  <ChatMsg chat={chat} />
                </div>
              );
            }
          })}
        </div>
      </section>

      <ChatInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={message}
      />
    </SideBar>
  );
}
