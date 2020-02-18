import { GraphQLModule } from '@graphql-modules/core';
import redis from 'redis';
import { promisify } from 'util';

import { REDIS_HOST, REDIS_PORT } from '../../config/env';


export const REDIS = Symbol('RedisClient');

export type RedisProvider = {
  getKey: (key: string) => Promise<string | null>;
  deleteKey: (key: string) => Promise<number>;
  setKeyVal: (key: string, val: string, mode?: string, duration?: number) => Promise<void>;
};

export default new GraphQLModule({
  providers: [
    {
      provide: REDIS,
      useFactory: (): RedisProvider => {
        const redisClient = redis.createClient({
          host: REDIS_HOST,
          port: parseInt(REDIS_PORT, 10),
        });
        redisClient.on('error', (err) => console.error('An error occured with RedisClient:', err));

        return {
          getKey: promisify(redisClient.get.bind(redisClient)),
          deleteKey: promisify(redisClient.del.bind(redisClient)),
          setKeyVal: promisify(redisClient.set.bind(redisClient)),
        };
      },
    },
  ],
});
