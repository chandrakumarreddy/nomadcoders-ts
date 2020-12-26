import sha256 from 'crypto-js/sha256';

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }

  static createHash(
    index: number,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    return sha256(index + prevHash + data + timestamp).toString();
  }
}
const genesisBlock: Block = new Block(0, '123', '', 'hello', 12345);

const blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(getBlockChain(), getLatestBlock(), getNewTimeStamp());

export {};
