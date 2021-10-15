"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainController = void 0;
const common_1 = require("@nestjs/common");
const bitcoin_service_1 = require("../bitcoin/bitcoin.service");
const etherium_service_1 = require("../etherium/etherium.service");
const blockchain_entity_1 = require("./blockchain.entity");
const blockchain_service_1 = require("./blockchain.service");
const create_balance_request_dto_1 = require("./dto/create-balance-request.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_real_ip_1 = require("nestjs-real-ip");
let BlockchainController = class BlockchainController {
    constructor(bitcoinService, etheriumService, blockchainService, balanceRequestRepository) {
        this.bitcoinService = bitcoinService;
        this.etheriumService = etheriumService;
        this.blockchainService = blockchainService;
        this.balanceRequestRepository = balanceRequestRepository;
    }
    async getCoins(params, ip) {
        let balance;
        let btcBalance;
        let res;
        if (params.type === 'eth') {
            balance = this.etheriumService.getBalance(params.address);
            res = {
                type: params.type,
                address: params.address,
                balance: await balance
            };
        }
        if (params.type === 'btc') {
            balance = this.bitcoinService.getBalance(params.address);
            res = {
                type: params.type,
                address: params.address,
                balance: await balance
            };
        }
        const BalanceRequestObj = {
            id: 2,
            ip: ip,
            address: params.address,
            type: params.type,
            result: await balance,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.create(BalanceRequestObj);
        return res;
    }
    getIp(ip) {
        return ip;
    }
    create(createBalanceRequestDto) {
        return this.blockchainService.create(createBalanceRequestDto);
    }
    async findAll() {
        return this.blockchainService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(':type/balance/:address'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, nestjs_real_ip_1.RealIP)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BlockchainController.prototype, "getCoins", null);
__decorate([
    __param(0, (0, nestjs_real_ip_1.RealIP)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BlockchainController.prototype, "getIp", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_balance_request_dto_1.CreateBalanceRequestDto]),
    __metadata("design:returntype", Promise)
], BlockchainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlockchainController.prototype, "findAll", null);
BlockchainController = __decorate([
    (0, common_1.Controller)('blockchain'),
    __param(3, (0, typeorm_1.InjectRepository)(blockchain_entity_1.BalanceRequest)),
    __metadata("design:paramtypes", [bitcoin_service_1.BitcoinService, etherium_service_1.EtheriumService, blockchain_service_1.BlockchainService,
        typeorm_2.Repository])
], BlockchainController);
exports.BlockchainController = BlockchainController;
//# sourceMappingURL=blockchain.controller.js.map