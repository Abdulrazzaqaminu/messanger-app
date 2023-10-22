import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType } from "@/types";
import { User } from "@prisma/client";

export const useOtherUser = (conversation: FullConversationType | {
    users: User[]
}) => {
    const session = useSession();

    const otherUser = useMemo(() => {
        const currentUserEmail = session?.data?.user?.email;

        const otherUserEmails = conversation?.users?.filter((user) => user?.email !== currentUserEmail);

        return otherUserEmails[0];
    }, [session?.data?.user?.email, conversation?.users]);
    return otherUser;
}