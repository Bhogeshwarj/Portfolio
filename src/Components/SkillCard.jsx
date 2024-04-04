import React from 'react'

const SkillCard = ({title,value}) => {
  return (
    <div className="flex justify-between items-center mt-5 backdrop-blur-3xl shadow-xl p-3 rounded-2xl border border-slate-600 shadow-gray-1000 mr-2">
      <h3 className="text-xl text-white">{title}</h3>

    </div>
  )
}

export default SkillCard