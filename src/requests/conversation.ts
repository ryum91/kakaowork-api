import { request } from './axios';
import { BaseResponse, ConversationResponse, ConversationsResponse, UsersResponse } from './types';

const URL = {
  open: '/v1/conversations.open',
  list: '/v1/conversations.list',
  users: (conversationId: number) => `/v1/conversations/${conversationId}/users`,
  invite: (conversationId: number) => `/v1/conversations/${conversationId}/invite`,
  kick: (conversationId: number) => `/v1/conversations/${conversationId}/kick`
};

/**
 * Bot과 멤버 간 1:1(일대일) 채팅방을 생성합니다. 이미 채팅방이 생성되어 있으면, 채팅방을 새로 시작하지 않고 해당 채팅방의 정보를 반환합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationsopen
 *
 * @param userId
 * @returns
 */
export const requestConversationsOpenDM = (userId: number) => {
  return request<ConversationResponse>({
    method: 'POST',
    url: URL.open,
    data: {
      user_id: userId
    }
  });
};

/**
 * Bot과 멤버 간 그룹 채팅방을 생성합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationsopen
 *
 * @param userIds
 * @returns
 */
export const requestConversationsOpenGroup = (userIds: number[]) => {
  return request<ConversationResponse>({
    method: 'POST',
    url: URL.open,
    data: {
      user_ids: userIds
    }
  });
};

/**
 * Bot이 생성한 채팅방 리스트를 조회합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationslist
 *
 * @param params
 * @returns
 */
export const requestConversationsList = (params?: { limit?: number; cursor?: string }) => {
  return request<ConversationsResponse>({
    method: 'GET',
    url: URL.list,
    params: {
      limit: params?.limit,
      cursor: params?.cursor
    }
  });
};

/**
 * Bot이 생성한 특정 채팅방에 참여한 사용자 리스트를 조회합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationsusers
 *
 * @param conversationId
 * @returns
 */
export const requestConversationsUsers = (conversationId: number) => {
  return request<UsersResponse>({
    method: 'GET',
    url: URL.users(conversationId)
  });
};

/**
 * Bot이 생성한 특정 그룹 채팅방에 사용자를 초대합니다.
 * 단 대화방 생성시 사용자와의 1:1 대화방으로 생성한 경우에는 다른 사용자를 초대할 수 없습니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationsinvite
 *
 * @param conversationId
 * @param userIds
 * @returns
 */
export const requestConversationsInvite = (conversationId: number, userIds: number[]) => {
  return request<BaseResponse>({
    method: 'POST',
    url: URL.invite(conversationId),
    data: {
      user_ids: userIds
    }
  });
};

/**
 * Bot이 생성한 특정 그룹 채팅방에 있는 사용자를 내보냅니다.
 * 단 대화방 생성시 사용자와의 1:1 채팅방으로 생성한 대화방은 사용자를 내보내기할 수 없습니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#conversationskick
 *
 * @param conversationId
 * @param userIds
 * @returns
 */
export const requestConversationsKick = (conversationId: number, userIds: number[]) => {
  return request<BaseResponse>({
    method: 'POST',
    url: URL.kick(conversationId),
    data: {
      user_ids: userIds
    }
  });
};
