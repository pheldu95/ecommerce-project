type Props = {
    text: string
}


export default function CheckboxInput({ text }: Props) {
    return (
        <div className="flex mx-auto w-[50%] justify-start">
            <input type="checkbox" className="accent-blue-500 " />
            <label className="">{text}</label>
        </div>
    )
}