const ErrorCodes = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  NotFound: "NOT_FOUND",
  Unauthorized: "UNAUTHORIZED",
  EmailDoesNotExist: "EMAIL_DOES_NOT_EXISTS",
};

type ErrorCodesType = typeof ErrorCodes;

export { ErrorCodes };
export type { ErrorCodesType };
