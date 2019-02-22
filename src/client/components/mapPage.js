/* becodeorg/trouvkach
 *
 * /src/client/components/mapPage - MapPage Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 21/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {flexcolumn, percent, size, rem} from "koutla-swiss";

import maptest from "../../img/maptest.png";

const styles = {
    container: css({
        ...flexcolumn("center", "center"),
        ...size(percent(100)),
    }),
    map: css({
        width: percent(90),
        borderRadius: rem(0.8),
    }),
    logo: css({
        width: percent(30),
    }),
};

export default class Map extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <img className={styles.map} src={maptest} alt={"Maptest"} />
            </div>
        );
    }
}
