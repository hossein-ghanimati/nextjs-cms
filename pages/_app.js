import "@/styles/globals.css";
import "@/utils/api/middleWare";
import Sidebar from "@/components/modules/sidebar/Sidebar";
import Navbar from "@/components/modules/navbar/Navbar";
import { ToastContainer } from "react-toastify";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer style={{fontSize: "16px"}} />
      <div className="container">
        <Sidebar />

        <main className="main">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
