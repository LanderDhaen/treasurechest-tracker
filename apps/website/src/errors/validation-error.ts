export default function ValidationError(message?: string) {
  return {
    data: null,
    error: {
      code: "VALIDATION_ERROR",
      message: message || "These details are invalid.",
    },
  };
}
