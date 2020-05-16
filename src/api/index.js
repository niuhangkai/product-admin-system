
import http from './fetch';

export const getUserInfos = (token) => {
  return http.fetchGet('/user/info', { token });
};

// 退出登录
export const logout = (token) => {
  return http.fetchPost('/login/logout', { token });
};
