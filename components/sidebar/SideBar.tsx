import { getCurrentUser } from "@/actions/userDetails/getCurrentUser";
import DesktopSideBar from "./Desktop/DesktopSideBar";
import MobileFooter from "./Mobile/MobileFooter";

export default async function SideBar({
    children
}: {
    children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full"> 
        <DesktopSideBar currentUser={currentUser!} />
        <MobileFooter />
        <main className="lg:pl-20 h-full">
            { children }
        </main>
    </div>
  )
}
