import React from "react"

interface IProjectNameProps {
  params: { nickname: string }
  searchParams: { lang: string }
}

const ProjectName = ({ params, searchParams }: IProjectNameProps) => {
  return (
    <div>
      <h1>
        Project name: {params.nickname} Idioma: {searchParams.lang}
      </h1>
    </div>
  )
}
export default ProjectName
