import { auth, signOut } from "@/auth";

const Settings = async () => {
  const session = await auth();

  return (
    <div>
      {session && JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Settings;
