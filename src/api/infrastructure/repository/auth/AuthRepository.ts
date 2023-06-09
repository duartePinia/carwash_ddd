import { Model } from 'mongoose';
import { MongoRepository } from '../MongoRepository';
import { AuthRepository as AuthConfig } from '../../../domain/auth/AuthRepository';
import { CustomerEntity } from '../../../domain/customer/CustomerEntity';
import { TypeCustomerEntity } from '../../../domain/typeCustomer/TypeCustomerEntity';
import TypeCustomerModel from '../../models/TypeCustomerModel';
export class AuthRepository extends MongoRepository implements AuthConfig {

    constructor(protected CustomerModel: Model<any>) {
        super(CustomerModel);
    }
    async validateTypeCustomer(_id: string): Promise<TypeCustomerEntity | null > {
        return await TypeCustomerModel.findById(_id);
    }
    async verifyCode(_id: string): Promise<CustomerEntity | null> {
        return await this.CustomerModel.findByIdAndUpdate(_id, { 'phone.verified': true }, { new: true });
    }

    async validatePhoneNumber(phone: number, customer_id: string): Promise<CustomerEntity | null> {
         return await this.CustomerModel.findOne({ 'phone.phone_number': phone, _id: { $ne: customer_id} });
    }

}