import ecommerce from "../assets/ecommecrs.png";
import elevate from "../assets/elevate.png";
import quiz from "../assets/quiz.png";
import movie from "../assets/movie.png";
import landing from "../assets/landing.png";
import exam from "../assets/exam-app.png";

const projects = [
    {
    img: exam,
    link: "https://66b2da0cc082164050bde62a--imaginative-banoffee-a74726.netlify.app/",
    title: "react.js",
    name:"Exam App"
  },
  {
    img: ecommerce,
    link: "https://ecommerce-project6.vercel.app/",
    title: "Next.js",
    name:'Ecommerce App'
  },
  {
    img: elevate,
    link: "https://elevatenext.vercel.app/",
    title: "Next.js",
    name:'Rose App'
  },
  {
    img: quiz,
    link: "https://66b2da0cc082164050bde62a--imaginative-banoffee-a74726.netlify.app/",
    title: "react.js",
    name:'quiz'
  },
  {
    img: movie,
    link: "https://66b2db794cf402408d4d7688--imaginative-puffpuff-434601.netlify.app/",
    title: "react.js",
    name:"movie"
  },
  {
    img: landing,
    link: "https://66c4928ff795f9153a37aa55--silver-haupia-713999.netlify.app/",
    title: "react.js",
    name:'landing'
  },
 
];

export default function Projects() {
  return (
    <div className="py-5">
      <h2 className="text-5xl font-light my-5">
        Featured <span className="text-main">Projects</span>
      </h2>

      {projects.map((ele) => (
        <div className="w-[90%]" key={ele?.img}>
          <a href={ele?.link} target="_blank">
            <img
              data-aos="fade-up"
              src={ele?.img}
              alt="ecommerce website"
              className="w-full rounded-4xl h-[450px] object-cover object-top "
            />
            <h3 className="my-8 text-white text-2xl">{ele.name}</h3>
            <span className="my-5">by {ele?.title}</span>
          </a>
        </div>
      ))}

    
    </div>
  );
}
