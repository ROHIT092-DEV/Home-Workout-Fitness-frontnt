import { create } from 'zustand';
import Cookies from 'js-cookie';

interface UserState {
  email: string;
  role: string;
  isLoggedIn: boolean;
  accessToken: string;
  setUser: (user: { email: string; role: string; isLoggedIn: boolean; accessToken: string }) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  email: '',
  role: '',
  isLoggedIn: false,
  accessToken: '',
  setUser: (user) => {
    Cookies.set('accessToken', user.accessToken, { expires: 7, path: '/' });
    set({ email: user.email, role: user.role, isLoggedIn: true, accessToken: user.accessToken });
  },
  logout: () => {
    Cookies.remove('accessToken', { path: '/' });
    set({ email: '', role: '', isLoggedIn: false, accessToken: '' });
  },
}));

// Initialize Zustand state from cookies
const accessToken = Cookies.get('accessToken');
if (accessToken) {
  console.log('Access Token Found:', accessToken);
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch user details');
      }
      return res.json();
    })
    .then((data) => {
      console.log('API Response:', data);
      if (data.success) {
        useUserStore.setState({
          email: data.data.email,
          role: data.data.role,
          isLoggedIn: true,
          accessToken,
        });
      } else {
        console.error('Failed to fetch user details:', data);
      }
    })
    .catch((err) => console.error('Error fetching user details:', err));
}

export default useUserStore;
