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
    return Block;
}());
var genesisBlock = new Block(0, '123', '', 'hello', 12345);
var blockChain = [genesisBlock];
var getBlockChain = function () { return blockChain; };
var getLatestBlock = function () { return blockChain[blockChain.length - 1]; };
var getNewTimeStamp = function () { return Math.round(new Date().getTime() / 1000); };
console.log(getBlockChain(), getLatestBlock(), getNewTimeStamp());
//# sourceMappingURL=server.js.map