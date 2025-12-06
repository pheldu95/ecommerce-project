import CheckboxInput from "../../../components/CheckboxInput";

export default function SideBarSeatingCapacitySection() {
  return (
    <div className="my-4">
      <div className="flex w-[50%] mx-auto justify-start">
        <h3>Seating Capacity</h3>
      </div>
      <CheckboxInput text={'2'} />
      <CheckboxInput text={'4'} />
      <CheckboxInput text={'6'} />
    </div>
  )
}