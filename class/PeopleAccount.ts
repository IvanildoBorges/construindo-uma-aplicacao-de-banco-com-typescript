import { LisoAccount } from "./LisoAcccount"

export class PeopleAccount extends LisoAccount {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    setDocId = (id: number): void => {
        this.doc_id = id
    }

    getDocId = (): number => {
        return this.doc_id
    }
}