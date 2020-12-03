import * as http from 'http';
import { DecodeUser } from './services/auth';

// module augmentation
declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    decoded?: DecodeUser;
  }
}