import React from 'react';

function JobBoardComponent({job,handleTagClick}) {
    const tags = [job.level, job.role]
    if (job.languages){
        tags.push(...job.languages)
    }

    if (job.tools){
        tags.push(...job.tools)
    }

    return (
        <div className={`transition duration-500 transform hover:-translate-y-1 flex flex-col bg-white shadow-md mx-2 mb-20 p-6 cursor-pointer rounded lg:flex-row lg:mb-4 lg:mx-12 ${
            job.featured ? 'border-l-4 border-teal-500 border-solid':''}`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 lg:my-0 lg:h-24 lg:w-24" src={`${job.logo}`} alt={job.company}></img>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}

                    {job.isNew && (
                        <span className="text-xs bg-teal-500 text-teal-100 m-2 py-1 px-2 rounded-full">New</span>)}
                    {job.featured && (
                        <span className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full">Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl my-2">
                    {job.position}
                </h2>
                <p className="text-gray-700">
                    {job.postedAt} • {job.contract} • {job.location}
                </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {tags ? 
                    (tags.map((tag)=>
                        <span 
                            onClick={()=>handleTagClick(tag)}
                            className="text-teal-500 bg-teal-100 text-xs font-bold mr-4 p-2 mb-2 rounded hover:bg-teal-500 hover:text-white lg:mb-0 lg:text-sm lg:mb-0">{tag}</span>)) : ''}


            </div>
        
        </div>
    );
}

export default JobBoardComponent;