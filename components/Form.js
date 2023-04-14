import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

export default function Form() {
  const flag = false;
  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserForm /> : <EditUserForm />}
    </div>
  );
}
