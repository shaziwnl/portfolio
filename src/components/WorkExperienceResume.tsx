import ResumeListItem from "./ResumeListItem"

function WorkExperienceResumeItem({company, title, location, date, resumeItems}: {
    company: string,
    title: string,
    location: string,
    date: string,
    resumeItems: string[]
}) {
  return (
    <div className="mb-8 md:mb-10">
          <div className="flex justify-between items-center">
            <span title={company == "메타" ? "meta" : ""} className="text-sm md:text-2xl font-semibold text-[#edcfff]">
              {company} <span className="text-white">- {title}</span>
            </span>
            <span className="text-xs md:text-base text-gray-400">{date}</span>
          </div>
          <p className="text-xs md:text-base italic text-gray-500 mb-2">{location}</p>
          <ul className="list-disc list-inside space-y-2">
            {resumeItems.map((item, index) => (
              <ResumeListItem key={index} description={item}/>
            ))}
          </ul>
    </div>
  )
}

export default WorkExperienceResumeItem