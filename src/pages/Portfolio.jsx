import * as images from '../assets/images/index'

const projects = [
    {
        title: 'ClockWise',
        imageUrl: '../assets/images/clockwise.png',
        link: 'https://nameless-fjord-16797-0078e08b982c.herokuapp.com/login',
    },
    {
        title: 'Note Taker',
        imageUrl: '../assets/images/note-taker.png',
        link: 'https://sleepy-anchorage-41730-09a2e414e230.herokuapp.com/',
    },
    {
        title: 'RecipeNutri Group Project',
        imageUrl: '../assets/images/recipenutri.png',
        link: 'https://natemcmahon.github.io/Recipe-Nutri/',
    },
    {
        title: 'Weather Dashboard',
        imageUrl: '../assets/images/weather-dashboard.png',
        link: 'https://annat7459.github.io/6-weather-dashboard/',
    },
    {
        title: 'Work Day Scheduler',
        imageUrl: '../assets/images/work-day-scheduler.png',
        link: 'https://annat7459.github.io/5-work-day-scheduler/',
    },
    {
        title: 'Coding Quiz',
        imageUrl: '../assets/images/coding-quiz.png',
        link: 'https://annat7459.github.io/4-code-quiz/',
    },
    {
        title: 'Password Generator',
        imageUrl: '../password-generator.png',
        link: 'https://annat7459.github.io/3-password-generator/',
    },
    {
        title: 'Code Refactor',
        imageUrl: '../assets/images/clockwise.png',
        link: 'https://annat7459.github.io/code-refactor/',
    },

];

export default function Portfolio() {
    // renders the portfolio page
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {/* iterates over the projects array above to create indiviudal elements */}
                {projects.map((project, index) => (
                    // links the project to the URL. key prop is set to index for an id of each project, also allows for styling to be done with the class name
                    <a key={index} href={project.link} className="project-link">
                        {/* the background image will be the screenshot and the title should be nested on the screenshot */}
                        <img className="project" src = {images [index]}>
                        </img>
                        <div className="project-title">{project.title}</div>
                    </a>
                ))}
            </div>
        </section>
    );
}

