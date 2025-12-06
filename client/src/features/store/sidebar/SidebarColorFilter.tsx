type Props = {
    color: string
    ariaLabel: string
}

export default function SidebarColorFilter({ color, ariaLabel }: Props) {
    return (
        <button
            className={`cursor-pointer m-2 w-8 h-8 rounded-full ${color} 
            border-2 border-gray-300 
            hover:border-gray-500 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 
            focus:ring-black transition-all`}
            aria-label={`${ariaLabel}`}>
        </button>
    )
}