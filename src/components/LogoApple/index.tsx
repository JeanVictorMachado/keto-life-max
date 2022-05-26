import "./styles.css";

interface LogoAppleprops {
  width?: string;
  height?: string;
  color?: string;
}

export const LogoApple = ({
  width = "80px",
  height = "80px",
  color = "#f53374",
}: LogoAppleprops) => {
  return (
    <div className="apple__container">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 1210.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
          fill={color}
          stroke="none"
        >
          <path
            className="path-1"
            d="M1560 12788 c0 -25 62 -246 111 -398 76 -231 149 -411 260 -640 124
-255 198 -385 355 -620 212 -319 393 -538 671 -811 562 -551 1184 -904 1736
-985 218 -32 475 -7 607 59 l45 22 -1 100 c-5 353 -267 810 -744 1298 -396
406 -918 808 -1507 1161 -252 152 -261 177 -30 82 1231 -505 2128 -1262 2506
-2116 31 -70 34 -73 43 -50 20 54 48 281 48 394 0 625 -380 1217 -1080 1680
-194 128 -293 185 -512 290 -566 273 -1185 441 -1908 518 -243 25 -600 35
-600 16z"
          />
          <path
            d="M7989 12096 c-2 -2 -53 -7 -114 -10 -178 -8 -422 -50 -605 -103 -327
-93 -561 -223 -756 -417 -193 -192 -295 -382 -338 -628 -7 -43 -11 -78 -8 -78
2 0 45 39 96 87 458 436 1237 718 2070 750 132 4 158 3 154 -8 -3 -9 -67 -27
-184 -52 -797 -167 -1463 -451 -1816 -777 -124 -114 -228 -263 -252 -362 -6
-25 0 -32 51 -73 106 -84 250 -142 433 -174 89 -15 389 -16 480 -1 520 84 936
250 1385 550 309 207 573 449 809 743 113 141 202 275 190 287 -14 14 -296
106 -429 140 -305 78 -702 129 -1011 130 -83 0 -153 -2 -155 -4z"
          />
          <path
            d="M8740 10044 c-19 -2 -91 -9 -160 -14 -783 -67 -1682 -403 -2520 -943
-226 -145 -253 -170 -125 -111 478 220 902 374 1345 488 998 257 1896 229
2600 -81 872 -385 1416 -1170 1594 -2303 23 -149 35 -245 41 -340 2 -25 9
-128 15 -230 19 -278 -2 -840 -41 -1150 -80 -635 -208 -1178 -412 -1750 -206
-577 -469 -1055 -796 -1445 -108 -129 -309 -327 -431 -424 -668 -531 -1454
-724 -2465 -605 -168 20 -269 39 -610 114 -458 101 -515 97 -939 -59 -316
-117 -645 -198 -996 -248 -180 -25 -686 -25 -850 0 -783 122 -1405 503 -1966
1201 -416 518 -810 1270 -1123 2143 -121 339 -249 960 -307 1488 -21 200 -30
685 -15 841 28 287 74 516 146 724 49 144 171 386 252 499 316 441 801 696
1453 766 78 9 234 15 370 15 389 0 768 -53 1215 -170 787 -205 1485 -518 2135
-958 180 -122 169 -103 -65 106 -1059 947 -2335 1502 -3452 1502 -730 0 -1332
-210 -1795 -626 -321 -289 -561 -685 -693 -1145 -49 -167 -100 -436 -115 -594
-6 -71 -14 -143 -17 -160 -11 -57 -14 -528 -3 -539 5 -5 10 -31 10 -56 0 -124
64 -576 119 -840 161 -775 532 -1768 931 -2495 282 -516 566 -903 914 -1250
194 -193 328 -305 531 -440 436 -291 856 -448 1377 -515 149 -19 199 -21 460
-17 383 7 510 21 868 99 237 51 411 100 687 194 258 87 332 99 533 91 141 -6
251 -22 435 -62 464 -102 1001 -151 1370 -125 459 31 784 102 1139 247 995
405 1734 1330 2216 2773 118 354 240 821 323 1235 85 423 114 619 142 955 9
107 21 211 26 230 6 21 8 158 6 350 -11 825 -147 1455 -438 2031 -148 293
-300 507 -524 738 -320 329 -666 549 -1097 696 -337 116 -625 163 -1028 170
-129 2 -251 1 -270 -1z"
          />
          <path
            d="M5638 5508 c-244 -199 -471 -444 -570 -613 -71 -122 -92 -192 -93
-305 0 -118 21 -167 110 -256 108 -109 345 -206 462 -190 56 7 136 50 170 91
36 42 77 136 98 225 14 57 19 131 23 310 4 242 -3 363 -39 630 -24 177 -28
200 -39 200 -5 0 -60 -42 -122 -92z"
          />
          <path
            d="M6331 5428 c-22 -115 -61 -386 -80 -560 -36 -317 13 -610 120 -716
77 -78 165 -96 304 -63 186 45 347 154 405 275 28 60 37 168 20 250 -27 129
-159 345 -329 540 -97 111 -391 386 -412 386 -4 0 -16 -51 -28 -112z"
          />
          <path
            d="M6264 585 c-131 -30 -262 -98 -360 -187 -51 -48 -104 -129 -104 -161
0 -25 42 -69 84 -88 55 -25 93 -23 141 6 48 30 69 31 137 5 55 -20 96 -52 125
-96 20 -32 87 -64 131 -64 48 0 83 29 127 104 20 35 45 66 55 69 24 6 90 -24
115 -53 71 -82 186 -106 247 -51 38 34 41 76 10 138 -66 128 -277 300 -445
362 -76 28 -184 34 -263 16z"
          />
        </g>
      </svg>
    </div>
  );
};
