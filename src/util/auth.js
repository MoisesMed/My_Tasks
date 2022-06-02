export function saveUser({token}) {
    localStorage.setItem(`@auth/token`, token);
}

export function isAuthenticated() {
    let token = localStorage.getItem('@auth/token');

    if (!token) return false;

    return true;
}

export function getUser() {
    let token = localStorage.getItem('@auth/token');

    if (!token) {
        throw new Error('Not found user');
    }

    return {token};
}


export function logout() {
    localStorage.removeItem('@auth/token');
}