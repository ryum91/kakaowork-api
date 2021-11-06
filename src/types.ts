import { MessageBlock } from './blocks/types';
export interface BaseResponse {
  success: boolean;
  error?: ErrorData;
}

export interface ErrorData {
  code: string;
  message: string;
}

export interface UserResponse extends BaseResponse {
  user: User;
}

export interface UsersResponse extends BaseResponse {
  users: User[];
  cursor?: string;
}

export interface ConversationResponse extends BaseResponse {
  conversation: Conversation;
}

export interface ConversationsResponse extends BaseResponse {
  conversations: Conversation[];
  cursor?: string;
}

export interface MessageResponse extends BaseResponse {
  message: {
    id: string;
    text: string;
    user_id: number;
    conversation_id: number;
    send_time: number;
    update_time: number;
    blocks?: MessageBlock[];
  };
}

export interface DepartmentsResponse extends BaseResponse {
  departments: Department[];
  cursor?: string;
}

export interface SpaceResponse extends BaseResponse {
  space: Space;
}

export interface BotResponse extends BaseResponse {
  info: Bot;
}

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#response
 */
export interface User {
  id: number;
  space_id: string;
  name: string;
  nickname?: string;
  avatar_url?: string;
  department?: string;
  identifications: UserIdentification[];
  position?: string;
  responsibility?: string;
  tels?: string[];
  mobiles: string[];
  work_start_time: number;
  work_end_time: number;
  vacation_start_time: number;
  vacation_end_time: number;
}

export interface UserIdentification {
  type: string;
  value: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/conversations/#response
 */
export interface Conversation {
  id: number;
  type: 'dm' | 'group';
  users_count: number;
  avatar_url?: string;
  name?: string;
}

export interface Message {
  text: string;
  blocks?: MessageBlock[];
}

export interface Department {
  id: string;
  space_id: string;
  name: string;
  code: string;
  user_count: number;
  has_child?: boolean;
  depth?: number;
  user_ids?: number[];
  leader_ids?: number[];
  ancestry?: string;
}

export interface Space {
  id: string;
  kakaoi_org_id: string;
  name: string;
  logo_url?: string;
}

export interface Bot {
  title: string;
  status: 'activated' | 'deactivated';
}
