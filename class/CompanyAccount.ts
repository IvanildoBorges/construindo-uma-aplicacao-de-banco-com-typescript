import { LisoAccount } from "./LisoAcccount";

export class CompanyAccount extends LisoAccount {
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (loan: number): void => {
        if(this.getStatus()) {
            this.deposit(loan)
            console.log('Você pegou um empréstimo');
        }
    }
}