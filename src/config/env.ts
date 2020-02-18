const requiredEnvVars: string[] = [
  'NODE_ENV',
  'APP_SECRET',
  'SERVER_PORT',
  'REDIS_HOST',
  'REDIS_PORT',
];

/**
 * Check that all the required variables are set before running the server.
 */
export function checkRequiredEnvVars(): void {
  requiredEnvVars.forEach((envVar: string): void => {
    if (process.env[envVar] === undefined) {
      throw new Error(`${envVar} is undefined.`);
    }
  });
}

export const NODE_ENV = (process.env.NODE_ENV as string);
export const APP_SECRET = (process.env.APP_SECRET as string);
export const SERVER_PORT = (process.env.SERVER_PORT as string);
export const REDIS_HOST = (process.env.REDIS_HOST as string);
export const REDIS_PORT = (process.env.REDIS_PORT as string);
