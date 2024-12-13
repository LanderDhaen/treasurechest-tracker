import { getAllAccounts } from "@/actions/account";
import AccountTable from "@/components/accounts/account-table";
import { columns } from "@/components/accounts/columns";
import BreadcrumbWrapper from "@/components/breadcrumb-wrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts",
};

const breadcrumbs = [
  {
    label: "Statistics",
    href: "/",
  },
  {
    label: "Accounts",
  },
];

export default async function Page() {
  const accounts = await getAllAccounts();

  return (
    <>
      <BreadcrumbWrapper breadcrumbs={breadcrumbs} />
      <div className="mx-4 rounded-3xl p-8 bg-container">
        <AccountTable data={accounts} columns={columns} />
      </div>
    </>
  );
}
