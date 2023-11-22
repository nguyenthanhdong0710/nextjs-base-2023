"use client";

import { Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Box className="my-20 flex flex-col justify-center items-center">
      Login page
      <Button variant="primary" onClick={() => signIn()}>
        Login
      </Button>
    </Box>
  );
}
