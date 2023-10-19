import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
    try {
        const { name, email, password } = await req.json();
    
        if(!name || !email || !password) {
            return new NextResponse("Missing field", { status: 400 });
        }
    
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        })

        return NextResponse.json(user);
    } catch (error) {
        console.log(error, "Registration error");
        return new NextResponse("Registration error", { status: 500 })
    }
}