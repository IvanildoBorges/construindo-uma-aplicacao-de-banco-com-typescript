import { LisoAccount } from "./LisoAcccount";

export class CompanyAccount extends LisoAccount {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Você pegou um empréstimo');
    }

    //POLIFORMISMO: 
    //alterando o método desposit herdado da classe mãe LisoAccount
    deposit = (): void => {
        console.log('A empresa depositou');
    }
}