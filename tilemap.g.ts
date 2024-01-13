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

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`100010000c0c0c021010100e0e0e0e0e0e0e0e050807080d0f0f0f0f0f0f0f0f0f0f0f130908070d0f0f0f0f0f0f0f0f0f0f0f130807080d0f1e1d2625251c1c1b0f0f13020e121212150c0c0c0c0c0c190f0f130d12121212120c0c0c0c0c0c190f0f130d12121212120c0c20210c0c240f0f130d0f0f110f230c0c1f160c0c240f0f130d0f0f110f150c0c0c0c0c0c1a0f0f130d0f0f110f150c0c0c0c0c0c190f0f130d0f0f110f14171722221717180f0f130d0f0f110f0f0f0f0f0f0f0f0f0f0f13040611111106060606060606060606030a0a0a010a0a0a0a0a0a0a0a010a0a01080908090708080a0b010b0a0b010a0a07070707070709080a0a0a010a0b0b0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.forestTiles8,myTiles.tile2,myTiles.tile3,sprites.castle.tilePath6,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenSwitchUp], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "tri1":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
