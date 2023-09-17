import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { StudentAccount } from "./class/StudentAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Ivan', 20045);
const companyAccount: CompanyAccount = new CompanyAccount('HiTech', 10602);
const studentAccount: StudentAccount = new StudentAccount(3, 'Alves',90100);

console.log(peopleAccount.getName());
console.log(peopleAccount.getAccountNumber());
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getStatus());
peopleAccount.deposit(200);
peopleAccount.withdraw(100);
console.log(peopleAccount.getBalance());

console.log(companyAccount.getName());
console.log(companyAccount.getAccountNumber());
console.log(companyAccount.getBalance());
console.log(companyAccount.getStatus());
companyAccount.deposit(50);
companyAccount.withdraw(10);
console.log(companyAccount.getBalance());

console.log(studentAccount.getAccountNumber());
console.log(studentAccount.getBalance());
console.log(studentAccount.getStatus());
studentAccount.deposit(20);
studentAccount.withdraw(10);
console.log(studentAccount.getBalance());