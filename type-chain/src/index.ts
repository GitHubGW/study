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
    console.log("blockHash", blockHash);
    return blockHash;
  };
}

const genesisBlock: Block = new Block(0, "abcdef", "", "firstBlock", 20211218);
let blockchains: Block[] = [genesisBlock];

console.log("blockchains", blockchains);

const handleGetBlockchains = (): Block[] => {
  return blockchains;
};

const handleGetLastBlock = (): Block => {
  return blockchains[blockchains.length - 1];
};

const handleGetNewTimestamp = (): number => {
  return Math.round(new Date().getTime() / 1000);
};
