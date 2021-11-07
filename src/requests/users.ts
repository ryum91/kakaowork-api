import { BaseResponse } from './types';
import { request } from './axios';
import { UserResponse, UsersResponse } from './types';

const URL = {
  info: '/v1/users.info',
  findByEmail: '/v1/users.find_by_email',
  findByPhoneNumber: '/v1/users.find_by_phone_number',
  list: '/v1/users.list',
  setWorkTime: '/v1/users.set_work_time',
  setVacationTime: '/v1/users.set_vacation_time'
};

/**
 * 워크스페이스에 속한 특정 멤버의 상세 정보를 얻습니다.
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
 * 이메일 주소를 이용하여 특정 워크스페이스에 가입한 멤버의 정보를 조회합니다.
 * 해당 API 호출 시, 다른 워크스페이스에 속한 멤버는 조회할 수 없습니다.
 * 이메일의 경우, 해당 멤버가 워크스페이스 가입 시 멤버 인증에 사용한 이메일 주소를 사용해야 합니다.
 * 프로필 정보에 부가정보로 등록된 이메일을 사용할 경우 멤버 조회가 되지 않습니다.
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
 * 전화번호를 이용하여 특정 워크스페이스에 가입한 멤버의 정보를 조회합니다.
 * 해당 API 호출 시, 다른 워크스페이스에 속한 멤버는 찾을 수 없습니다.
 * 전화번호의 경우, 해당 멤버가 워크스페이스 가입 시에 멤버 인증으로 사용된 전화번호 정보를 사용해야 합니다.
 * 프로필에 부가 정보로 등록된 전화번호 사용 시, API 호출이 제대로 동작하지 않을 수 있습니다.
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

/**
 * 특정 워크스페이스에 속한 전체 멤버의 목록과 각각의 멤버에 대한 상세 정보를 조회합니다.
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
 * 특정 멤버의 근무시간을 갱신합니다.
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
 * 특정 멤버의 휴가 시간을 갱신합니다.
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
