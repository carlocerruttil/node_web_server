import env from 'dotenv';
import envvaar from 'env-var';

env.config();
export const envs = {
    PORT: envvaar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvaar.get('PUBLIC_PATH').default('public').asString()
}


