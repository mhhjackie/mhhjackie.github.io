/**
 * 命令常量
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Commands = (function () {
    function Commands() {
    }
    // 场景管理
    Commands.OPEN_NEWGAME = 'open_newgame';
    Commands.OPEN_JODO = 'open_jodo';
    Commands.OPEN_QUIT = 'open_quit';
    Commands.OPEN_CONTINUE = 'open_continue';
    Commands.CLOSE_NEWGAME = 'close_newgame';
    Commands.CLOSE_JODO = 'close_jodo';
    Commands.CLOSE_QUIT = 'close_quit';
    Commands.CLOSE_CONTINUE = 'close_continue';
    //新场景管理
    Commands.OPNE_SETTING = 'open_setting';
    Commands.CLOSE_SETTING = 'close_setting';
    Commands.OPEN_RANK = "open_rank";
    Commands.CLOSE_RANK = "close_rank";
    Commands.OPEN_LEVELSELECT = "open_levelselect";
    Commands.CLOSE_LEVELSELECT = "close_levelselect";
    Commands.OPEN_SHOP = "open_shop";
    Commands.CLOSE_SHOP = "close_shop";
    Commands.OPEN_REPLAY = "open_replay";
    Commands.CLOSE_REPLAY = "close_replay";
    Commands.OPEN_GIFT = "open_gift";
    Commands.CLOSE_GIFT = "close_gift";
    Commands.OPEN_RESULT = "open_result";
    Commands.CLOSE_RESULT = "close_result";
    Commands.OPEN_AWARD = "open_award";
    Commands.CLOSE_AWARD = "close_award";
    //游戏场景
    Commands.OPEN_NEW_GAME = "open_newgame";
    Commands.CLOSE_NEW_GAME = "close_newgame";
    // 游戏逻辑
    Commands.ADD_SCORE = 'add_score';
    Commands.ADD_FAILED = 'add_failed';
    Commands.GAME_OVER = 'game_over';
    return Commands;
}());
__reflect(Commands.prototype, "Commands");
//# sourceMappingURL=Commands.js.map