export default function UnauthorizedError(message: string) {
  return {
    data: null,
    error: {
      code: "UNAUTHORIZED",
      message: message,
    },
  };
}
