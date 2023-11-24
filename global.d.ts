// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.ts").default;
declare interface IntlMessages extends Messages {}
