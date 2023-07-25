import * as crypto from 'crypto';

class ShortIdGenerator {
  private readonly alphabet: string;
  private readonly idLength: number;

  constructor() {
    this.alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    this.idLength = 7;
  }

  private generateRandomBytes(length: number): string {
    return crypto.randomBytes(length).toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
  }

  public generate(): string {
    const randomBytes = this.generateRandomBytes(this.idLength);
    let shortId = '';

    for (let i = 0; i < this.idLength; i++) {
      const index = randomBytes.charCodeAt(i) % this.alphabet.length;
      shortId += this.alphabet.charAt(index);
    }

    return shortId;
  }
}

export const shortIdGenerator = new ShortIdGenerator();