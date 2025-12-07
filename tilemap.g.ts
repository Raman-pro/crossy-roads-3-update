// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map":
            case "level1":return tiles.createTilemap(hex`0a0009000205010b0101030101020606060606060606060902010105010b01010302080606060606060606060202050b0101040102020202010101010a010202020201010107010102020202010301010104020202020202020202020202`, img`
2 . . 2 . . . . . 2 
. . . . . . . . . . 
2 . . . . 2 . . . 2 
. . . . . . . . . . 
2 2 . 2 . . . . 2 2 
2 2 . . . . 2 . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.castle.rock1,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "grass":
            case "tile1":return tile1;
            case "start":
            case "tile2":return tile2;
            case "road_right":
            case "tile3":return tile3;
            case "road_left":
            case "tile4":return tile4;
            case "water":
            case "tile5":return tile5;
            case "lilypad_up":
            case "tile6":return tile6;
            case "lilypad_down":
            case "tile7":return tile7;
            case "lilypad_left":
            case "tile8":return tile8;
            case "lilypad_right":
            case "tile9":return tile9;
            case "water_right":
            case "tile10":return tile10;
            case "water_left":
            case "tile11":return tile11;
            case "railway":
            case "tile12":return tile12;
            case "railway_right":
            case "tile16":return tile16;
            case "stall":
            case "tile13":return tile13;
            case "tille_grass":
            case "tile14":return tile14;
            case "lilly":
            case "tile15":return tile15;
            case "myTile":
            case "tile17":return tile17;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
