import axios from "axios";
import { SessionHelpher } from "./session.helpher"
import { NotificationHelpher } from "./notifications.helpher"

export class HttpHelpher {
    constructor() {
        console.log('test')
    }
    static async get(url: string) {
        try {
            const data = await axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + SessionHelpher.getToken()
                }
            });
            if(data.data.status == 401){
            NotificationHelpher.alert('session expired', window, 'error','Error');
            location.href ='/login';
            }
            return data.data;
        } catch (error) {
            console.log('get error :',error);
            NotificationHelpher.alert('you are likely offline', window, 'error', 'error');
        }

    }
    static async post(url: string, data: unknown) {
        try {
            const resp = await axios.post(url, data, {
                headers: {
                    Authorization: 'Bearer ' + SessionHelpher.getToken()
                }
            });
            return resp.data;
        } catch (error) {
            console.log(error);
            NotificationHelpher.alert('you are likely offline', window, 'error', 'error');
        }

    }
    static async put(url: string, data: unknown) {
        try {
            const resp = await axios.put(url, data, {
                headers: {
                    Authorization: 'Bearer ' + SessionHelpher.getToken()
                }
            });
            return resp.data;
        } catch (error) {
            console.log(error);
            NotificationHelpher.alert('you are likely offline', window, 'error', 'error');
        }

    }
    static async patch(url: string, data: unknown) {
        try {
            const resp = await axios.post(url, data, {
                headers: {
                    Authorization: 'Bearer ' + SessionHelpher.getToken()
                }
            });
            return resp.data;
        } catch (error) {
            console.log(error);
            NotificationHelpher.alert('you are likely offline', window, 'error', 'error');
        }

    }
}