/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '@/api';

export type User = {
    email: string;
    role: string;
    _id: string;
};

export type Role = 'profesional' | 'client'

type AuthContextData = {
    login(email: string, password: string): Promise<void>;
    isAuthenticated: boolean;
    user: User | null;
    signOut: () => void;
    role:Role | undefined;
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [role, setRole] = useState<Role>();
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

    useEffect(() => {
        const userComingFromCookie = Cookies.get('meetFlow.user');
        const refreshToken = Cookies.get('meetFlow.refreshToken');
        const parsedUser = userComingFromCookie ? JSON.parse(userComingFromCookie) : null;
        if (parsedUser && refreshToken) {
            setUser(parsedUser);
        } else {
            signOut();
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const response = await api.post('auth/login', {
                email,
                password,
                passwordConfirmation: password,
            });
            const { accessToken: token, refreshToken, user: userComing } = response?.data || {};
            Cookies.set('meetFlow.token', token, { expires: 30, path: '/' });
            Cookies.set('meetFlow.refreshToken', refreshToken, { expires: 30, path: '/' });
            Cookies.set('meetFlow.user', JSON.stringify(userComing), { expires: 30, path: '/' });
            setUser(userComing);
            setRole(userComing.role);
            api.defaults.timeout = 3000;
            api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            setLoading(false);
            toast.success('Login efetuado com sucesso!');
            console.log(user);
        } catch (error) {
            throw error;
        }
    };

    const signOut = () => {
        Cookies.remove('meetFlow.token');
        Cookies.remove('meetFlow.refreshToken');
        Cookies.remove('meetFlow.user');
        setUser(null);
    };
    return <AuthContext.Provider value={{ login, isAuthenticated, user, signOut, role   }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextData => useContext(AuthContext);
