import 'dotenv/config';

const emailConfig = {
  email: process.env.EMAIL || 'alissongod9119@gmail.com',
  password: process.env.EMAIL_PASSWORD || '5KI3rLwFcDGS8aRt',
  host: process.env.EMAIL_HOST || 'smtp-relay.sendinblue.com',
}

export default emailConfig;
