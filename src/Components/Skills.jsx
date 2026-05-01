
const skillsArr = [
    {
        txt: 'React',
        icon: 'fa-brands fa-react',
        percent: '90%'
    },
    {
        txt: 'Next',
        icon: 'fa-brands fa-nextjs',
        percent: '80%'
    },
    {
        txt: 'JS',
        icon: 'fa-brands fa-js',
        percent: '90%'
    },

    {
        txt: 'Angular',
        icon: 'fa-brands fa-angular',
        percent: '70%'
    },
]

export default function Skills() {
    return (
        <div className="py-5">
            <h2 className="text-5xl font-light my-5">Education & <span className="text-main">Experience</span></h2>
            <div className="flex flex-wrap gap-5">
                {skillsArr.map(ele => <div key={ele.txt}>
                    <div  data-aos="fade-up-left" className="skill-item py-[50px] px-[40px] w-fit flex justify-center items-center min-h[150px] border-2 border-white   text-center rounded-full hover:border-main transition-colors duration-700">
                        <div>
                            <i className={`${ele.icon} block`}></i>

                            <p>{ele.percent}</p>
                        </div>
                    </div>
                    <p className=" text-center my-3">{ele.txt}</p>
                </div>)}
            </div>
        </div>

    )
}
