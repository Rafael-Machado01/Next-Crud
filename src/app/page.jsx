import Welcome from "@/ui/components/welcome";
import Form from "@/ui/components/form/form";
import Table from "@/ui/components/table/table";
export default function Home() {
  return (
    <main className="bg-blue-50 m-5 rounded-br-4xl p-2">
      <Welcome/>
      <Form/>
      <Table/>
    </main>
  );
}
