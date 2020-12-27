"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = __importDefault(require("crypto-js/sha256"));
var Block = /** @class */ (function () {
    function Block(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    Block.createHash = function (index, prevHash, data, timestamp) {
        return sha256_1.default(index + prevHash + data + timestamp).toString();
    };
    Block.validHash = function (currentBlock) {
        return (typeof currentBlock.index === 'number' &&
            typeof currentBlock.hash === 'string' &&
            typeof currentBlock.prevHash === 'string' &&
            typeof currentBlock.data === 'string' &&
            typeof currentBlock.timestamp === 'number');
    };
    return Block;
}());
var genesisBlock = new Block(0, '123', '', 'hello', 12345);
var blockChain = [genesisBlock];
var getBlockChain = function () { return blockChain; };
var getLatestBlock = function () { return blockChain[blockChain.length - 1]; };
var getNewTimeStamp = function () { return Math.round(new Date().getTime() / 1000); };
var createBlock = function (data) {
    var lastestBlock = getLatestBlock();
    var index = lastestBlock.index + 1;
    var prevHash = lastestBlock.hash;
    var timestamp = getNewTimeStamp();
    var hash = Block.createHash(index, prevHash, data, timestamp);
    var newBlock = new Block(index, hash, prevHash, data, timestamp);
    addBlock(newBlock);
    return newBlock;
};
var validBlock = function (currentBlock, prevBlock) {
    var index = currentBlock.index, hash = currentBlock.hash, prevHash = currentBlock.prevHash, data = currentBlock.data, timestamp = currentBlock.timestamp;
    if (currentBlock.index !== prevBlock.index + 1) {
        return false;
    }
    else if (currentBlock.prevHash !== prevBlock.hash) {
        return false;
    }
    else if (!Block.validHash(currentBlock)) {
        return false;
    }
    else if (Block.createHash(index, prevHash, data, timestamp) !== hash) {
        return false;
    }
    else {
        return true;
    }
};
var addBlock = function (block) {
    if (validBlock(block, blockChain[blockChain.length - 1])) {
        blockChain.push(block);
    }
};
createBlock('chandra');
createBlock('reddy');
console.log(getBlockChain());
//# sourceMappingURL=server.js.map