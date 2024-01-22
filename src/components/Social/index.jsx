import './index.css';

function Social() {
    return (
        <div className="social-container">
            <h1>Social Media</h1>
            <div className='cards-container'>
                <div className='cards-div'>
                    <a href='https://www.instagram.com/kgn.ccelik/'>İnstagram</a>
                    <svg width={300} height={300} >
                        <a href='https://www.instagram.com/kgn.ccelik/'>
                            <image href="insta.jpeg" height={300} width={300} />
                        </a>
                    </svg>
                </div>
                <div className='cards-div'>
                    <a href='https://www.linkedin.com/in/bilge-kagan-celik/'>LinkedIn</a>
                    <svg width={300} height={300} >
                        <a href='https://www.linkedin.com/in/bilge-kagan-celik/'>
                            <image href="linkedin.jpg" height={300} width={300} />
                        </a>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Social;

// kgn.ccelik