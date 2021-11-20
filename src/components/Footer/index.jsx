import { Dropdown } from '../Dropdown'
import './styles.css'

export const Footer = () => {
    return (
        <div className="footer">
            <p>Questions? Call 1-844-542-4813</p>
            <div className="links">
                <div className="col">
                    <a href="#">FAQ</a>
                    <a href="#">Cookie Preferences</a>
                </div>
                <div className="col">
                    <a href="#">Help Center</a>
                    <a href="#">Corporate Information</a>
                </div>
                <div className="col">
                    <a href="#">Terms of Use</a>
                </div>
                <div className="col">
                    <a href="#">Privacy</a>
                </div>
            </div>
            <Dropdown/>
        </div>
    )
}