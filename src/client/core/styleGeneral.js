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
        overflow: "hidden",
    },

    html: {
        font: `normal 62.5% -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
    },

    body: {
        ...size(percent(100)),
        background: "black",

        backgroundImage: `linear-gradient(black 1px, transparent 0),
        linear-gradient(90deg, black 1px, transparent ),
        linear-gradient(hsla(0,0%,100%,.3) 1px, transparent),
        linear-gradient(90deg, hsla(0,0%,90%,.3) 1px, transparent)`,

        backgroundSize: `50px 50px, 50px 50px,
        10px 10px, 10px 10px`,
    },
});
