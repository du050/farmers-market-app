export interface User {
    id: string;
    email?: string | null;
    aud: string;
    role: string;
    identities?: {
        id: string;
        user_id: string;
        identity_data: any; 
        provider: string;
        created_at: string;
        last_sign_in_at: string;
        updated_at: string;
    }[];
    created_at: string;
    updated_at: string;
}



export interface AuthContextType {
    user: User | null;
    gitHubSignIn: () => Promise<void>;
    supabaseSignOut: () => Promise<void>;
}

export interface Location {
    latitude: number;
    longitude: number;
    vender_name: string; 
    id: string;
    icon_url?: string;
}

export interface VenderMarkerProps {  
    mapData: Location[];
    
}