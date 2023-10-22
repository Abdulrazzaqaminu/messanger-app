import { getUsers } from "@/actions/userDetails/getUsers";
import SideBar from "@/components/sidebar/SideBar";
import UsersList from "@/components/users/UsersList";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <SideBar>
      <UsersList items={users} />
      <div className="h-full">
        { children }
      </div>
    </SideBar>
  )
}
