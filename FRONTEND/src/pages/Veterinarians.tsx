import { Outlet } from "react-router-dom";

export default function Veterinarians() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Veterinarians</h1>
      <Outlet />
    </div>
  );
}