/**
 * Created by kedouard on 1/15/2017.
 */
function initializeViz() {
    var vizDiv = document.getElementById("myViz");
    var url = "https://public.tableau.com/views/guard-eim-overview-1/db-natl-vs-ga";
    var options = {
        width: vizDiv.offsetWidth,
        height: '800px',
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.activateSheetAsync("");
        }
    };
    viz = new tableau.Viz(vizDiv, url, options);
}

$(initializeViz);

//on.click() {
//    workbook.activateSheetAsync("GDP per capita map");
//}
// http://onlinehelp.tableau.com/samples/en-us/js_api/tutorial.htm