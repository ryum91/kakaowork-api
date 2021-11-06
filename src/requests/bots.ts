import { request } from './axios';
import { BotResponse } from './../types';

const URL = {
  info: '/v1/bots.info'
};

/**
 * Bot의 정보를 조회합니다.
 * https://docs.kakaoi.ai/kakao_work/webapireference/bots/#botsinfo
 *
 * @returns
 */
export const requestBotsInfo = () => {
  return request<BotResponse>({
    method: 'GET',
    url: URL.info
  });
};
