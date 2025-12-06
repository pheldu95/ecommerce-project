import CheckboxInput from "../../../components/CheckboxInput";

export default function SidebarCategorySection() {
    return (
        <div className="my-4">
            <div className="flex w-[50%] mx-auto justify-start">
                <h3 >Category</h3>
            </div>
            <CheckboxInput text={'Dining'} />
            <CheckboxInput text={'Counter'} />
            <CheckboxInput text={'Bar'} />
        </div>
    )
}