import * as sha256 from "crypto-js/sha256";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }

  static calculateBlockHash = (index: number, previousHash: string, data: string, timestamp: number): string => {
    const blockHash = sha256(`${index}${previousHash}${data}${timestamp}`).toString();
    return blockHash;
  };

  static validateBlockStructure = (block: Block): boolean => {
    if (
      typeof block.index === "number" &&
      typeof block.hash === "string" &&
      typeof block.previousHash === "string" &&
      typeof block.data === "string" &&
      typeof block.timestamp === "number"
    ) {
      return true;
    }
    return false;
  };
}

const genesisBlock: Block = new Block(0, "abcdef", "", "firstBlock", 20211218);
let blockchains: Block[] = [genesisBlock];

const handleGetLastBlock = (): Block => {
  return blockchains[blockchains.length - 1];
};

const handleGetNewTimestamp = (): number => {
  return Math.round(new Date().getTime() / 1000);
};

const handleCreateNewBlock = (data: string): Block => {
  const previousBlock: Block = handleGetLastBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = handleGetNewTimestamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newTimestamp);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  handleAddBlock(newBlock);
  return newBlock;
};

const handleGetHashForBlock = (block: Block): string => {
  return Block.calculateBlockHash(block.index, block.previousHash, block.data, block.timestamp);
};

const handleIsBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (Block.validateBlockStructure(candidateBlock) && Block.validateBlockStructure(previousBlock)) {
    return true;
  }
  if (handleGetHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  }
  return false;
};

const handleAddBlock = (candidateBlock: Block): void => {
  if (handleIsBlockValid(candidateBlock, handleGetLastBlock())) {
    blockchains.push(candidateBlock);
  }
};

handleCreateNewBlock("first");
handleCreateNewBlock("second");
handleCreateNewBlock("third");
handleCreateNewBlock("fourth");
console.log("dasdas", blockchains);
