import { db } from "@/lib/db";

import { auth } from "@clerk/nextjs";
import { useParams } from "next/navigation";

import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const company = await db.company.findUnique({
      where: {
        id: params.companyId,
      },
    });
    if (!company) {
      return new NextResponse("Company not Found", { status: 404 });
    }

    const contact = await db.contact.create({
      data: {
        companyId: params.companyId,
        ...data,
      },
    });
    return NextResponse.json(contact);
  } catch (error) {
    console.log("[CONTACT]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function Delete(
  req: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deleteCompany = await db.company.delete({
      where: {
        id: companyId,
      },
    });

    return NextResponse.json(deleteCompany);
  } catch (error) {
    console.log("[DELETE COMPANY ID]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
