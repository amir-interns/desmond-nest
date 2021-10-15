"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainModule = void 0;
const common_1 = require("@nestjs/common");
const blockchain_controller_1 = require("./blockchain.controller");
const bitcoin_module_1 = require("../bitcoin/bitcoin.module");
const etherium_module_1 = require("../etherium/etherium.module");
const typeorm_1 = require("@nestjs/typeorm");
const blockchain_entity_1 = require("./blockchain.entity");
const blockchain_service_1 = require("./blockchain.service");
let BlockchainModule = class BlockchainModule {
};
BlockchainModule = __decorate([
    (0, common_1.Module)({
        providers: [blockchain_service_1.BlockchainService],
        controllers: [blockchain_controller_1.BlockchainController],
        imports: [bitcoin_module_1.BitcoinModule, etherium_module_1.EtheriumModule, typeorm_1.TypeOrmModule.forFeature([blockchain_entity_1.BalanceRequest])]
    })
], BlockchainModule);
exports.BlockchainModule = BlockchainModule;
//# sourceMappingURL=blockchain.module.js.map