import { request } from './axios';
import { SpaceResponse } from '../types';

const URL = {
  info: '/v1/spaces.info'
};

/**
 * 워크스페이스의 정보를 조회합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/spaces/#spacesinfo
 *
 * @returns
 */
export const requestSpacesInfo = () => {
  return request<SpaceResponse>({
    method: 'GET',
    url: URL.info
  });
};
