import SidebarColorFilter from "./SidebarColorFilter";

export default function SidebarColorSection() {
    const colors = [
        { color: 'bg-black', ariaLabel: 'Black' },
        { color: 'bg-yellow-900', ariaLabel: 'Brown' },
        { color: 'bg-amber-500', ariaLabel: 'Amber' },
        { color: 'bg-gray-500', ariaLabel: 'Grey' },
        { color: 'bg-green-800', ariaLabel: 'Green' },
        { color: 'bg-white', ariaLabel: 'White' },
        { color: 'bg-stone-400', ariaLabel: 'Beige' },
        { color: 'bg-blue-900', ariaLabel: 'Navy' },
        { color: 'bg-red-800', ariaLabel: 'Burgundy' },
        { color: 'bg-orange-700', ariaLabel: 'Rust' },
        { color: 'bg-slate-700', ariaLabel: 'Charcoal' },
        { color: 'bg-yellow-600', ariaLabel: 'Mustard' },
        { color: 'bg-teal-700', ariaLabel: 'Teal' },
        { color: 'bg-stone-300', ariaLabel: 'Espresso' },
    ];

    return (
        <div className="my-4">
            <div className="flex w-[50%] mx-auto justify-start">
                <h3 >Color</h3>
            </div>
            <div className="grid grid-cols-5">
                {colors.map((color) => (
                    <SidebarColorFilter color={color.color} ariaLabel={color.ariaLabel} />
                ))}
            </div>
        </div>
    )
}