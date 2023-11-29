"use client";

import { useUserDetail } from "@/hooks/services/user/user";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export default function UserDetailPage() {
  const { userId } = useParams();
  const { user, error, isLoading } = useUserDetail({
    userId: Number(userId),
  });

  if (isLoading) return <div className="text-center py-20">loading...</div>;

  if (error || !user)
    return <div className="text-center py-20">user not found</div>;

  return (
    <Box className="flex flex-col justify-center items-center gap-5 py-10">
      <CardMedia
        component="img"
        alt={[user.first_name, user.last_name].join(" ")}
        image={user.avatar}
        className="h-[128px] w-[128px] rounded-full"
      />
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {[user.first_name, user.last_name].join(" ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
      </Box>
    </Box>
  );
}
