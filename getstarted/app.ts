/*----- Entendendo o básico de classes -----*/
//ATIVIDADE1: CLASSE PESSOA
// class User {
//     nome: string = 'ivan'
//     idade: number = 25

//     showInfo() {
//         console.log(this.nome)
//         console.log(this.idade)
//     }
// }

// const pessoa1 = new User()
// pessoa1.showInfo()
// const pessoa2 = new User()
// pessoa2.showInfo()

//Como deu para perceber, as duas variáveis
// pessoas mostram o mesmo valor, o que não
// queremos. 

//Para resolver isso, usamos explicitamente
// o construtor dar classe e passamos os
// valores na instância da classe.
// class User {
//     nome: string
//     idade: number

//     constructor (name: string, age: number) {
//         this.nome = name
//         this.idade = age
//     }

//     showInfo() {
//         console.log(this.nome)
//         console.log(this.idade)
//     }
// }

// const pessoa1 = new User('Ivan', 25)
// pessoa1.showInfo()
// const pessoa2 = new User('Aparecida', 27)
// pessoa2.showInfo()


//ATIVIDADE2: LISO BANKING
//Nesse desafio faremos uma estrutura para banco,
// para isso precisaremos de alguns atributos 
// para compor nossa conta de banco: um nome, 
// o número da conta, um método de sacar e
// depositar

// class LisoAccount {
//     name: string
//     accountNumber: number

//     constructor(name: string, accountNumber: number) {
//         this.name = name
//         this.accountNumber = accountNumber
//     }

//     withdraw = () => {
//         console.log('Você sacou');
//     }

//     deposit = () => {
//         console.log('Você depositou');
//     }
// }

// const newAccout: LisoAccount = new LisoAccount('Ivan', 1)
// console.log(newAccout)
// newAccout.deposit()
// newAccout.withdraw()


/*---------------- HERANÇA -----------------*/
//Continuando o desafio do banco, vamos criar
// uma classe Admin para funcionários que
// trabalham no banco. Além disso, todas as 
// contas criadas a partir desse admin, terão 
// informações de uma conta em comum.

// class Admin {
//     balance: number

//     constructor() {
//         this.balance = 20
//     }

//     getBalance = () => {
//         console.log(this.balance);
//     }
// }

// const adminAccout: Admin = new Admin()
// console.log(adminAccout)

//Veja que a conta Admin só tem o valor do
// saldo e o metodo para getBalance, mas 
// não tem os metodos de deposito e saque,
// e nem tem o numero da conta e nome do
// usuário dessa conta.

//Para resolver isso usamos a herança, onde
// o Admin herda de Account esse atributos.

// class Admin extends LisoAccount {
//     balance: number

//     //Para que a classe Admin possa acessar e definir os 
//     // valores dos atributos da classe Account, precisa 
//     // colocar o metodo super dentro do construtor. Isso
//     // é herança! Admin é filha de Account, herdando
//     // seus atributos e métodos. 
//     constructor(name: string, accountNumber: number) {   
//         super(name, accountNumber) //Como se fosse a chamada ao "new Account('Ivan', 25)", assim setamos os valores para classe pai a qual herdamos
//         this.balance = 20
//     }

//     getBalance = () => {
//         console.log(this.balance);
//     }
// }

// const adminAccout: Admin = new Admin('Ivan', 1)
// console.log(adminAccout)


/*---------------- ABSTRAÇÃO ---------------*/
//Reformulando a lógica
//Sabemos que uma conta precisa de um atributo saldo
// pois além de nome e número da conta, precisamos 
// ver o saldo da conta. Para isso vamos tirar o 
// saldo da classe Admin e colocar diretamente na 
// classe Account

// class LisoAccount {
//     name: string
//     accountNumber: number
//     balance: number = 0

//     constructor(name: string, accountNumber: number) {
//         this.name = name
//         this.accountNumber = accountNumber
//     }

//     deposit = () => {
//         console.log('Você depositou');
//     }

//     withdraw = () => {
//         console.log('Você sacou');
//     }

//     getBalance = () => {
//         console.log(this.balance);
//     }
// }

// const newAccout: LisoAccount = new LisoAccount('Ivan', 1)
// console.log(newAccout)

//Agora iremos utilizar o conceito de classes abstratas
//São classes que servirão de modelo para outras classes
// e que não podem ser instanciadas para objetos.
//Então a classe Account será abstrata, pois ela servirá
// de modelo para as classes de duas contas: pessoa 
// fisica e jurídica. Essas contas terão seus próprios
// atributos, além dos que herdará da classe abstrata.

// abstract class LisoAccount {
//     name: string
//     accountNumber: number
//     balance: number = 0

//     constructor(name: string, accountNumber: number) {
//         this.name = name
//         this.accountNumber = accountNumber
//     }

//     deposit = () => {
//         console.log('Você depositou');
//     }

//     withdraw = () => {
//         console.log('Você sacou');
//     }

//     getBalance = () => {
//         console.log(this.balance);
//     }
// }

// class PeopleAccount extends LisoAccount {
//     doc_id: number

//     constructor(doc_id: number, name: string, accountNumber: number) {
//         super(name, accountNumber)
//         this.doc_id = doc_id
//     }
// }

// const peopleAccount: LisoAccount = new PeopleAccount(1, 'Ivan', 20045)
// console.log(peopleAccount)

// class CompanyAccount extends LisoAccount {
    
//     constructor(name: string, accountNumber: number) {
//         super(name, accountNumber)
//     }

//     getLoan = () => {
//         console.log('Você pegou um empréstimo');
//     }
// }

// const companyAccount: CompanyAccount = new CompanyAccount('HiTech', 10001)
// console.log(companyAccount)


//Agora vejamos uma coisa, cada vez que criamos mais
// classes nesse documento ele ficaria enorme. Então
// como resolvemos esse problema? Dividindo as
// classes em arquivos separados. Fazendo isso você
// terá uma melhor organização e facilidade para
// fazer manutenção de código. Isso é modularizar 
// sua aplicação!

//Após dividido, só precisamos importar as classes:

// import { LisoAccount } from "./class/LisoAcccount"
// import { PeopleAccount } from "./class/PeopleAccount"
// import { CompanyAccount } from "./class/CompanyAccount"

// const peopleAccount: LisoAccount = new PeopleAccount(1, 'Ivan', 20045)
// console.log(peopleAccount)

// const companyAccount: CompanyAccount = new CompanyAccount('HiTech', 10001)
// console.log(companyAccount)


/*-------------- POLIMORFISMO --------------*/
//Uma classe mãe pode ter métodos que tenham sua 
// assinatura alterada (tipo de retorno alterado)
// e/ou fluxo alterado (valor a ser retornado)
// em uma classe filha.

//Por exemplo, digamos que uma empresa faz um
// depósito e na mensagem de retorno queremos que
// diga "A empresa depositou". Presisamos
// então alterar o método herdado da classe mãe.

// import { LisoAccount } from "./class/LisoAcccount"
// import { PeopleAccount } from "./class/PeopleAccount"
// import { CompanyAccount } from "./class/CompanyAccount"

// const peopleAccount: LisoAccount = new PeopleAccount(1, 'Ivan', 20045)
// peopleAccount.deposit()

// const companyAccount: CompanyAccount = new CompanyAccount('HiTech', 10001)
// companyAccount.deposit()


//Visibilidade de atributos e métodos.
//Temos dois tipos: public e private. Usamos
// quando queremos delimitar o que o usuário
// pode ou não ter acesso direto.

//No arquivo LisoAccount.ts vamos colocar
// todas as variáveis privadas, para que
// somente a própria classe tenha acesso
// aos atributos. E também vamos criar os
// métodos para setar e retornar os
// valores dos atributoa. 

//Daremos acesso somente aos metodos get
// e set e nãos aos atributos.

// import { LisoAccount } from "./class/LisoAcccount"
// import { PeopleAccount } from "./class/PeopleAccount"

// const peopleAccount: LisoAccount = new PeopleAccount(1, 'Ivan', 20045)
// console.log(peopleAccount.getName());
// peopleAccount.setName('Ivanildo')
// console.log(peopleAccount.getName());

//Para finalizar, vamos ver agora o caso
// de um método privado "validateStatus".
// Em que somente a classe mãe terá
// acesso para validar se a conta está
// ativa ou não, por exemplo, no
// depósito.

import { LisoAccount } from "./class/LisoAcccount"
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: LisoAccount = new PeopleAccount(1, 'Ivan', 20045)
console.log(peopleAccount);
peopleAccount.deposit()
