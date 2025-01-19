

function ResumeListItem({description}: 
    { 
        description: string 

    }
) {
  
  const arr = description.split(" ")

  return (
    <li className="text-xs md:text-base">
        <span className="text-[#edcfff] font-semibold">{arr[0]}</span>{' ' + arr.slice(1).join(" ")}
    </li>
  )
}

export default ResumeListItem