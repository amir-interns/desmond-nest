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
exports.BlockchainService = void 0;
const common_1 = require("@nestjs/common");
const blockchain_entity_1 = require("./blockchain.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BlockchainService = class BlockchainService {
    constructor(connection, balanceRequestRepository) {
        this.connection = connection;
        this.balanceRequestRepository = balanceRequestRepository;
    }
    findOne(id) {
        return this.balanceRequestRepository.findOne(id);
    }
    create(createBalanceRequest) {
        const balanceRequest = new blockchain_entity_1.BalanceRequest();
        balanceRequest.ip = createBalanceRequest.ip;
        balanceRequest.address = createBalanceRequest.address;
        balanceRequest.type = createBalanceRequest.type;
        balanceRequest.result = createBalanceRequest.result;
        balanceRequest.createdAt = createBalanceRequest.createdAt;
        balanceRequest.updatedAt = createBalanceRequest.updatedAt;
        return this.balanceRequestRepository.save(balanceRequest);
    }
    async findAll() {
        return this.balanceRequestRepository.find();
    }
};
BlockchainService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(blockchain_entity_1.BalanceRequest)),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        typeorm_1.Repository])
], BlockchainService);
exports.BlockchainService = BlockchainService;
//# sourceMappingURL=blockchain.service.js.map