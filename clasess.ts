interface userInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements userInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("user created:" + this.name);
  }

  register() {
    console.log(this.name + " " + "is now registerd");
  }

  payInvoice() {
    console.log(this.name + " paid invoice");
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let imran = new User("imran rafique", "email", 28);

imran.register();

let imran: User = new Member(1, "Imran", "comunit@live.com", 28);
imran.payInvoice();
