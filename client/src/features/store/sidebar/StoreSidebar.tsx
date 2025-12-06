import SidebarCategorySection from "./SidebarCategorySection";
import SidebarColorSection from "./SidebarColorSection";
import SideBarSeatingCapacitySection from "./SideBarSeatingCapacitySection";

export default function StoreSidebar() {
    return (
        <div className="w-[20%] bg-red-300">
            <SidebarCategorySection />
            <SidebarColorSection />
            <SideBarSeatingCapacitySection />
        </div>
    )
}