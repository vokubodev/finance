import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Login from "./login/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
}
