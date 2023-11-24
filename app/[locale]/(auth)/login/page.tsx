"use client";

import { EMAIL_REGEX } from "@/utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { bool, object, string } from "yup";
interface ILoginForm {
  username: string;
  password: string;
  acceptPolicy: boolean;
}

export default function Login() {
  const t = useTranslations();

  const loginSchema = object({
    username: string()
      .required(t("message.required"))
      .matches(EMAIL_REGEX, t("message.email")),
    password: string()
      .required(t("message.required"))
      .min(8, t("message.password"))
      .max(30, t("message.password")),
    acceptPolicy: bool()
      .required(t("message.required"))
      .oneOf([true], t("message.required")),
  });

  const { handleSubmit, control } = useForm<ILoginForm>({
    defaultValues: {
      acceptPolicy: false,
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
    });
  };

  return (
    <Box className="my-20 flex flex-col justify-center items-center">
      <Typography variant="h4" className="mb-16">
        {t("login.loginPage")}
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <Box className="flex items-center gap-5">
            {t("login.username")}
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder={t("login.usernamePlaceholder")}
                  type="text"
                  error={invalid}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
          <Box className="flex items-center gap-5">
            {t("login.password")}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder={t("login.passwordPlaceholder")}
                  type="password"
                  error={invalid}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="acceptPolicy"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <>
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={t("login.acceptPolicy")}
                  />
                  {invalid && (
                    <FormHelperText error>{error?.message}</FormHelperText>
                  )}
                </>
              )}
            />
          </Box>
          <Button variant="primary" type="submit">
            {t("login.login")}
          </Button>
        </Box>
      </Box>
      <Button variant="primary" onClick={() => signIn("github")}>
        {t("login.loginWithGitHub")}
      </Button>
    </Box>
  );
}
