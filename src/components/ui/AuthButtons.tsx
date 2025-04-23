"use client"

import React from 'react';
import { useUserAuth } from '../../lib/supabase_auth';


const AuthButtons = () => {
    const { user, gitHubSignIn, supabaseSignOut } = useUserAuth();

    return (
        <div>
            {user ? (
                <>
                    <p>Logged in as: {user?.email || user?.id}</p>
                    <button onClick={supabaseSignOut}>Sign Out</button>
                </>
            ) : (
                <button onClick={gitHubSignIn}>Sign in with GitHub</button>
            )}
        </div>
    );
};

export default AuthButtons;