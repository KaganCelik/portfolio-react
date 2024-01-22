import './index.css';

function Menubar() {
    return (
        <div className="menubar-container">
            <a className='title' href='/'>Bilge Kagan Celik</a>
            <div className='menubar-selectors'>
                <a href='/' >Social Media</a>
                <a href='/' >Projects</a>
                <a href='/' >About Me</a>
            </div>
        </div>
    )
}

export default Menubar;