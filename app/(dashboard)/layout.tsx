import MobileNav from "@/components/Pages/Dashboard/MobileNav";
import Sidebar from "@/components/Pages/Dashboard/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="root">
            <Sidebar/>
			<MobileNav/>
            
			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Layout;