import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {clickLoader} from './modules/preloader';
import {openMenu} from './modules/toggleMobile';
import {openContent} from './modules/toggleDesktop';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
clickLoader();
openMenu();
openContent();

