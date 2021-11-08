import { request } from './request';
import { DepartmentsResponse } from './types';

const URL = {
  list: '/v1/departments.list'
};

/**
 * 워크스페이스에 속한 전체 부서 정보를 조회합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/departments/#departmentslist
 *
 * @param params
 * @returns
 */
export const fetchDepartmentList = (params?: { limit?: number; cursor?: string }) => {
  return request<DepartmentsResponse>({
    method: 'GET',
    url: URL.list,
    params: {
      limit: params.limit,
      cursor: params.cursor
    }
  });
};
