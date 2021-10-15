"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtheriumService = void 0;
const common_1 = require("@nestjs/common");
const Web3 = require('web3');
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/3f22f5d2f7294954b59850c7c8e08875');
let EtheriumService = class EtheriumService {
    getBalance(address) {
        return web3.eth.getBalance(address);
    }
};
EtheriumService = __decorate([
    (0, common_1.Injectable)()
], EtheriumService);
exports.EtheriumService = EtheriumService;
//# sourceMappingURL=etherium.service.js.map