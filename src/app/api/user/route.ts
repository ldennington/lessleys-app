import { clerkClient } from "@clerk/nextjs/server"

export async function PUT(req: Request) {
  try {
      const { userId, birthdate, city, state } = await req.json()

      const clerk = await clerkClient();
      const user = await clerk.users.updateUserMetadata(userId, {
          publicMetadata: {
            birthdate,
            city,
            state
          },
      })

      return new Response(JSON.stringify(user), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error: any) {
      console.error("Error updating user metadata:", error)
      return new Response(JSON.stringify("Failed to update user metadata"), {
        status: error.status || 500,
        headers: { 'Content-Type': 'application/json' },
      });
  }
}
