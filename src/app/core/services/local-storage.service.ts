import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  localStorage!: Storage;

  constructor() {
    if (typeof localStorage === 'undefined') {
      this.localStorage = {
        setItem: (_key: string, _value: string) => undefined,
        getItem: (key: string): string | null => null,
        removeItem: (key: string) => undefined
      } as unknown as Storage;
    } else {
      this.localStorage = localStorage;
    }
  }

  static readonly APP_PREFIX = 'NG-AUTH-';

  /**
   * Sets item in local storage
   *
   * @param {string} key
   * @param {unknown} value
   */
  setItem(key: string, value: unknown) {
    try {
      this.localStorage.setItem(
        `${LocalStorageService.APP_PREFIX}${key}`,
        JSON.stringify(value)
      );
    } catch (e) {
      this.localStorage.setItem(`${LocalStorageService.APP_PREFIX}${key}`, value as string);
    }
  }

  /**
   * Gets item from local storage by key
   *
   * @param {string} key
   * @return {*}  {unknown}
   */
  getItem(key: string): unknown {
    const value = this.localStorage.getItem(`${LocalStorageService.APP_PREFIX}${key}`);
    try {
      return JSON.parse(value as string);
    } catch (e) {
      return value;
    }
  }

  /**
   * Removes item from local storage by key
   *
   * @param {string} key
   */
  removeItem(key: string) {
    this.localStorage.removeItem(`${LocalStorageService.APP_PREFIX}${key}`);
  }
}
