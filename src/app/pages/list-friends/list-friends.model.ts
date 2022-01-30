import { IAppAccountDto } from '../app-account';

export interface IFriend {
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    address?: string;
    country?: string;
    appAccountDto?: IAppAccountDto;
}
