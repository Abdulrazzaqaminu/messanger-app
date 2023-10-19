"use client";

import { signOut } from "next-auth/react";

export default function UsersPage() {
  return (
    <button onClick={() => signOut()}>
      LogOut
    </button>
  )
}
