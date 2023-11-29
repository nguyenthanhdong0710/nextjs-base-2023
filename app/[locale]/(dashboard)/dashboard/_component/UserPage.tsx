"use client";

import { useUserList } from "@/hooks/services/user";
import { Link } from "@/navigation";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function UserPage({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) {
  const { users, error, isLoading } = useUserList({
    page,
    perPage: perPage,
  });

  if (isLoading) return <div>loading...</div>;

  if (error || !users) return <div>failed to load</div>;

  return (
    <>
      {users.map((user) => (
        <Card
          key={user.id}
          className="flex justify-center items-center gap-5 py-10"
        >
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
            <CardActions>
              <Button size="small">Share</Button>
              <Link
                href={{
                  pathname: "/users/[userId]",
                  params: { userId: user.id },
                }}
              >
                <Button size="small">Detail</Button>
              </Link>
            </CardActions>
          </Box>
        </Card>
      ))}
    </>
  );
}
