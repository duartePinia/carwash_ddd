"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const MongoRepository_1 = require("../MongoRepository");
class CustomerRepository extends MongoRepository_1.MongoRepository {
    constructor(CustomerModel) {
        super(CustomerModel);
        this.CustomerModel = CustomerModel;
    }
    findOneCustomer(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne(query);
        });
    }
    findByEmailCustomer(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ email });
        });
    }
    findByIdCustomer(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findById(_id);
        });
    }
    findAndUpdateCustomer(_id, updated) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateOne(_id, updated, { new: true });
        });
    }
    findAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findAll();
        });
    }
    createOne(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createOne(body);
        });
    }
}
exports.CustomerRepository = CustomerRepository;