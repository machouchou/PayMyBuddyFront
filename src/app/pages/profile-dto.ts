import { IAppAccountDto } from "./app-account";

export interface IProfileDto {
    firstName: string;
    lastName: string;
    birthDate: string;
    address: string;
    country: string;
    appAccountDto: IAppAccountDto;
    amountBalance: number;
}
