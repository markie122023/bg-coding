

export class NotificationHelpher {
    constructor() {
        console.log('test constructor')
    }

    static alert(message: string, win: any, type: string, title: string, image = '', func = ()=>{console.log('check')}){
        win.iziToast[type]({
            title: title,
            'message': message,
            position: 'topRight',
            image: image,
            onClosed: func
        })
        
        return func || 0
    }

}