interface ErrorData {
  code: string;
  message: string;
}

interface BaseResponse {
  success: boolean;
  error?: ErrorData;
}

interface UserIdentification {
  type: string;
  value: string;
}

/**
 * https://docs.kakaoi.ai/kakao_work/webapireference/users/#response
 */
interface User {
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
