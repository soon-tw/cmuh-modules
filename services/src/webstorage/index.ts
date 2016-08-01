import { Type } from '@angular/core';

import { LocalStorageEmitter } from './localstorage-emitter';
import { LocalStorage,SessionStorage } from './webstorage';

export * from './localstorage-emitter';
export * from './webstorage';

export const WebStorage: Type[] = [
    LocalStorageEmitter,
    LocalStorage,
    SessionStorage
];