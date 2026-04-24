// import "@tanstack/react-query";

// interface MyMeta extends Record<string, unknown> {
//   // Your meta type definition.
// }

// type QueryKey = ["dashboard" | "marketing", ...ReadonlyArray<unknown>];

// declare module "@tanstack/react-query" {
//   interface Register {
//     // Use unknown so call sites must narrow explicitly.
//     defaultError: unknown;

//     // meta
//     queryMeta: MyMeta;
//     mutationMeta: MyMeta;

//     // key
//     queryKey: QueryKey;
//     mutationKey: QueryKey;
//   }
// }

// * кастомные типы для ошибки и meta
