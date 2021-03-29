import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Help from './pages/Help';
import Resultado from './pages/Resultado';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';
import Pagina5 from './pages/Pagina5';
import Pagina6 from './pages/Pagina6';
import Pagina7 from './pages/Pagina7';
import Pagina8 from './pages/Pagina8';
import Pagina9 from './pages/Pagina9';
import Pagina10 from './pages/Pagina10';
import Pagina11 from './pages/Pagina11';
import Pagina12 from './pages/Pagina12';


const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Help,
        Resultado,
        Pagina1,
        Pagina2,
        Pagina3,
        Pagina4,
        Pagina5,
        Pagina6,
        Pagina7,
        Pagina8,
        Pagina9,
        Pagina10,
        Pagina11,
        Pagina12,

    })
);

export default Routes;