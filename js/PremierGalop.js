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

var cases = [
  {CaseType : "D", XGridPos: 8, YGridPos: 0, playerId: 0},    // 0
  {CaseType : "c", XGridPos: 8, YGridPos: 1, playerId: 0},
  {CaseType : "c", XGridPos: 8, YGridPos: 2, playerId: 0},
  {CaseType : "c", XGridPos: 8, YGridPos: 3, playerId: 0},
  {CaseType : "c", XGridPos: 8, YGridPos: 4, playerId: 0},
  {CaseType : "c", XGridPos: 8, YGridPos: 5, playerId: 0},
  {CaseType : "c", XGridPos: 8, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 9, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 10, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 11, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 12, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 13, YGridPos: 6, playerId: 0},
  {CaseType : "c", XGridPos: 14, YGridPos: 6, playerId: 0},
  {CaseType : "x", XGridPos: 14, YGridPos: 7, playerId: 1},   //13
  {CaseType : "D", XGridPos: 14, YGridPos: 8, playerId: 1},   //14
  {CaseType : "c", XGridPos: 13, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 12, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 11, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 10, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 9, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 8, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 9, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 10, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 11, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 12, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 13, playerId: 1},
  {CaseType : "c", XGridPos: 8, YGridPos: 14, playerId: 1},
  {CaseType : "x", XGridPos: 7, YGridPos: 14, playerId: 2},   //27
  {CaseType : "D", XGridPos: 6, YGridPos: 14, playerId: 2},   //28
  {CaseType : "c", XGridPos: 6, YGridPos: 13, playerId: 2},
  {CaseType : "c", XGridPos: 6, YGridPos: 12, playerId: 2},
  {CaseType : "c", XGridPos: 6, YGridPos: 11, playerId: 2},
  {CaseType : "c", XGridPos: 6, YGridPos: 10, playerId: 2},
  {CaseType : "c", XGridPos: 6, YGridPos: 9, playerId: 2},
  {CaseType : "c", XGridPos: 6, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 5, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 4, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 3, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 2, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 1, YGridPos: 8, playerId: 2},
  {CaseType : "c", XGridPos: 0, YGridPos: 8, playerId: 2},
  {CaseType : "x", XGridPos: 0, YGridPos: 7, playerId: 3},    //41
  {CaseType : "D", XGridPos: 0, YGridPos: 6, playerId: 3},    //42
  {CaseType : "c", XGridPos: 1, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 2, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 3, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 4, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 5, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 6, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 5, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 4, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 3, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 2, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 1, playerId: 3},
  {CaseType : "c", XGridPos: 6, YGridPos: 0, playerId: 3},
  {CaseType : "x", XGridPos: 7, YGridPos: 0, playerId: 0},    //55
  {CaseType : "1", XGridPos: 7, YGridPos: 1, playerId: 0},    //56
  {CaseType : "2", XGridPos: 7, YGridPos: 2, playerId: 0},
  {CaseType : "3", XGridPos: 7, YGridPos: 3, playerId: 0},
  {CaseType : "4", XGridPos: 7, YGridPos: 4, playerId: 0},
  {CaseType : "5", XGridPos: 7, YGridPos: 5, playerId: 0},
  {CaseType : "6", XGridPos: 7, YGridPos: 6, playerId: 0},
  {CaseType : "1", XGridPos: 13, YGridPos: 7, playerId: 1},   //62
  {CaseType : "2", XGridPos: 12, YGridPos: 7, playerId: 1},
  {CaseType : "3", XGridPos: 11, YGridPos: 7, playerId: 1},
  {CaseType : "4", XGridPos: 10, YGridPos: 7, playerId: 1},
  {CaseType : "5", XGridPos: 9, YGridPos: 7, playerId: 1},
  {CaseType : "6", XGridPos: 8, YGridPos: 7, playerId: 1},
  {CaseType : "1", XGridPos: 7, YGridPos: 13, playerId: 2},   //68
  {CaseType : "2", XGridPos: 7, YGridPos: 12, playerId: 2},
  {CaseType : "3", XGridPos: 7, YGridPos: 11, playerId: 2},
  {CaseType : "4", XGridPos: 7, YGridPos: 10, playerId: 2},
  {CaseType : "5", XGridPos: 7, YGridPos: 9, playerId: 2},
  {CaseType : "6", XGridPos: 7, YGridPos: 8, playerId: 2},
  {CaseType : "1", XGridPos: 1, YGridPos: 7, playerId: 3},    //74
  {CaseType : "2", XGridPos: 2, YGridPos: 7, playerId: 3},
  {CaseType : "3", XGridPos: 3, YGridPos: 7, playerId: 3},
  {CaseType : "4", XGridPos: 4, YGridPos: 7, playerId: 3},
  {CaseType : "5", XGridPos: 5, YGridPos: 7, playerId: 3},
  {CaseType : "6", XGridPos: 6, YGridPos: 7, playerId: 3},    //79
  {CaseType : "$", XGridPos: 7, YGridPos: 7, playerId: -1},    //80
];

var logicalRelationOfCases = new Array(cases.length);

var boardDimension = 15;

var CST_DCELL = "Dcell";
var CST_CELL = "cell";
var CST_LADDER = "ladder";
var CST_GOAL = "goal";

var CST_CASE_TYPE = "CaseType";
var CST_XGRID_SIZE = "XGridSize";
var CST_YGRID_SIZE = "YGridSize";
var CST_XGRID_POS = "XGridPos";
var CST_YGRID_POS = "YGridPos";
var CST_PLAYER_ID = "playerId";

            
var fillLogicalRelationOfCases = function()
{
    //logicalRelationOfCases.map(function() {return [];})//create an empty liis for each element!
    var firstLadderIndex = 56;
    for(var i=0; i < firstLadderIndex; i++)
    {
        logicalRelationOfCases[i]=[i+1];
    }
    var tabLadderBaseIndex = [55,13,27,41];
    var endCaseIndex = 80;
    var computeIndex = firstLadderIndex;
    for(var ladderIndex=0; ladderIndex < 4; ladderIndex++)
    {
        var indexLadderBase = tabLadderBaseIndex[ladderIndex];
        logicalRelationOfCases[indexLadderBase].push(computeIndex); //x-1
        for(var i=0; i < 5; i++) //1-2 2-3 3-4 4-5 5-6
        {
            logicalRelationOfCases[computeIndex] = [computeIndex+1];
            computeIndex++;
        }
        logicalRelationOfCases[computeIndex]=[endCaseIndex]; //6-$
        computeIndex++;
    }
};

///////////////////////////////////////////////////////
var istheBoxLocation = function(cellId) {return (cellId < 0);}
var isABaseForTheLadderForPlayer = function(cell, playerId)
{return (cell[CST_CASE_TYPE] == "x" && cell[CST_PLAYER_ID] == playerId);}

var isALadderCase = function(cell)
{
    var caseType = cell[CST_CASE_TYPE];
    return caseType == "1" || caseType == "2" || caseType == "3" || caseType == "4" || caseType == "5" || caseType == "6";
}

var findCaseForThePlayer = function(caseType,playerId)
{
    for(var i=0;i<cases.length;i++)
    {
        if(cases[i][CST_CASE_TYPE] == caseType && cases[i][CST_PLAYER_ID]==playerId)
            return cases[i];
    }
    return null;
}

var getNextPosition = function(currentCellId, playerId)
{
    if(istheBoxLocation(currentCellId))
    {//horse comes from the box
        //find the corresponding D case for the player
        return findCaseForThePlayer("D",playerId);
    }
    var currentCell = cases[currentCellId];
    if(isABaseForTheLadderForPlayer(currentCell,playerId))
    {
        if(isALadderCase(logicalRelationOfCases[currentCellId][0]))
            return logicalRelationOfCases[currentCellId][0];
        else
        {
            if(isALadderCase(logicalRelationOfCases[currentCellId][1]))
                return logicalRelationOfCases[currentCellId][1];
            else
                console.critical("Invalid logic in the logicalRelationOfCases array");
        }
    }
    else
    {//the current case is a normal case and the next case is a normal case
        //or the current case is a ladder case and the next case is a ladder case or goal case
        return logicalRelationOfCases[currentCellId][0];//only one element in the sub-array
    }
    return null;
}
///////////////////////////////////////////////////////


//Box3||Box0
//==========
//Box2||Box1
var gridBoxPosition = [[9,0],[9,9],[0,9],[0,0]];
var CST_BOXLOGICUNIT = 6;
var CST_IMAGE = "image";
var CST_COLOR = "color";

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
            .data(CST_COLOR,listeChevaux[iPlayer][CST_COLOR])
            .addClass("player"+iPlayer)
            .appendTo("div.board");
        var box = $("#"+boxName);
        for(var iHorse = 0;iHorse<nbHorses; iHorse++)
        {
            var id = iPlayer + "_" + iHorse ;
            var idSharp = "#" + id ;
            //$("#1_1").draggable({ grid: [ 40, 40 ] });
            //$(id).draggable({ grid: [ 40, 40 ] });
            box.append("<img class='horse' id='"+ id +"' src='"+listeChevaux[iPlayer][CST_IMAGE]+"'/>");
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
        var caseType = cases[i][CST_CASE_TYPE];
        var XGridPos = cases[i][CST_XGRID_POS];
        var YGridPos = cases[i][CST_YGRID_POS];
        var playerId = cases[i][CST_PLAYER_ID];
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
            .data(CST_CASE_TYPE,caseType)
            .droppable( {
                accept: '.horse',//'div.cell, div.Dcell, div.ladder',
                hoverClass: 'hovered',
                drop: handleHorseDrop
            })
            .appendTo("div.board")
            .addClass("player"+playerId);
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
        horseRatio = gridUnit / horseHeight;
    }
    else
    {
        horseRatio = gridUnit / horseWidth;
    }
    console.log("horseRatio:" + horseRatio + " horseHeight:" + horseHeight + "horseWidth:" +horseWidth);
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
            width : (XGridSize * gridUnit) + 'px',
            fontSize : (YGridSize * gridUnit) + 'px'
        });
    });
}

var handleHorseDrop = function(event, ui ) {
//  var slotNumber = $(this).data( 'number' );
//  var cardNumber = ui.draggable.data( 'number' );
  
//    if ( slotNumber == cardNumber ) {
    //ui.draggable.addClass( 'correct' );
    //ui.draggable.draggable( 'disable' );
    if($(this).hasClass(CST_GOAL))
    {
        ui.draggable.draggable( 'disable' );//no more draggable
    }
    $(this).droppable( 'disable' );//the zone is temporaly occupied by the horse
    ui.draggable.position( {of: $(this), my: 'left top', at: 'left top'} );//gives the position to the horse
    ui.draggable.draggable( 'option', 'revert', false);//don't force the horse to come back to its original place
//  } 
}

var listeChevaux = [{image: "gfx/YellowHorse.png"},
                    {image: "gfx/GreenHorse.png"},
                    {image: "gfx/RedHorse.png"},
                    {image: "gfx/BlueHorse.png"}];
                
var goalColor = "red";                
                
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
