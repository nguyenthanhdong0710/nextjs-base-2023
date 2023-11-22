import Navigate from "@/components/Navigate";
import LOCALES from "@/messages";
import routerPath from "@/router-path";

export default function Root() {
  return <Navigate href={routerPath(LOCALES[0]).dashboard}></Navigate>;
}
