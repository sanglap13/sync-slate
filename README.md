# SyncSlate

SyncSlate is an innovative web application designed to facilitate collaborative drawing experiences in real-time. With SyncSlate, users can unleash their creativity by sketching, doodling, and brainstorming together seamlessly, regardless of their physical location.

## Author

- [@sanglap13](https://github.com/sanglap13)
  (sanglapmridha@gmail.com)
- [@arkajitroy](https://github.com/arkajitroy)
  (arkajitroy11.official@gmail.com)

## Tech Stack

**Frontend:** Next JS 14, React, TypeScript, Shadcn UI, Tailwind CSS

**Backend:** Convex

**Authentication:** Clerk Auth

**Web-Sockets:** liveblocks.io

## Features

- Create organizations and invite team members seamlessly.
- Collaborate with team members seamlessly in whiteboard interface.
- Real-time collaboration using the real-time Convex database.
- User authentication, organization creation, and management with Clerk Auth.
- Responsive design with TailwindCSS.
- State management using Zustand.

## Screenshots

![Home](/public/screenshots/s1.PNG)

![Slate](/public/screenshots/s3.PNG)

![Login](/public/screenshots/s4.PNG)

## Install and Run Locally

These instructions will help you set up and run the project on your local machine for development and testing purposes.

1. **Clone the repository:**

```bash
git clone https://github.com/sanglap13/sync-slate.git
cd your-repo-name
```

2. **Install the required dependencies:**

```bash
npm install
```

3. **Configure environmental variables:**
   Create a `.env.local` file in the project root and set the necessary environment variables.

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

4. **Run the development server:**

```bash
npx convex dev
npm run dev
```

5. **Start building and customizing your SyncSlate!**

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Convex](https://www.convex.dev/)
- [Clerk Auth](https://clerk.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Shadcn UI](https://ui.shadcn.com/)
- [Liveblocks](https://liveblocks.io/)

## Acknowledgements

- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority)
- [clsx](https://www.npmjs.com/package/clsx)
- [cmdk](https://www.npmjs.com/package/cmdk)
- [date-fns](https://www.npmjs.com/package/date-fns)
- [lucide-react](https://www.npmjs.com/package/lucide-react)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [perfect-freehand](https://www.npmjs.com/package/perfect-freehand)
- [query-string](https://www.npmjs.com/package/query-string)
- [react-contenteditable](https://www.npmjs.com/package/react-contenteditable)
- [sonner](https://www.npmjs.com/package/sonner)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [usehooks-ts](https://www.npmjs.com/package/usehooks-ts)
