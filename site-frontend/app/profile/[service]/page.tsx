import { options } from "../../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ServiceDetails() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        progress container
        <div>service details</div>
        <div>
          Service provider tracker
          {/* this is where we will use a web socket for live locatin data */}
        </div>
      </div>
    </main>
  );
}
