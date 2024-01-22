import './index.css';

function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className='projects'>
                <div className='projects-contents'>
                    <p>KI Community</p>
                    <svg width={720} height={520} >
                        <image href="ki.png" height={520} width={720} />
                    </svg>
                </div>
                <div className='projects-contents'>
                    <p>Login Pages</p>
                    <svg width={720} height={520} >
                        <image href="login.png" height={520} width={720} />
                    </svg>
                </div>
                <div className='projects-contents'>
                    <p>Movie Cards</p>
                    <svg width={700} height={520} >
                        <image href="movie.png" height={520} width={720} />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Projects;