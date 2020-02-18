import { createHmac, randomBytes } from 'crypto';

import { colors, names } from './dataset';
import { APP_SECRET } from '../../config/env';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
export const colorRegex = /^#[\dA-Fa-f]{6}$/;

export function checkColor(color?: string): string | undefined {
  if (color !== undefined) {
    return colorRegex.test(color) ? color : undefined;
  }
  return undefined;
}

export function checkDate(date?: string): string | undefined {
  if (date !== undefined) {
    return !Number.isNaN(Date.parse(date)) ? date : undefined;
  }
  return undefined;
}

export function checkEmail(email?: string): string | null | undefined {
  // If email evaluates to false
  if (!email) {
    return undefined;
  }
  // If email is a good email (according to the regex), return it
  if (emailRegex.test(email)) {
    return email;
  }
  // Else return null (to indicate there was an error so the calling function handles it as wanted)
  return null;
}

export function checkOneNotUndefined(list: Array<unknown | undefined>): boolean {
  return list.reduce((acc: boolean, cur: unknown | undefined): boolean => acc || cur !== undefined, false);
}

export function removeFalsies<T>(arg: Array<T | null | undefined>): Array<T> {
  return (arg.filter((d) => !!d) as T[]);
}

/**
 * Returns a random number up to 2^48.
 * Using a floating point number as upperLimit might lead to non-integer results.
 * @param upperLimit The upper limit of the random number you wish to obtain
 */
export const getRandomNumber = (upperLimit: number): number => randomBytes(16).readUIntLE(0, 6) % upperLimit;

export const getRandomAvatar = (email: string): string => `https://eu.ui-avatars.com/api/?name=${email.charAt(0)}&background=${colors[getRandomNumber(colors.length)]}&color=ffffff&bold=true&rounded=true&font-size=0.4&size=256`;

export const getRandomName = (): string => names[getRandomNumber(names.length)];

/** Returns a 6-digit code  */
export const getRandomLoginCode = (): string => (getRandomNumber(1e6)).toString().padStart(6, '0');

export const getTokenFromCode = (email: string, code: string): string => createHmac('sha512', APP_SECRET)
  .update(email)
  .update(code)
  .digest('hex');
