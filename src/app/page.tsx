"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrganization, useUser } from "@clerk/nextjs";
import UserDetails from "./components/UserDetails";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { organization } = useOrganization();

  useEffect(() => {
    // Redirect to the sign up page only if the user is not signed in
    if (!user) {
      router.replace("/signup");
    }
  }, [user, router]);

  return (
    <>
      <div className="px-8 py-12 sm:py-16 md:px-20">
        {user && (
          <>
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              👋 Hi {user.firstName || 'there' } - welcome to { organization?.name! || 'your organization' }!
            </h1>
            <div className="grid gap-4 mt-8 lg:grid-cols-3 flex">
              <UserDetails />
            </div>
          </>
        )}
      </div>
    </>
  );
}
