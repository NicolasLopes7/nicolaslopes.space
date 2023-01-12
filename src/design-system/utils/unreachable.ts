export const unreachable = (
  condition: never,
  message = `Entered unreachable code. Received '${String(condition)}'.`,
): never => {
  throw new TypeError(message);
};
