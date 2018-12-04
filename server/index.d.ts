import mongo from 'mongodb';
declare const enum errorCode {
    notValidate = -1,
    unknownError = -2
}
declare interface errorMsg {
    code: errorCode,
    data: object | string,
    tip: "toast" | "alert" | "none"
}

declare class catchAbleError extends Error {
    constructor(msg: errorMsg)
    public code:number
    public msg:object|string
    public tips:"toast" | "alert" | "none"
}

