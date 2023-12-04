import useSWR from "swr";
import {
  UserDetailParam,
  UserDetailResponse,
  UserListParam,
  UserListResponse,
} from "./type";

export const useUserList = ({ page, perPage }: UserListParam) => {
  const { data, error, isLoading } = useSWR<UserListResponse>(
    "/api/users?" +
      new URLSearchParams({
        page: String(page),
        per_page: String(perPage),
      }).toString(),
  );

  return {
    users: data?.data,
    page: data?.page || 1,
    perPage: data?.per_page || 1,
    total: data?.total || 1,
    totalPages: data?.total_pages || 1,
    isLoading,
    error,
  };
};

export const useUserDetail = ({ userId }: UserDetailParam) => {
  const { data, error, isLoading } = useSWR<UserDetailResponse>(
    "/api/users/" + userId,
  );

  return {
    user: data?.data,
    isLoading,
    error,
  };
};
