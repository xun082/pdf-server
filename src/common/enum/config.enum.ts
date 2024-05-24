export enum RedisConfigEnum {
  REDIS_HOST = 'REDIS_HOST',
  REDIS_PORT = 'REDIS_PORT',
  REDIS_PASSWORD = 'REDIS_PASSWORD',
  REDIS_DB = 'REDIS_DB'
}

export enum MongoDbConfigEnum {
  MONGODB_HOST = 'DATABASE_HOST',
  MONGODB_PORT = 'DATABASE_PORT',
  MONGODB_USERNAME = 'DATABASE_USER',
  MONGODB_PASSWORD = 'DATABASE_PASS',
  MONGODB_DATABASE = 'DATABASE_NAME',
  MONGODB_AUTH_SOURCE = 'DATABASE_AUTH_SOURCE'
}

export enum EmailConfigEnum {
  EMAIL_HOST = 'EMAIL_HOST',
  EMAIL_PORT = 'EMAIL_PORT',
  EMAIL_AUTH_USER = 'EMAIL_AUTH_USER',
  EMAIL_AUTH_PASS = 'EMAIL_AUTH_PASS'
}

export enum OSSConfigEnum {
  OSS_ACCESS_KEY_ID = 'OSS_ACCESS_KEY_ID',
  OSS_ACCESS_KEY_SECRET = 'OSS_ACCESS_KEY_SECRET',
  OSS_ENDPOINT = 'OSS_ENDPOINT',
  OSS_REGION = 'OSS_REGION',
  OSS_BUCKET = 'OSS_BUCKET'
}

export enum MiNiOConfigEnum {
  MINIO_ENDPOINT = 'MINIO_ENDPOINT',
  MINIO_PORT = 'MINIO_PORT',
  MINIO_ACCESS_KEY = 'MINIO_ACCESS_KEY',
  MINIO_SECRET_KEY = 'MINIO_SECRET_KEY'
}