export function successResponse(data: unknown = null, message = "Success") {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(message: string, statusCode = 400) {
  return {
    success: false,
    message,
    statusCode,
  };
}
