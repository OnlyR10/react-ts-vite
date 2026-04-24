import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/getUsers";

import type { User } from "./types";

export const usersQueryKey = ["users"] as const;

export const useUsersQuery = () =>
  useQuery<User[]>({
    queryKey: usersQueryKey,
    queryFn: getUsers,
  });
