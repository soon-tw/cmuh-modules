import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class CurrentUserService {

    constructor(private _storageService: StorageService) {

    }

    public get token(): string {
        let token = this._storageService.getItem('.ASPXAUTH');

        return token;
    }

    public set token(token: string) {
        this._storageService.setItem('.ASPXAUTH', token);
    }
}
