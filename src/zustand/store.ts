import { create } from "zustand";
import { Collatz, Fibonacci, User } from "../types";
import { users } from "../constants/users";
import { collatzLoops, findFibonacciNeighbors } from "../utils";

const useStore = create<User>((set) => ({
  users,
  addUser: (user) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
  updateUser: (user) => {
    set((state) => ({
      users: state.users.map((item) =>
        item.id === user.id ? { ...user } : item
      ),
    }));
  },
}));

const useFibonacci = create<Fibonacci>((set) => ({
  fibonacci: ["-", "-", "-"],
  addFibonacci: (fibonacci) => {
    const result = findFibonacciNeighbors(fibonacci);
    set((state) => ({
      fibonacci: result,
    }));
  },
}));

const useCollatz = create<Collatz>((set) => ({
  collatz: "-",
  calculateCollatz: (number) => {
    const result = collatzLoops(number);
    set((state) => ({
      collatz: result,
    }));
  },
}));

export { useStore, useFibonacci, useCollatz };
