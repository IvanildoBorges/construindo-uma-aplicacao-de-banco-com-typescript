export abstract class LisoAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    deposit = (cash: number): void => {
        if (this.validateStatus()) {
            this.balance = cash
            console.log('Depositou feito com sucesso!');
        }
    }

    withdraw = (value: number): void => {
        if (this.validateStatus() && value >= this.balance) {
            this.deposit(this.getBalance() - value)
            console.log('Você sacou')
        }
    }

    getBalance = (): number => {
        return this.balance;
    }

    getStatus = (): boolean => {
        return this.status
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 
        
        throw new Error('Conta inválida')
    }
}