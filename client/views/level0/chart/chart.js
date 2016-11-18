/**
 * Created by murali on 18/11/16.
 */

Template.chart.onRendered(function(){


    var chart = new CanvasJS.Chart("finance",
        {
            animationEnabled: true,
            animationDuration: 2000,   //change to 1000, 500 etc
            title:{
                text: "Finance Report"
            },
            data: [
                {
                    type: "column",
                    dataPoints: [
                        { x: 10, y: 71 },
                        { x: 20, y: 55 },
                        { x: 30, y: 50 },
                        { x: 40, y: 65 },
                        { x: 50, y: 95 },
                        { x: 60, y: 68 },
                        { x: 70, y: 28 },
                        { x: 80, y: 34 },
                        { x: 90, y: 14 }
                    ]
                }
            ]
        });
    chart.render();


    var chart = new CanvasJS.Chart("stock",
        {
            animationEnabled: true,
            animationDuration: 2000,   //change to 1000, 500 etc
            title:{
                text: "Stock"
            },

            data: [
                {
                    type: "stackedBar",
                    dataPoints: [
                        { x: new Date(2012, 01, 1), y: 71 },
                        { x: new Date(2012, 02, 1), y: 55},
                        { x: new Date(2012, 03, 1), y: 50 },
                        { x: new Date(2012, 04, 1), y: 65 },
                        { x: new Date(2012, 05, 1), y: 95 }

                    ]
                },
                {
                    type: "stackedBar",
                    dataPoints: [
                        { x: new Date(2012, 01, 1), y: 71 },
                        { x: new Date(2012, 02, 1), y: 55},
                        { x: new Date(2012, 03, 1), y: 50 },
                        { x: new Date(2012, 04, 1), y: 65 },
                        { x: new Date(2012, 05, 1), y: 95 }

                    ]
                },
                {
                    type: "stackedBar",
                    dataPoints: [
                        { x: new Date(2012, 01, 1), y: 71 },
                        { x: new Date(2012, 02, 1), y: 55},
                        { x: new Date(2012, 03, 1), y: 50 },
                        { x: new Date(2012, 04, 1), y: 65 },
                        { x: new Date(2012, 05, 1), y: 95 }

                    ]
                },

                {
                    type: "stackedBar",
                    dataPoints: [
                        { x: new Date(2012, 01, 1), y: 61 },
                        { x: new Date(2012, 02, 1), y: 75},
                        { x: new Date(2012, 03, 1), y: 80 },
                        { x: new Date(2012, 04, 1), y: 85 },
                        { x: new Date(2012, 05, 1), y: 105 }

                    ]
                },
                {
                    type: "stackedBar",
                    dataPoints: [
                        { x: new Date(2012, 01, 1), y: 20 },
                        { x: new Date(2012, 02, 1), y: 35},
                        { x: new Date(2012, 03, 1), y: 30 },
                        { x: new Date(2012, 04, 1), y: 45 },
                        { x: new Date(2012, 05, 1), y: 25 }

                    ]
                }

            ]
        });

    chart.render();

    var chart = new CanvasJS.Chart("share",
        {
            animationEnabled: true,
            animationDuration: 2000,   //change to 1000, 500 etc
            title: {
                text: "Share Rate"
            },
            axisY: {
                labelFormatter: function (e) {
                    return "$" + CanvasJS.formatNumber(e.value, "#,#00");
                },
                includeZero: false
            },
            data: [
                {
                    type: "spline",
                    dataPoints: [
                        { y: 1088 },
                        { y: 1104 },
                        { y: 1112 },
                        { y: 1136 },
                        { y: 1157 },
                        { y: 1162 },
                        { y: 1180 }
                    ]
                }
            ]
        });
    chart.render();

    var chart = new CanvasJS.Chart("profit",
        {
            title:{
                text: "Profit & Loss"
            },
            animationEnabled: true,
            animationDuration: 2000,

            data: [
                {
                    type: "doughnut",
                    dataPoints: [
                        { y: 4181563},
                        { y: 2175498},
                        { y: 3125844},
                        { y: 1176121},
                        { y: 1727161},
                        { y: 4303364},
                        { y: 1717786}
                    ]
                }
            ]
        });
    chart.render();

    var chart = new CanvasJS.Chart("inventory",
        {
            title:{
                text: "Inventory"
            },
            animationEnabled: true,
            animationDuration: 2000,

            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    legendText: "{indexLabel}",
                    dataPoints: [
                        { y: 4181563, indexLabel: "PlayStation 3" },
                        { y: 2175498, indexLabel: "Wii" },
                        { y: 3125844, indexLabel: "Xbox 360" },
                        { y: 1176121, indexLabel: "Nintendo DS"},
                        { y: 1727161, indexLabel: "PSP" },
                        { y: 4303364, indexLabel: "Nintendo 3DS"},
                        { y: 1717786, indexLabel: "PS Vita"}
                    ]
                }
            ]
        });
    chart.render();


});

