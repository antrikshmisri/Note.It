import { library } from "@fortawesome/fontawesome-svg-core";
import {fab,faGoogle, faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


const initFontAwesome = () => {
    library.add(fab, faGoogle, faGithub, faLinkedin, faInstagram, faSignOutAlt)
}

export default initFontAwesome