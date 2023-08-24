import request,{ http } from '../request'
import type { LoginData, LoginRes, UserInfoRes} from './types'
/**
 * 登录 
 */
export function login(data: LoginData) {
  return http.get<LoginRes>('/user/login', data);
}
/** 
 * 获取登录用户信息
 */
export function getUserInfo() {
  return http.get<UserInfoRes>('/user/info')
}