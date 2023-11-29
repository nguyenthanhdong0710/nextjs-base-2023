"use client";

import { useUserList } from "@/hooks/services/user";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function UserListPage() {
  const t = useTranslations();
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const router = useRouter();

  const { users, page, perPage, error, isLoading } = useUserList({
    page: Number(searchParams.get("page")) || 1,
    perPage: Number(searchParams.get("perPage")) || 5,
  });

  if (isLoading) return <div className="text-center py-20">loading...</div>;

  if (error || !users)
    return <div className="text-center py-20">failed to load</div>;

  const createQueryString = (newPage: number, newPerPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    params.set("perPage", String(newPerPage));

    return params.toString();
  };

  return (
    <Box>
      <Box className="py-20 text-center">{t("userList.title")}</Box>
      <Box className="grid grid-cols-1 gap-5">
        {users.map((user) => (
          <Box key={user.id} className="grid grid-cols-3 gap-5">
            <Avatar src={user.avatar} alt="avatar" />
            <Typography>
              {[user.first_name, user.last_name].join(" ")}
            </Typography>
            <Typography>{user.email}</Typography>
          </Box>
        ))}
      </Box>
      <Button
        onClick={() => {
          const path = (pathname +
            "?" +
            createQueryString(page - 1, perPage)) as any;
          router.replace(path, { scroll: false });
        }}
      >
        {"<<"}
      </Button>
      <Button
        onClick={() => {
          const path = (pathname +
            "?" +
            createQueryString(page + 1, perPage)) as any;
          router.replace(path, { scroll: false });
        }}
      >
        {">>"}
      </Button>
    </Box>
  );
}
