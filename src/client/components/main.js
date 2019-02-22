/* becodeorg/trouvkach
 *
 * /src/client/components/main.js - Main Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import {css} from "emotion";
import {mq, vh} from "koutla-swiss";

import Home from "./home";
import Map from "./mapPage";

import backgroundImg from "../../img/trouvCashImg.jpg";

const styles = {
    container: css({
        ...mq("max-width:322px", {
            height: vh(100),
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)) ,url(${backgroundImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }),
    }),
};

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/map" component={Map} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
