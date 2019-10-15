import Mainstay from 'mainstay';

import { GlobalNavComponent } from './globalNav';


export default () => {
    let libComponents = [
        GlobalNavComponent
    ]
    
    let mainstay = new Mainstay( {
        // Array of component class definitions
        libraryComponents : libComponents
    } )
     
     
    mainstay.render()
}