import { prisma } from "@repo/db/client";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  console.log("Hello");
  try {
    const { phoneNumber, password } = await req.json();
    const user = await prisma.user.create({
      data: {
        phoneNumber,
        password,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    console.error;
    return NextResponse.json("Invalid");
  }
};
