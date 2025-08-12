import Banner from "./components/Banner";
import Essaymain from "./components/Essaymain";
import Smallbooks from "./components/Smallbooks";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-full">
        <Essaymain />
      </div>
      <div className="w-full">
        
      </div>
      <main className="bg-white p-6 rounded-xl shadow-sm">
        <Smallbooks />
      </main>
     
    </div>
  );
}
