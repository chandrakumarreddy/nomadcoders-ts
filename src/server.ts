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

  static validHash(currentBlock: Block) {
    return (
      typeof currentBlock.index === 'number' &&
      typeof currentBlock.hash === 'string' &&
      typeof currentBlock.prevHash === 'string' &&
      typeof currentBlock.data === 'string' &&
      typeof currentBlock.timestamp === 'number'
    );
  }
}
const genesisBlock: Block = new Block(0, '123', '', 'hello', 12345);

const blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;
const getLatestBlock = (): Block => blockChain[blockChain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createBlock = (data: string): Block => {
  const lastestBlock = getLatestBlock();
  const index = lastestBlock.index + 1;
  const prevHash = lastestBlock.hash;
  const timestamp = getNewTimeStamp();
  const hash = Block.createHash(index, prevHash, data, timestamp);
  const newBlock = new Block(index, hash, prevHash, data, timestamp);
  addBlock(newBlock);
  return newBlock;
};

const validBlock = (currentBlock: Block, prevBlock: Block): boolean => {
  const { index, hash, prevHash, data, timestamp } = currentBlock;
  if (currentBlock.index !== prevBlock.index + 1) {
    return false;
  } else if (currentBlock.prevHash !== prevBlock.hash) {
    return false;
  } else if (!Block.validHash(currentBlock)) {
    return false;
  } else if (Block.createHash(index, prevHash, data, timestamp) !== hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (block: Block): void => {
  if (validBlock(block, blockChain[blockChain.length - 1])) {
    blockChain.push(block);
  }
};

createBlock('chandra');
createBlock('reddy');
console.log(getBlockChain());
export {};
