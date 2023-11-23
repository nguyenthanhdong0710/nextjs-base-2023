import { useParams, usePathname, useRouter } from "next/navigation";
import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LOCALES from "@/messages";

export default function LocaleSwitcher() {
  const t = useTranslations();
  const pathName = usePathname();
  const { locale } = useParams();
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = event.target.value;
    router.replace(segments.join("/"));
  };

  return (
    <div>
      <Typography component="span" sx={{ pr: 1 }}>
        {t("navbar.chooseLanguage")}
      </Typography>
      <Select value={String(locale)} onChange={handleChange}>
        {LOCALES.map((locale) => {
          return (
            <MenuItem key={locale} value={locale}>
              {t(`navbar.${locale}`)}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}
