type UserEntity = {
  id: number;
  name: string;
  userName: string;
  email: string;
  phone: string;
  status?: string;
};

type User = {
  users: UserEntity[];
  addUser: (newUser: UserEntity) => void;
  updateUser: (user: UserEntity) => void;
};

type Fibonacci = {
  fibonacci: number[] | string[];
  addFibonacci: (fibonacci: number) => void;
};

type Collatz = {
  collatz: number | string;
  calculateCollatz: (fibonacci: number) => void;
};

export type { UserEntity, User, Fibonacci, Collatz };
