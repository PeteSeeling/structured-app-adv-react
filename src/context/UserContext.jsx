import { createContext, useContext, useState } from 'react';
import { signInUser, signUpUser } from '../services/user';

export const UserContext = createContext()

export const UserProvider =({ children }) => {
    const [user, setUser] = useState({ id: null, email: null })

    const login = async (email, password) => {
        const authenticatedUser = await signInUser({ email, password });

        if(authenticatedUser) {
            setUser(authenticatedUser)
        }
    };

    const signUp = async (email, password) => {
        try{
            const user = await signUpUser(email, password);
            setUser(user)
        }catch(error){
            error.message('Sign up issue')
            throw error;
        }

    }

    const logout = () => {
        setUser({ email: null });
    };

    return (
        <UserContext.Provider value={{ signUp, user, login, logout, setUser }}>
                {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);

    if(context === undefined) {
        throw new Error('useUser must be used with a User Provider')
    }
    return context;
};