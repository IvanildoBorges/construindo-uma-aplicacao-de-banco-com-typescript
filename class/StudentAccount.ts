import { LisoAccount } from "./LisoAcccount"

export class StudentAccount extends LisoAccount {

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositStudent = (cash: number): void => {
        this.deposit(cash+10)
    }
}