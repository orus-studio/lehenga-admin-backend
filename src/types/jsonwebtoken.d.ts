declare module "jsonwebtoken" {
  export interface JwtPayload {
    sub?: string;
    email?: string;
    iat?: number;
    exp?: number;
  }

  export interface SignOptions {
    expiresIn?: string | number;
  }

  export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: string,
    options?: SignOptions,
  ): string;

  export function verify(
    token: string,
    secretOrPublicKey: string,
  ): string | JwtPayload;

  const jwt: {
    sign: typeof sign;
    verify: typeof verify;
  };

  export default jwt;
}

