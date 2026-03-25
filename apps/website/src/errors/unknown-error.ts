export default function UnknownError(message?: string) {
  return {
    data: null,
    error: {
      code: "UNKNOWN_ERROR",
      message: message || "An unknown error occurred. Please try again later.",
    },
  };
}
