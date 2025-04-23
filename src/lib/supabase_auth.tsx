"use client";

import { useContext, createContext, useState, useEffect } from "react";
import supabase from "./supabase";
import { User, AuthContextType } from "../interfaces/interfaces"; 

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const gitHubSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });

        if (error) {
            console.error("Error signing in with GitHub:", error);
        } else {
            window.location.href = data.url;
        }
    };

    const supabaseSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
        }
    };

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user as User | null); 
        });

        return () => subscription.unsubscribe();
    }, []);

    const value: AuthContextType = {
        user,
        gitHubSignIn,
        supabaseSignOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useUserAuth must be used within an AuthContextProvider");
    }
    return context;
};