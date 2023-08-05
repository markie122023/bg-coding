

export class SessionHelpher {
    constructor(){
        console.log('session')
    }

    static getUserDetails(){
        console.log('get users');
        const data = sessionStorage.getItem('bg-admin-user') as string || 
        localStorage.getItem('bg-admin-user') as string ;
        return JSON.parse(data);
    }
    static getToken(){
        console.log('get users');
        const data = sessionStorage.getItem('bg-admin-token') as string || 
        localStorage.getItem('bg-admin-token') as string ;
        return data;
    }

}