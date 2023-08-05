import type { Iuser } from "./users.interface";

export interface IwithdrawalRequest {
    
        id?: number,
        user_id?: number,
        type?: string,
        amount?: number,
        initial_balance?: number,
        current_balance?: number,
        transcation_time?: Date,
        resolution_time?: Date,
        resolution_type?: number,
        reason?: string,
        UserId?: number,
        User: Iuser
    
}