/* becodeorg/trouvkach
 *
 * /src/client/core/styleGeneral.js - styleGeneral Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import {injectGlobal} from "emotion";
import {percent, size} from "koutla-swiss";

injectGlobal({
    "*": {
        margin: 0,
        padding: 0,
    },

    html: {
        font: `normal 62.5% -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
    },

    body: {
        ...size(percent(100)),
    },
});
