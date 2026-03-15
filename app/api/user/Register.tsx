import { RegisterUserDto } from "@/dtos";
import { NextResponse, NextRequest } from "next/server";

export async function Post(request: NextRequest) {
    try {
        const body = await request.json() as RegisterUserDto
        const validation = registerSchema.safeParse(body)
        if (!validation.success) {
            return NextResponse.json({error: "Invalid data"}, {status: 400})
        }
    } catch (error) {
       return NextResponse.json({error: "An error occurred"}, {status: 500}) 
    }
}