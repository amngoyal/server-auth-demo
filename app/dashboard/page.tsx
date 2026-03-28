import { getDecodedToken } from "@/lib/auth";
import { LogoutButton } from "./logout-button";

export default async function DashboardPage() {
  const user = await getDecodedToken();

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-foreground/70">
          You are signed in as{" "}
          <span className="font-medium text-foreground">{user?.name}</span>
          {user?.email ? (
            <span className="text-foreground/70"> ({user.email})</span>
          ) : null}
          .
        </p>
      </div>
      <LogoutButton />
    </main>
  );
}
