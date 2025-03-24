// export async function PUT(req: Request) {
//   try {
//     const { userId, birthdate, cityState } = await req.json()

//     const user = await clerkClient.users.updateUserMetadata(userId, {
//         publicMetadata: {
//           birthdate,
//           cityState,
//         },
//     })

//     return NextResponse.json({ user }, { status: 200 })
//   } catch (error) {
//     console.error("Error updating user metadata:", error)
//     return NextResponse.json({ error: "Failed to update user metadata" }, { status: 500 }) // Error response
//   }
// }
  
export async function GET(req:Request) {
  const blogs = [
      { id: "1", author: "Mark", content: "blog 1 content is here" },
      { id: "2", author: "Mohamed", content: "blog 2 content is here" },
      { id: "3", author: "Amine", content: "blog 3 content is here" },
  ];

  return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
}
