import { redirect } from "next/navigation";

/** Legacy URL — character sheet now lives on the home page. */
export default function SheetPage() {
  redirect("/");
}
