interface User {
    user_id: number,
    username: string,
    role: string | null,
    created_at: string | null,
    email: string | null,
    password: string,
    fullname: string | null,
    avatar_url: string | null,
    bio: string | null,
    updated_at: string | null,
    mobile_phone: string,
}

interface PatchUser {
    username: string,
    role: string | null,
    created_at: string | null,
    email: string | null,
    password: string,
    fullname: string | null,
    avatar_url: string | null,
    bio: string | null,
    updated_at: string | null,
    mobile_phone: string,
}