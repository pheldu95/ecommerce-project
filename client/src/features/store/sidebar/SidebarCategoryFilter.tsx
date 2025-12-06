type Props = {
    text: string
}

export default function SidebarCategoryFilter({ text }: Props ) {
    return (
        <div className="flex mx-auto w-[50%] justify-start">
            <input type="checkbox" className="accent-blue-500 " />
            <p className="">{text}</p>
        </div>
    )
}