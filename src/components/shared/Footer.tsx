import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className="overflow-hidden">
                <div className="px-8 md:px-12 pt-48 2xl:max-w-7xl mx-auto">
                    <svg width="100%" viewBox="0 0 3414 805" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_1987_3)">
                        <path d="M562.732 910.489C491.053 910.489 457.889 881.603 426.863 818.483L315.601 593.818C300.623 563.863 287.785 561.723 246.062 561.723H210.757V783.179C210.757 875.184 212.897 875.184 301.693 882.673V903H16.0475V882.673C104.844 875.184 106.983 875.184 106.983 783.179V231.145C106.983 139.139 104.844 139.139 16.0475 131.65V111.324H300.623C469.657 111.324 550.964 190.491 550.964 318.871C550.964 426.924 493.193 507.162 392.629 542.466L499.612 743.595C546.685 832.391 573.431 874.115 641.9 882.673V903C616.224 907.279 586.269 910.489 562.732 910.489ZM210.757 532.838H250.341C373.372 532.838 439.701 481.486 439.701 348.826C439.701 243.983 402.257 134.86 267.458 134.86C212.897 134.86 210.757 139.139 210.757 223.656V532.838ZM781.981 234.354C741.327 234.354 709.232 203.329 709.232 162.676C709.232 122.022 741.327 89.9269 781.981 89.9269C822.635 89.9269 853.66 122.022 853.66 162.676C853.66 203.329 822.635 234.354 781.981 234.354ZM915.71 882.673V903H647.182V882.673C733.839 876.254 737.048 874.115 737.048 761.782V486.835C737.048 417.296 711.372 409.807 636.484 409.807V389.48C719.931 389.48 769.143 364.874 826.914 314.592L835.473 319.941V761.782C835.473 874.115 839.752 875.184 915.71 882.673ZM1203.79 882.673V903H935.26V882.673C1021.92 876.254 1025.13 874.115 1025.13 761.782V363.804H956.656V335.988L1025.13 324.22V294.265C1025.13 138.069 1113.92 37.5051 1258.35 37.5051C1312.91 37.5051 1363.19 51.4129 1394.22 73.8794C1412.41 62.1112 1430.59 47.1336 1439.15 38.5749L1447.71 43.9241V761.782C1447.71 874.115 1451.99 875.184 1527.95 882.673V903H1259.42V882.673C1346.08 876.254 1349.29 874.115 1349.29 761.782V363.804H1123.55V761.782C1123.55 874.115 1126.76 876.254 1203.79 882.673ZM1123.55 279.287V332.779H1349.29V180.863C1349.29 133.79 1303.28 69.6 1231.6 69.6C1156.72 69.6 1123.55 135.93 1123.55 279.287ZM1794.77 913.698C1678.16 913.698 1575.45 817.413 1575.45 628.053C1575.45 450.461 1663.18 314.592 1807.61 314.592C1893.19 314.592 1991.62 364.874 1991.62 534.977L1680.3 567.072C1681.37 717.919 1739.14 852.718 1841.84 852.718C1893.19 852.718 1948.83 819.553 1993.76 772.48L2006.6 789.598C1960.59 845.229 1892.13 913.698 1794.77 913.698ZM1793.7 345.617C1728.44 345.617 1691 416.226 1682.44 516.79H1889.99C1883.57 362.734 1825.8 345.617 1793.7 345.617ZM2243.98 913.698C2202.26 913.698 2170.16 897.651 2147.7 897.651C2133.79 897.651 2124.16 904.07 2119.88 924.397H2098.49L2077.09 715.779L2101.7 713.64C2131.65 810.994 2159.47 885.883 2236.49 885.883C2284.64 885.883 2331.71 858.067 2331.71 791.737C2331.71 646.24 2083.51 636.612 2083.51 466.508C2083.51 386.271 2137 314.592 2251.47 314.592C2289.99 314.592 2309.24 326.36 2330.64 326.36C2343.48 326.36 2350.97 317.801 2357.39 293.195H2376.64L2392.69 480.416L2370.22 482.556C2340.27 392.69 2307.1 342.407 2249.33 342.407C2205.47 342.407 2165.89 372.363 2165.89 423.715C2165.89 549.955 2413.02 573.491 2413.02 748.944C2413.02 853.788 2319.94 913.698 2243.98 913.698ZM2669.2 913.698C2627.48 913.698 2595.38 897.651 2572.92 897.651C2559.01 897.651 2549.38 904.07 2545.1 924.397H2523.7L2502.31 715.779L2526.91 713.64C2556.87 810.994 2584.68 885.883 2661.71 885.883C2709.85 885.883 2756.93 858.067 2756.93 791.737C2756.93 646.24 2508.73 636.612 2508.73 466.508C2508.73 386.271 2562.22 314.592 2676.69 314.592C2715.2 314.592 2734.46 326.36 2755.86 326.36C2768.69 326.36 2776.18 317.801 2782.6 293.195H2801.86L2817.91 480.416L2795.44 482.556C2765.49 392.69 2732.32 342.407 2674.55 342.407C2630.69 342.407 2591.1 372.363 2591.1 423.715C2591.1 549.955 2838.23 573.491 2838.23 748.944C2838.23 853.788 2745.16 913.698 2669.2 913.698ZM3170.37 314.592C3322.29 314.592 3405.74 422.645 3405.74 599.167C3405.74 788.528 3306.24 913.698 3156.47 913.698C3001.34 913.698 2921.1 805.645 2921.1 630.193C2921.1 439.762 3018.46 314.592 3170.37 314.592ZM3174.65 885.883C3243.12 885.883 3296.62 816.344 3296.62 651.589C3296.62 493.254 3253.82 342.407 3148.98 342.407C3077.3 342.407 3033.44 411.947 3033.44 574.561C3033.44 737.176 3074.09 885.883 3174.65 885.883Z" fill="#121826">
                        </path>
                    </g>
                        <defs>
                            <clipPath id="clip0_1987_3">
                                <rect width="3414" height="805" fill="white">
                                </rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </section>
        </div>
    );
};

export default Footer; 