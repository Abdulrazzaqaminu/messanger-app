import { getConversations } from "@/actions/conversations/getConversations";
import ConversationList from "@/components/conversations/ConversationList";
import SideBar from "@/components/sidebar/SideBar";

export default async function ConversationsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const conversations = await getConversations();
    
    return (
        <SideBar>
            <div className="h-full">
                <ConversationList 
                    initialItems={conversations}
                />
                { children }
            </div>
        </SideBar>
    )
}
