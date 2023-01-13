import { Destructable, File, Point, Rectangle, Timer } from "w3ts";

export function printTerrainTypes(){
    //DIRT: 1281651316
    const startNumber = 1281651316;
    let terrainNumber = GetTerrainType(7100, 1500)
    print("Dirt terrain number: ", terrainNumber);

    let dataString = '';

    for (let x = 0; x < 10; x++) {
        // SetTerrainType(7100 + 260*x, 1500, 0, 0, 300, 0)
        let terrainNumber = GetTerrainType(7100 + 260*x, 1500)
        print(`Terrain ${x} number:`, terrainNumber);
        dataString += `Terrain ${x} number:, ${terrainNumber}`
        // Write to the file
    }
    // Terrain

    File.write("terrainCodes_test.txt", dataString);
}

/**
 * Checks if the terrain region is buildable
 * 
 */
function checkTerrainRegion(squareTileArea, originLoc: Point){
    if((Math.sqrt(squareTileArea) % 1) > 0){
        print(`Invalid square tile area: ${squareTileArea}`);
    }
    print(`Remainder of sqrt ${squareTileArea} : `,(Math.sqrt(squareTileArea) % 1));

    //3135 3265    130units wide? -> 1 tile
    //I have a building that consume 4x4 tiles

    /**
     * Then I need to check the center spawn position - 2tiles left(260units  + 130 safety) and the same for the right, top , and bottom
     */


}

export function checkDestructablesInRegion(origin: Point, radius: number, destroy: boolean){
    let rec = new Rectangle(0,0,radius,radius);
    rec.movePoint(origin)

    rec.enumDestructables(() => {
        const d = GetFilterDestructable();
        //Works
        // if(d) print('Filter Destructable: ', d);
        
        return true;
    }, () => {
        // print("In action")
        let _d = GetEnumDestructable();
        // Destructable.fromHandle(d).destroy();
        let d  = Destructable.fromHandle(_d);

        if(destroy){
            d.destroy()
            print("Destructable destroyed!")
        }
        else if(d) {
            print("destructable is in region");
            return true;
        };
    })
    
}