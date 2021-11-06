import { request } from './axios';

const URL = {
  info: '/v1/users.info',
  findByEmail: '/v1/users.find_by_email',
  findByPhoneNumber: '/v1/users.find_by_phone_number',
  list: '/v1/users.list',
  setWorkTime: '/v1/users.set_work_time',
  setVacationTime: '/v1/users.set_vacation_time'
};

export interface UserResponse extends BaseResponse {
  user: User;
}

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#usersinfo
 *
 * @param userId
 * @returns
 */
export const requestUsersInfo = (userId: number) => {
  return request<UserResponse>({
    method: 'GET',
    url: URL.info,
    params: {
      user_id: userId
    }
  });
};

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#usersfind_by_email
 *
 * @param email
 * @returns
 */
export const requestUsersFindByEmail = (email: string) => {
  return request<UserResponse>({
    method: 'GET',
    url: URL.findByEmail,
    params: {
      email
    }
  });
};

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#usersfind_by_phone_number
 *
 * @param phoneNumber
 * @returns
 */
export const requestUsersFindByPhoneNumber = (phoneNumber: string) => {
  return request<UserResponse>({
    method: 'GET',
    url: URL.findByEmail,
    params: {
      phone_number: phoneNumber
    }
  });
};

export interface UsersResponse extends BaseResponse {
  users: User[];
}

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#userslists
 *
 * @param params
 * @returns
 */
export const requestUsersList = (params?: { limit?: number; cursor?: string }) => {
  return request<UsersResponse>({
    method: 'GET',
    url: URL.list,
    params: {
      limit: params?.limit,
      cursor: params?.cursor
    }
  });
};

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#usersset_work_time
 *
 * @param params
 * @returns
 */
export const requestUsersSetWorkTime = (params: { userId: number; startTime: number; endTime: number }) => {
  return request<BaseResponse>({
    method: 'POST',
    url: URL.setWorkTime,
    data: {
      user_id: params.userId,
      work_start_time: params.startTime,
      work_end_time: params.endTime
    }
  });
};

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#usersset_vacation_time
 *
 * @param params
 * @returns
 */
export const requestUsersSetVacationTime = (params: { userId: number; startTime: number; endTime: number }) => {
  return request<BaseResponse>({
    method: 'POST',
    url: URL.setVacationTime,
    data: {
      user_id: params.userId,
      vacation_start_time: params.startTime,
      vacation_end_time: params.endTime
    }
  });
};
