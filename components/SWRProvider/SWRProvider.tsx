"use client";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
        fetcher: (resource: string, init) =>
          fetch(
            new URL(resource, process.env.NEXT_PUBLIC_API_URL ?? ""),
            init,
          ).then((res) => res.json()),
        onError: (err) => {
          if (err.status === 401) {
            // TODO: do your logic here
            console.log("--- error --- 401:", err);
          } else if (err.status === 403) {
            // TODO: do your logic here
            console.log("--- error --- 403:", err);
          } else if (err.status === 404) {
            // TODO: do your logic here
            console.log("--- error --- 404:", err);
          } else {
            console.log(err);
            //  TODO: any logic
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
