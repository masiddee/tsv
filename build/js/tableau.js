/**
 * Created by kedouard on 1/15/2017.
 */
function initializeViz() {
    var vizDiv = document.getElementById("v1");
    var url = "https://public.tableau.com/views/guard-eim-overview-1/db-natl-vs-ga";
    var options = {
        width: '900px',
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("db-natl-vs-ga");
        }
    };
    viz = new tableau.Viz(vizDiv, url, options);
}

$(initializeViz);

$("#b2").click(function(){
    var vizDiv2 = document.getElementById("v2");
    var url = "https://public.tableau.com/views/guard-eim-overview-2-contractors1_V1/DODContractSpending";
    var options = {
        width: '900px',
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("DOD Contract Spending");
        }
    };
    viz = new tableau.Viz(vizDiv2, url, options);
});

$("#b3").click(function(){
    var vizDiv2 = document.getElementById("v3");
    var url = "https://public.tableau.com/views/guard-eim-overview-3-installations/Dashboard1";
    var options = {
        width: '900px',
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("Dashboard1");
        }
    };
    viz = new tableau.Viz(vizDiv2, url, options);
});

$("#b4").click(function(){
    var vizDiv2 = document.getElementById("v4");
    var url = "https://public.tableau.com/views/guard-eim-overview-dynamics/Dashboard1";
    var options = {
        width: '900px',
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("Dashboard1");
        }
    };
    viz = new tableau.Viz(vizDiv2, url, options);
});

$("#b1_2").click(function(){
    var vizDiv2 = document.getElementById("v1_2");
    var url = "https://public.tableau.com/views/guard-eim-overview-1/db-ga-regions-counties";
    var options = {
        width: '900px',
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("db-ga-regions-counties");
        }
    };
    viz = new tableau.Viz(vizDiv2, url, options);
});