import { Type } from '@angular/core';

import { CurrentUserService } from './current-user.service';
import { HttpWrapperService } from './http-wrapper.service';
import { StorageService } from './storage.service';
import { CONFIGURATION } from './constants';
 
export * from './current-user.service';
export * from './http-wrapper.service';
export * from './storage.service';
export * from './constants'

export const WebapiConfig: Type[] = [
    CurrentUserService,
    HttpWrapperService,
    StorageService
];