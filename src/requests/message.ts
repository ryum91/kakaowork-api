import { request } from './axios';
import { Message, MessageResponse } from './types';

const URL = {
  send: '/v1/messages.send',
  sendByEmail: '/v1/messages.send_by_email'
};

/**
 * 특정 채팅방에 새로운 메시지를 전송합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/messages/#messagessend
 *
 * @param conversationId
 * @param param1
 * @returns
 */
export const requestMessagesSend = (conversationId: number, { text, blocks }: Message) => {
  return request<MessageResponse>({
    method: 'POST',
    url: URL.send,
    data: {
      conversation_id: conversationId,
      text,
      blocks
    }
  });
};

/**
 * 이메일(Email) 주소를 통해 특정 사용자를 찾고,
 * 해당 사용자와의 1:1 채팅방에 메시지를 전송합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/messages/#messagessend_by_email
 *
 * @param email
 * @param param1
 * @returns
 */
export const requestMessagesSendByEmail = (email: string, { text, blocks }: Message) => {
  return request<MessageResponse>({
    method: 'POST',
    url: URL.sendByEmail,
    data: {
      email,
      text,
      blocks
    }
  });
};
