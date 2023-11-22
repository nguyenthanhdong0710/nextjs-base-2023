import Navigate from "@/components/Navigate";
import routerPath from "./router-path";

export default function Root() {
  return <Navigate to={routerPath.dashboard}></Navigate>;
}
