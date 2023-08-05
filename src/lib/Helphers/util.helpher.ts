export class UtilHelpher {
    constructor() {
        console.log('');
    }
   static formatDateTime(dateString: any) {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        
        const formattedDate = date.toLocaleString(undefined, options);
        return formattedDate;
    }
}