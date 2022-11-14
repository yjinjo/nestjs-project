// index.ts

import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;  // 블록의 위치를 표시해줌 
  data: string;    // 보호하길 원하는 데이터 
}

class Block implements BlockShape {
  public hash: string;

  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`

  }
}