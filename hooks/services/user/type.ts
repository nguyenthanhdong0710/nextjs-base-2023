export type UserListParam = {
  page: number;
  perPage: number;
};

export type UserDetailParam = {
  userId: number;
};

export type UserListResponse = {
  data: {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
  }[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type UserDetailResponse = {
  data: {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
  };
};
