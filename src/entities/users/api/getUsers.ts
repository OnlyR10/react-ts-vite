import type { User } from "../model/types";

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  const users: User[] = await response.json();

  return users;
};
