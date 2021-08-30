import mongoose from 'mongoose';

const MONGO_USERNAME = "anton";
const MONGO_PASSWORD = "soundqwe";
const MONGO_HOSTNAME = "localhost";
const MONGO_PORT = '27017';
const MONGO_DB = 'memorize';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
export default url;



