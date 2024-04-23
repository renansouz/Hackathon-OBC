import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

export interface GetUserResponse {
  user: {
    _id: string;
    email: string;
    name: string;
    role: string;
    active: boolean;
    photoUrl: string | null;
  };
  refreshToken: string;
  accessToken: string;
}

export async function getUser() {
  const refreshToken = Cookies.get('meetFlow.refreshToken');
  console.log('refreshToken getUser', refreshToken);
  const response = await api.get<GetUserResponse>('/account/whoami', {
    headers: { refreshtoken: refreshToken },
  });
  console.log('response getUser', response);
  return response.data;
}
