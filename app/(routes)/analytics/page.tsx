import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { CompaniesChart } from "./components/CompaniesChart";

export default async function AnaliticsPage() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const companies = await db.company.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const events = await db.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-background shadow-md rounded-lg lg:p-4 ">
      <h2 className="text-3xl mb-4">Analytics page</h2>
      <div>
        <CompaniesChart companies={companies} events={events}/>
      </div>
    </div>
  );
}
