import { NextFunction, Request } from "express";

//best if we do not haev any dependices 
export const LoggerInFunction = (req: Request, res: Response, next: NextFunction) => {

    console.log('Logger implemented using funtion')
    next()

}