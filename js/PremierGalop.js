/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var count = 0;
for ( var i = 0; i < 4; i++ ) {
  setTimeout(function(){
    console.log( "Check the value of i." + count++ );
  }, i * 200);
}

//  000000000011111
//  012345678901234
//00      ccD
//01      c1c
//02      c2c
//03      c3c
//04      c4c
//05      c5c
//06Dcccccc6ccccccc
//07c123456 654321c
//08ccccccc6ccccccD
//09      c5c
//10      c4c
//11      c3c
//12      c2c
//13      c1c
//14      Dcc

//var physicalPositionsOfCases = {
//  "c" : [[0,6],[0,7],
//         [1,6],[1,8],
//         [2,6],[2,8],
//         [3,6],[3,8],
//         [4,6],[4,8],
//         [5,6],[5,8],
//         [6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],
//         [7,0],[7,14],
//         [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],
//         [9,6],[9,8],
//         [9,6],[9,8],
//         [10,6],[10,8],
//         [11,6],[11,8],
//         [12,6],[12,8],
//         [13,6],[13,8],
//         [14,7],[14,8]
//     ],
//   "D" : [[0,8],[8,14],[14,6],[6,0]],
//   "#" : [[[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]],
//          [[7,13],[7,12],[7,11],[7,10],[7,9],[7,8]],
//          [[13,7],[12,7],[11,7],[10,7],[9,7],[8,7]],
//          [[7,1],[7,2],[7,3],[7,4],[7,5],[7,6]]
//   ],
//   "?" : [7,7]
//};


var cases = [
  ["D",8,0],    // 0
  ["c",8,1],
  ["c",8,2],
  ["c",8,3],
  ["c",8,4],
  ["c",8,5],
  ["c",8,6],
  ["c",9,6],
  ["c",10,6],
  ["c",11,6],
  ["c",12,6],
  ["c",13,6],
  ["c",14,6],
  ["x",14,7],   //13
  ["D",14,8],   //14
  ["c",13,8],
  ["c",12,8],
  ["c",11,8],
  ["c",10,8],
  ["c",9,8],
  ["c",8,8],
  ["c",8,9],
  ["c",8,10],
  ["c",8,11],
  ["c",8,12],
  ["c",8,13],
  ["c",8,14],
  ["x",7,14],   //27
  ["D",6,14],   //28
  ["c",6,13],
  ["c",6,12],
  ["c",6,11],
  ["c",6,10],
  ["c",6,9],
  ["c",6,8],
  ["c",5,8],
  ["c",4,8],
  ["c",3,8],
  ["c",2,8],
  ["c",1,8],
  ["c",0,8],
  ["x",0,7],    //41
  ["D",0,6],    //42
  ["c",1,6],
  ["c",2,6],
  ["c",3,6],
  ["c",4,6],
  ["c",5,6],
  ["c",6,6],
  ["c",6,5],
  ["c",6,4],
  ["c",6,3],
  ["c",6,2],
  ["c",6,1],
  ["c",6,0],
  ["x",7,0],    //55
  ["1",7,1],    //56
  ["2",7,2],
  ["3",7,3],
  ["4",7,4],
  ["5",7,5],
  ["6",7,6],
  ["1",13,7],   //62
  ["2",12,7],
  ["3",11,7],
  ["4",10,7],
  ["5",9,7],
  ["6",8,7],
  ["1",7,13],   //68
  ["2",7,12],
  ["3",7,11],
  ["4",7,10],
  ["5",7,9],
  ["6",7,8],
  ["1",1,7],    //74
  ["2",2,7],
  ["3",3,7],
  ["4",4,7],
  ["5",5,7],
  ["6",6,7],    //79
  ["$",7,7],    //80
];

var logicalRelationOfCases = [];

var boardDimension = 15;

var CST_DCELL = "Dcell";
var CST_CELL = "cell";
var CST_LADDER = "ladder";
var CST_GOAL = "goal";

var CST_XGRID_SIZE = "XGridSize";
var CST_YGRID_SIZE = "YGridSize";
var CST_XGRID_POS = "XGridPos";
var CST_YGRID_POS = "YGridPos";
            
var fillLogicalRelationOfCases = function()
{
    for(var i=0; i < 52; i++)
    {
        logicalRelationOfCases.push([i,i+1]);
    }
    var tabLadderBaseIndex = [55,13,27,41];
    var firstLadderIndex = 56;
    var endCaseIndex = 80;
    var computeIndex = firstLadderIndex;
    for(var ladderIndex=0; ladderIndex < 4; ladderIndex++)
    {
        var indexLadderBase = tabLadderBaseIndex[ladderIndex];
        logicalRelationOfCases.push([indexLadderBase,computeIndex]); //x-1
        for(var i=0; i < 5; i++) //1-2 2-3 3-4 4-5 5-6
        {
            logicalRelationOfCases.push([computeIndex,computeIndex+1]);
            computeIndex++;
        }
        logicalRelationOfCases.push([computeIndex,endCaseIndex]); //6-$
        computeIndex++;
    }
};

var gridBoxPosition = [[0,0],[9,0],[0,9],[9,9]];
var CST_BOXLOGICUNIT = 6;

var generateHorses = function(nbPlayers, nbHorses)
{
    for(var iPlayer = 0;iPlayer<nbPlayers; iPlayer++)
    {
        var boxName = "box_"+iPlayer;
        $("<div class='box' id='"+boxName+"'>")
            .data(CST_XGRID_SIZE,CST_BOXLOGICUNIT)
            .data(CST_YGRID_SIZE,CST_BOXLOGICUNIT)
            .data(CST_XGRID_POS,gridBoxPosition[iPlayer][0])
            .data(CST_YGRID_POS,gridBoxPosition[iPlayer][1])
            .appendTo("div.board");
        var box = $("#"+boxName);
        for(var iHorse = 0;iHorse<nbHorses; iHorse++)
        {
            var id = iPlayer + "_" + iHorse ;
            var idSharp = "#" + id ;
            //$("#1_1").draggable({ grid: [ 40, 40 ] });
            //$(id).draggable({ grid: [ 40, 40 ] });
            box.append("<img class='horse' id='"+ id +"' src='"+listeChevaux[iPlayer]+"'/>");
            $(idSharp).draggable({
                containment: 'div.board',
                stack: 'div.board',
                cursor: 'move',
                revert: true
            });
        }
    }
}

var generateBoard = function()
{
    for(var i=0;i<cases.length;i++)
    {
        var caseType = cases[i][0];
        var XGridPos = cases[i][1];
        var YGridPos = cases[i][2];
        var className = {
            "D": CST_DCELL,
            "c": CST_CELL,
            "x": CST_CELL,
            "1": CST_LADDER,
            "2": CST_LADDER,
            "3": CST_LADDER,
            "4": CST_LADDER,
            "5": CST_LADDER,
            "6": CST_LADDER,
            "$": CST_GOAL
        };
        var textToDisplay = (className[caseType] == CST_CELL
            || className[caseType] == CST_DCELL
            || className[caseType] == CST_GOAL)?
            "": caseType;
        $("<div class='"+className[caseType]+"' id=case_'"+i+"'>"+textToDisplay+"</div>")
            .data(CST_XGRID_SIZE,1)
            .data(CST_YGRID_SIZE,1)
            .data(CST_XGRID_POS,XGridPos)
            .data(CST_YGRID_POS,YGridPos)
            .droppable( {
                accept: 'div.cell div.Dcell div.ladder',
                hoverClass: 'hovered',
                drop: handleHorseDrop
            })
            .appendTo("div.board");
    }
}

var horseRedim = function()
{
    var gridUnit = parseInt(innerHeight / boardDimension);
    var horse = $("img.loadHorse:first");
    var horseHeight = horse.height();
    var horseWidth = horse.width();
    $('img.loadHorse').hide();
    var horseRatio = 0;
    if(horseHeight > horseWidth)
    {
        if(gridUnit>horseHeight)
            horseRatio = horseHeight /gridUnit ;
        else
            horseRatio = gridUnit / horseHeight;
    }
    else
    {
        if(gridUnit>horseWidth)
            horseRatio = horseWidth / gridUnit ;
        else
            horseRatio = gridUnit / horseWidth;
    }
    $("img.horse").width(horseWidth * horseRatio).height(horseHeight * horseRatio);
}

var redimensionnement = function()
{
    var gridUnit = parseInt(innerHeight / boardDimension);
    var boardPosition = $("div.board").attr("data-height",gridUnit).attr("data-width",gridUnit)
        .css({
            height: (boardDimension*gridUnit)+'px',
            width: (boardDimension*gridUnit)+'px'
        })
        .position();
    var boardLeft = boardPosition['left'];
    var boardTop = boardPosition['top'];
    
    var horse = $("img.loadHorse:first");
    if(horse.length>0)
    {
        if(horse[0].complete)
            horseRedim();
        else
            horse.load(horseRedim);
    }
    
    $('div.box, div.horse, div.'+CST_DCELL+', div.'+CST_CELL+', div.'+CST_LADDER+', div.'+CST_GOAL).each(function() {
        var XGridSize = $(this).data(CST_XGRID_SIZE);
        var YGridSize = $(this).data(CST_YGRID_SIZE);
        var XGridPos = $(this).data(CST_XGRID_POS);
        var YGridPos = $(this).data(CST_YGRID_POS);
        $(this).css({
            left: (boardLeft + gridUnit*XGridPos)+'px',
            top: (boardTop + gridUnit*YGridPos)+'px',
            height : (YGridSize * gridUnit) + 'px',
            width : (XGridSize * gridUnit) + 'px'
        });
    });
}

var handleHorseDrop = function(event, ui ) {
//  var slotNumber = $(this).data( 'number' );
//  var cardNumber = ui.draggable.data( 'number' );
  
//    if ( slotNumber == cardNumber ) {
//    ui.draggable.addClass( 'correct' );
//    ui.draggable.draggable( 'disable' );
//    $(this).droppable( 'disable' );
//    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
//    ui.draggable.draggable( 'option', 'revert', false );
//    correctCards++;
//  } 
}

var listeChevaux = ["gfx/YellowHorse.png",
                    "gfx/GreenHorse.png",
                    "gfx/RedHorse.png",
                    "gfx/BlueHorse.png"];
var nbJoueurs = listeChevaux.length;
var nbChevaux = 4;

$(document).ready(function() {
    console.log('ready!');
    fillLogicalRelationOfCases();
    console.log('coucou');
    generateBoard();
    generateHorses(nbJoueurs,nbChevaux);
    redimensionnement();
  
  // En cas de redimensionnement de la fenêtre
    $(window).resize(function(){ 
        redimensionnement(); 
    }); 
 
    console.log('FIN!');
});

