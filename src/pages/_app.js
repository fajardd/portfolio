import "@/styles/globals.css";
import SidebarKanan from "@/components/Elements/SidebarKanan";

export default function App({ children }) {
  return (
    <>
      <SidebarKanan  />
      {children}
    </>
  );
}
