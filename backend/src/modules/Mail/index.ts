import { GraphQLModule } from '@graphql-modules/core';

export const MAIL = Symbol('Mailer');

export type MailParams = {
  to: string;
  loginCode: string;
  magicCode: string;
};

export type MailProvider = {
  sendWelcomeMail: (params: MailParams) => Promise<void>;
  sendLoginMail: (params: MailParams) => Promise<void>;
};

const provider: MailProvider = {
  sendWelcomeMail: (params) => {
    console.log(`SENT WELCOME EMAIL TO <${params.to}> WITH LOGIN_CODE: [${params.loginCode}] && MAGIC_CODE: {${params.magicCode}}`);
    return Promise.resolve();
  },
  sendLoginMail: (params) => {
    console.log(`SENT LOGIN EMAIL TO <${params.to}> WITH LOGIN_CODE: [${params.loginCode}] && MAGIC_CODE: {${params.magicCode}}`);
    return Promise.resolve();
  },
};

export default new GraphQLModule({
  providers: [
    {
      provide: MAIL,
      useValue: provider,
    },
  ],
});
