/* becodeorg/trouvkach
 *
 * /src/client/components/mapPage - MapPage Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 21/02/2019
 */

import * as React from "react";
import {css, keyframes} from "emotion";
import {percent, size, rem, mq} from "koutla-swiss";

import maptest from "../../img/maptest.png";

const glitch = keyframes`{
    0% {
      clip: rect(30px, 9999px, 51px, 0);
    }
    5% {
      clip: rect(21px, 9999px, 62px, 0);
    }
    10% {
      clip: rect(21px, 9999px, 80px, 0);
    }
    15% {
      clip: rect(71px, 9999px, 90px, 0);
    }
    20% {
      clip: rect(94px, 9999px, 30px, 0);
    }
    25% {
      clip: rect(27px, 9999px, 58px, 0);
    }
    30% {
      clip: rect(87px, 9999px, 89px, 0);
    }
    35% {
      clip: rect(95px, 9999px, 49px, 0);
    }
    40% {
      clip: rect(34px, 9999px, 81px, 0);
    }
    45% {
      clip: rect(60px, 9999px, 76px, 0);
    }
    50% {
      clip: rect(88px, 9999px, 75px, 0);
    }
    55% {
      clip: rect(49px, 9999px, 68px, 0);
    }
    60% {
      clip: rect(29px, 9999px, 75px, 0);
    }
    65% {
      clip: rect(52px, 9999px, 62px, 0);
    }
    70% {
      clip: rect(44px, 9999px, 15px, 0);
    }
    75% {
      clip: rect(56px, 9999px, 79px, 0);
    }
    80% {
      clip: rect(67px, 9999px, 74px, 0);
    }
    85% {
      clip: rect(57px, 9999px, 100px, 0);
    }
    90% {
      clip: rect(89px, 9999px, 54px, 0);
    }
    95% {
      clip: rect(48px, 9999px, 88px, 0);
    }
    100% {
      clip: rect(21px, 9999px, 68px, 0);
    }
  }`;

const styles = {
    container: css({
        textAlign: "center",
        ...size(percent(100)),
    }),
    map: css({
        width: percent(70),
        padding: rem(2),
        borderRadius: rem(3),
    }),
    ...mq("min-width: 950px", {
        map: css({
            width: percent(35),
            padding: rem(2),
            borderRadius: rem(3),
            backgroundColor: "red",
        }),
    }),

    animation: css({
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        fontSize: rem(5),
        padding: rem(3),
        "&::before, &::after": {
            content: `"TROUVKACH"`,
            position: "absolute",
            top: "23px",
            left: "0",
            right: "0",
            overflow: "hidden",
            backgroundColor: "black",
            color: "white",
        },
        "&::before": {
            left: rem(0.8),
            textShadow: "2px 0 #00ffea",
            animation: `${glitch} 3s infinite linear`,
        },
        "&::after": {
            left: "8px",
            textShadow: "-2px 0 #fe3a7f",
            animation: `${glitch} 2s infinite linear`,
        },
    }),

    containertitle: css({
        ...size(percent(100)),
    }),
};

export default class Map extends React.Component {
    render() {
        return (
            <div className={styles.containertitle}>
                {" "}
                <h1 className={styles.animation}>{"TROUVKACH"}</h1>
                <div className={styles.container}>
                    <img className={styles.map} src={maptest} alt={"Maptest"} />
                </div>
            </div>
        );
    }
}
