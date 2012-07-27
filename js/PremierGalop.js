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
(function(){
    
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

//logicalRelationOfCases array
//  - the index is the current case
//  - the value is a list of possible next case)
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

//Box3||Box0
//==========
//Box2||Box1
var gridBoxPosition = [[9,0],[9,9],[0,9],[0,0]];
var CST_BOXLOGICUNIT = 6;
var CST_IMAGE = "image";
var CST_COLOR = "color";

var CST_INFOLOGICUNIT_X = CST_BOXLOGICUNIT;
var CST_INFOLOGICUNIT_Y = boardDimension;
var CST_INFOLOGICPOS_X = boardDimension;
var CST_INFOLOGICPOS_Y = 0;

var CST_SCORELOGICUNIT_Y = 1;
var CST_SCORELOGICPOS_Y = CST_INFOLOGICPOS_Y;

var CST_DIEVALUELOGICUNIT_Y = Math.floor(CST_BOXLOGICUNIT/2);
var CST_GRAPHICLOGICUNIT_Y = Math.floor(CST_BOXLOGICUNIT/2);
var CST_DIEVALUELOGICPOS_Y = CST_INFOLOGICUNIT_Y - CST_GRAPHICLOGICUNIT_Y - CST_DIEVALUELOGICUNIT_Y;
var CST_GRAPHICLOGICPOS_Y = CST_INFOLOGICUNIT_Y - CST_DIEVALUELOGICUNIT_Y;

var CST_CLASS_REDIM = 'redim';

var listeChevaux = [{image: "gfx/YellowHorse.png"},
                    {image: "gfx/GreenHorse.png"},
                    {image: "gfx/RedHorse.png"},
                    {image: "gfx/BlueHorse.png"}];
                
var nbJoueurs = listeChevaux.length;
var nbChevaux = 4;


var horse = function(horseId)
{
    this.horseId = horseId;
    this.caseId = -1;//by default a horse is in the Box
}

horse.prototype = {
    getCaseId : function()
    {
        return this.caseId;
    },

    setCaseId : function(caseId)
    {
        this.caseId = caseId;
    },

    getHorseId : function()
    {
        return this.horseId;
    },
    
    isFreeHorse : function()
    {
        return this.caseId < 0;
    }
};

var computeHorseId = function(playerId, horseNum) {return playerId*10000 + horseNum;};
var computePlayerId = function(horseId) {return horseId / 10000;};
var isValidHorseId = function(horseId) {return horseId >=0;};
var launchDie = function() {return Math.floor(Math.random()*6 + 1);};

var player = function(playerId, nbHorses)
{
    this.playerId = playerId;
    this.horses = new Array(nbHorses);
    for(var i=0; i<nbHorses; i++)
        this.horses[i] = new horse(computeHorseId(playerId,i));
    this.arrivedHorses = [];
}

player.prototype = {
    getNbHorses : function()
    {
        return this.horses.length;
    },
    
    getPlayerId : function()
    {
        return this.playerId;
    },
    
    getHorse : function(horseId)
    {
//        for(var i=0;i<this.horses.length;i++)
//            if(this.horses[i].GetHorseId()==horseId)
//                return this.horses[i];
//        return null;
        return getAHorse(function(horse) {return horse.GetHorseId()==horseId;}, horseId);
    },
    
    getHorses : function()
    {
        return getAHorse(function(horse) {return horse.GetHorseId()==horseId;}, horseId);
    },
    
    setCaseForHorse : function(horseId, caseId)
    {
        var horse = this.getHorse(horseId);
        if(horse !=null)
            horse.setCaseId(caseId);
    },
    
    getAFreeHorse : function()
    {
        return getAHorse(function(horse) {return horse.isFreeHorse();});
    },
    
    getAHorse : function(callbackToTest, valueToTest)
    {
        for(var i=0;i<this.horses.length;i++)
            if(callbackToTest(this.horses[i],valueToTest))
                return this.horses[i];
        return null;        
    }
};

var board = function(nbPlayers, nbHorses)
{
    this.players = new Array(nbPlayers);
    for(var playerId = 0; playerId < nbPlayers; playerId++)
        this.players[playerId] = new player(playerId,nbHorses);
    var nbCases = cases.length;
    this.casesHorsePresence = new Array(nbCases);
    for(var caseId = 0; caseId < nbCases; caseId++)
        this.casesHorsePresence[caseId] = -1;//No Horse on the case.
};
            
board.prototype = {
    getNbPlayers : function() {return this.players.length;},
    
    getNbHorses : function() {return this.players.length>0?this.players[0].getNbHorses():0;},
    
    fillLogicalRelationOfCases : function()
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
    },

    istheBoxLocation : function(cellId) {return (cellId < 0);},

    isABaseForTheLadderForPlayer : function(cell, playerId)
    {return (cell[CST_CASE_TYPE] == "x" && cell[CST_PLAYER_ID] == playerId);},

    isALadderCase : function(cellId)
    {
        var caseType = cases[cellId][CST_CASE_TYPE];
        return caseType == "1" || caseType == "2" || caseType == "3" || caseType == "4" || caseType == "5" || caseType == "6";
    },
    
    getValueOfLadderCase : function(cellId)
    {
        switch(cases[cellId])
        {
            case "1" :return 1;
            case "2" :return 2;
            case "3" :return 3;
            case "4" :return 4;
            case "5" :return 5;
            case "6" :return 6;
            default :throw "wrong ladder case value";
        }
    },
    
    whichHorseIsOnTheCase : function (caseId)
    {
        //first solution : iterate on all player, and try to find a horse (not really efficient, but data is present only once)
        //alternative solution : fill a structure that keeps the horse presence on a case
        var horseId = this.casesHorsePresence[caseId];
        if(horseId<0)
            return null;
        else
            return this.players.getHorse(horseId);
    },
    
    findCaseForThePlayer : function(caseType,playerId)
    {
        for(var i=0;i<cases.length;i++)
        {
            if(cases[i][CST_CASE_TYPE] == caseType && cases[i][CST_PLAYER_ID]==playerId)
                return cases[i];
        }
        return null;
    },

    getNextPosition : function(currentCellId, playerId)
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
    },
    
    getNextPositionsForDieValue : function(playerId, dieValue)
    {
        var horses = player.getPlayerId(playerId).getHorses();
        var nbHorses = horses.length;
        var result = [];
        for(var horseNum = 0; horseNum < nbHorses; horseNum++)
        {
            var currentHorse = horses[horseNum];
            var currentCellId = currentHorse.getCaseId();
            var targetCellId = getNextPositionForDieValue(currentCellId, currentHorse, dieValue);
            if(targetCellId >= 0) //only interesting position are returned!
            {
                result.push({
                    caseA : currentCellId,
                    caseB : targetCellId,
                    horseId : horses[horseNum].getHorseId()
                });
            }
        }
    },
    
    getNextPositionForDieValue : function(currentCellId, horse, dieValue)
    {
        var playerId = computePlayerId(horse.getHorseId());
        if(istheBoxLocation(currentCellId) && dieValue == 6)
        {
            return this.getNextPosition(currentCellId, playerId);
        }
        else
        {
            var nextPositionCellId = this.getNextPosition(currentCellId, playerId);
            if(nextPositionCellId<0) //Next position is not possible (a horse of the same color is already on the case)
            {
                return -1;
            }
            else //position has been retrieved
            {    
                var horseIdOnTheNextPosition = this.casesHorsePresence[nextPositionCellId];
                if(isValidHorseId(horseIdOnTheNextPosition))
                {//there is already a horse on the next position
                    var playerIdOfTheOtherHorse = computePlayerId(horseIdOnTheNextPosition);
                    if(playerIdOfTheOtherHorse == playerId)
                    {//the horse is owned by the same player, so it is the same color
                        //case is busy, and can't be freed
                        return -1;
                    }
                    else //the horse is not owned by the player (different color).
                    {
                        if(dieValue==1) //So it can't be replaced only if die is 1
                            return nextPositionCellId;
                        else //otherwise horse is not allowed to move
                            return -1;
                    }
                }
                else
                {//there is no horse on the next position
                    if(this.isALadderCase(nextPositionCellId))
                    {
                        //retrieve value of the ladder case.
                        var valueOfLadderCase = this.getValueOfLadderCase(nextPositionCellId);
                        if(dieValue == valueOfLadderCase)
                            return nextPositionCellId;
                        else
                            return -1;
                    }
                    else
                    {
                        if(dieValue<=1) //if die value is 1, the final position of the move has been reached
                            return nextPositionCellId;
                        else
                            return getNextPositionForDieValue(nextPositionCellId, horse, dieValue-1);
                    }
                }
            }
        }
    },
    
    moveHorseFromCaseAtoCaseB : function(caseA,caseB)
    {
        var horseIdForCaseA = this.casesHorsePresence[caseA];
        var horseIdForCaseB = this.casesHorsePresence[caseB];
        var playerIdA = computePlayerId(horseIdForCaseA);
        var playerIdB = computePlayerId(horseIdForCaseB);
        if(isValidHorseId(horseIdForCaseB))
        {
            if(playerIdA==playerIdB)
            {
                throw "error: this move is not allowed";
            }
            else
            {
                this.players[playerIdB].setCaseId(-1);//horse return to the rest box!
            }
        }
        this.players[playerIdA].setCaseId(caseB);
        this.casesHorsePresence[caseB] = this.casesHorsePresence[caseA];
        this.casesHorsePresence[caseA] = -1;
    },

    generateHorses : function()
    {
        var nbPlayers = this.getNbPlayers();
        var spanBoard = $('span.board');
        for(var iPlayer = 0;iPlayer<nbPlayers; iPlayer++)
        {
            var boxName = "box_"+iPlayer;
            $("<div/>")
                .addClass('box')
                .attr("id",boxName)
                .addClass(CST_CLASS_REDIM)
                .data(CST_XGRID_SIZE,CST_BOXLOGICUNIT)
                .data(CST_YGRID_SIZE,CST_BOXLOGICUNIT)
                .data(CST_XGRID_POS,gridBoxPosition[iPlayer][0])
                .data(CST_YGRID_POS,gridBoxPosition[iPlayer][1])
                .data(CST_COLOR,listeChevaux[iPlayer][CST_COLOR])
                .addClass("player"+iPlayer)
                .appendTo(spanBoard);
            var box = $("#"+boxName);
            var nbHorses = this.getNbHorses();
            for(var iHorse = 0;iHorse<nbHorses; iHorse++)
            {
                var id = iPlayer + "_" + iHorse ;
                var idSharp = "#" + id ;
                //$("#1_1").draggable({ grid: [ 40, 40 ] });
                //$(id).draggable({ grid: [ 40, 40 ] });
                $("<img/>")
                    .addClass('horse')
                    .attr('id',id)
                    .attr('src',listeChevaux[iPlayer][CST_IMAGE])
                    .appendTo(box);
                $(idSharp).draggable({
                    containment: 'span.board',
                    stack: 'span.board',
                    cursor: 'move',
                    revert: true
                });
            }
        }
    },

    generateBoard : function()
    {
        var spanBoard = $("<span/>")
            .addClass('board')
            .addClass(CST_CLASS_REDIM)
            .data(CST_XGRID_SIZE,boardDimension)
            .data(CST_YGRID_SIZE,boardDimension)
            .data(CST_XGRID_POS,0)
            .data(CST_YGRID_POS,0)
            .appendTo('div.premiergalop');
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
            $("<div/>")
                .addClass(className[caseType])
                .addClass("player"+playerId)
                .addClass(CST_CLASS_REDIM)
                .text(textToDisplay)
                .attr('id',"case_"+i)
                .data(CST_XGRID_SIZE,1)
                .data(CST_YGRID_SIZE,1)
                .data(CST_XGRID_POS,XGridPos)
                .data(CST_YGRID_POS,YGridPos)
                .data(CST_CASE_TYPE,caseType)
                .droppable( {
                    accept: '.horse',//'div.cell, div.Dcell, div.ladder',
                    hoverClass: 'hovered',
                    drop: this.handleHorseDrop
                })
                .appendTo(spanBoard);
        }
    },
    
    generateResultBox : function()
    {
        //display info
        var info = $("<span/>")
            .addClass('info')
            .addClass(CST_CLASS_REDIM)
            .data(CST_XGRID_SIZE,CST_INFOLOGICUNIT_X)
            .data(CST_YGRID_SIZE,boardDimension)
            .data(CST_XGRID_POS,CST_INFOLOGICPOS_X)
            .data(CST_YGRID_POS,CST_INFOLOGICPOS_Y)
            .appendTo("div.premiergalop");
      
        var nbPlayers = this.getNbPlayers();
        //display score
        var score = $("<div/>")
            .addClass('score')
            .addClass(CST_CLASS_REDIM)
            .data(CST_XGRID_SIZE,CST_INFOLOGICUNIT_X)
            .data(CST_YGRID_SIZE,CST_SCORELOGICUNIT_Y * nbPlayers)
            .data(CST_XGRID_POS,CST_INFOLOGICPOS_X)
            .data(CST_YGRID_POS,CST_SCORELOGICPOS_Y)
            .appendTo(info);
            
        //display score for each player
        for(var i=0;i<nbPlayers;i++)
        {
            score.append($("<div/>")
                .addClass('player'+i)
                .addClass(CST_CLASS_REDIM)
                .data(CST_XGRID_SIZE,CST_INFOLOGICUNIT_X)
                .data(CST_YGRID_SIZE,CST_SCORELOGICUNIT_Y)
                .data(CST_XGRID_POS,CST_INFOLOGICPOS_X)
                .data(CST_YGRID_POS,CST_SCORELOGICPOS_Y + CST_SCORELOGICUNIT_Y * i)
                .attr('id','score'+i)
                .text("0000"));
        }
        
        //display die value
        $("<div/>")
            .addClass('dievalue')
            .addClass(CST_CLASS_REDIM)
            .data(CST_XGRID_SIZE,CST_INFOLOGICUNIT_X)
            .data(CST_YGRID_SIZE,CST_DIEVALUELOGICUNIT_Y)
            .data(CST_XGRID_POS,CST_INFOLOGICPOS_X)
            .data(CST_YGRID_POS,CST_DIEVALUELOGICPOS_Y)
            .appendTo(info);
            
        //display other data like a graphic of the evolution
        $("<div/>")
            .addClass('graphic')
            .addClass(CST_CLASS_REDIM)
            .data(CST_XGRID_SIZE,CST_INFOLOGICUNIT_X)
            .data(CST_YGRID_SIZE,CST_GRAPHICLOGICUNIT_Y)
            .data(CST_XGRID_POS,CST_INFOLOGICPOS_X)
            .data(CST_YGRID_POS,CST_GRAPHICLOGICPOS_Y)
            .appendTo(info);
    },

    generatePremierGalop : function()
    {
        this.generateBoard();
        this.generateHorses();
        this.generateResultBox();
        this.redimensionnement();
        var myBoard = this;

        // En cas de redimensionnement de la fenêtre
        $(window).resize(function(){ 
            myBoard.redimensionnement(); 
        });
    },
    
    horseRedim : function()
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
    },

    redimensionnement : function()
    {
        var gridUnit = parseInt(innerHeight / boardDimension);
        var boardPosition = $("span.board").attr("data-height",gridUnit).attr("data-width",gridUnit)
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
                this.horseRedim();
            else
                horse.load(this.horseRedim);
        }

        $('div.'+CST_CLASS_REDIM + ', span.'+CST_CLASS_REDIM).each(function() {
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
    },

    handleHorseDrop : function(event, ui ) {
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
}

$(document).ready(function() {
    console.log('ready!');
    var board1 = new board(nbJoueurs,nbChevaux);
    board1.fillLogicalRelationOfCases();//need only one time for all boards! 
    board1.generatePremierGalop();
    console.log('FIN!');
});

}())