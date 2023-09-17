export abstract class LisoAccount {
    private name: string
    private accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!');
    }

    getName = (): string => {
        return this.name
    }

    setAccountNumber = (accountNumber: number): void => {
        this.accountNumber = accountNumber
        console.log('Número da conta alterado com sucesso!');
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setbalance = (balance: number): void => {
        this.balance = balance
        console.log('Saldo alterado com sucesso!');
    }

    getbalance = (): number => {
        return this.balance
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log('Você depositou');
        }
    }

    withdraw = (): void => {
        console.log('Você sacou');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        } 
        
        throw new Error('Conta inválida')
    }
}