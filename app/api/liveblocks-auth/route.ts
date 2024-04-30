import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  //smridha
  secret:
    "sk_dev_VxOJSY81XuBROddcxnckpRdrClR6q-USQ3WObBshpvBEw37sxa9TUkdnn3vf-AlR",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  console.log("Auth Info", {
    authorization,
    user,
  });

  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();

  const slate = await convex.query(api.slate.get, { id: room });

  console.log("Auth Info", {
    room,
    slate,
    slateOrgId: slate?.orgId,
    userOrgId: authorization.orgId,
  });

  //can comment out if having problem in opening other browser
  if (slate?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Teammate",
    picture: user.imageUrl,
  };

  console.log({ userInfo });

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();
  console.log({ status, body }, "Allowed");

  return new Response(body, { status });
}
