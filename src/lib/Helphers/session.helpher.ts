

export class SessionHelpher {
    constructor(){
        console.log('session')
    }

    static getUserDetails(){
        console.log('get users');
        const data = sessionStorage.getItem('bg-code-user') as string || 
        localStorage.getItem('bg-code-user') as string ;
        return JSON.parse(data);
    }
    static getToken(){
        console.log('get users');
        const data = sessionStorage.getItem('bg-code-token') as string || 
        localStorage.getItem('bg-code-token') as string ;
        return data;
    }

}