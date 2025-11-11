import Sidebar from "./components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar /> {/* Tämä pysyy näkyvillä koko ajan */}
            <main className="flex-1 ml-64 bg-[#f5f7f8] min-h-screen p-8">
                {children} {/* Tämä vaihtuu, kun käyttäjä navigoi eri sivuille */}
            </main>
        </div>
    );
}
