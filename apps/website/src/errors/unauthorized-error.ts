export default function UnauthorizedError(message?: string) {
  return {
    data: null,
    error: {
      code: "UNAUTHORIZED",
      message: message || "You must be logged in to perform this action.",
    },
  };
}
