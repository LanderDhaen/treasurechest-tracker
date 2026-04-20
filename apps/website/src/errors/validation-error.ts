export default function ValidationError(message?: string) {
  return {
    data: null,
    error: {
      code: "VALIDATION_ERROR",
      field: undefined,
      message: message || "These details are invalid.",
    },
  };
}
