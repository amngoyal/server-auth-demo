/** Shared secret for signing and verifying JWTs. Set JWT_SECRET in production. */
export function getJwtSecret(): string {
  return (
    process.env.JWT_SECRET ?? "development-only-change-me-in-production"
  );
}
