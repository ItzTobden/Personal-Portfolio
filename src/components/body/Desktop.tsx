import Blender from './Blender'
import Resume from './Resume'
import Skills from './Skills'
import Webdev from './Webdev'
import './body.css'

const Desktop = () => {
    return (
        <div className="desktop-container">
            <div className="application-wrapper">
                <Webdev />
                <Blender />
                <Skills />
                <Resume />
            </div>
            <div className="output-wrapper">
                {/** other components...... */}
            </div>
        </div>
    )
}

export default Desktop