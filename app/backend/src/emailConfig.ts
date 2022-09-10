import 'dotenv/config';

const emailConfig = {
  email: process.env.EMAIL,
  password: process.env.EMAIL_PASSWORD,
  host: process.env.EMAIL_HOST,
}

export default emailConfig;
