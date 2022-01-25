import { IUser } from "./user";

export interface IResponse {
    statut: string;
    errorCode: string;
    errorDescription: string;
    data: any;
}