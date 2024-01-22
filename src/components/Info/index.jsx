import { IoMdSchool } from "react-icons/io";
import { MdOutlineComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import './index.css';

function Info() {
    return (
        <div className="info-container">
            <h1>Info</h1>
            <div className='info-profile'>
                <svg width={500} height={500} >
                    <image href="profile.png" height={500} width={500} />
                </svg>
                <div className='info-text'>
                    <p><IoMdSchool className="school-icon" />Akdeniz University</p>
                    <p><MdOutlineComputer className="comp-icon" /> Management Information Systems</p>
                    <p><FaCode className="code-icon" /> FrontEnd Development</p>
                </div>
            </div>
        </div>
    )
}

export default Info;