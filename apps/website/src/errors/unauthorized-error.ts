export default function UnauthorizedError(message?: string) {
  return {
    data: null,
    error: {
      code: "UNAUTHORIZED",
      field: undefined,
      message: message || "You must be logged in to perform this action.",
    },
  };
}
