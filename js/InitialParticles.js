// var xOffSet = -2;
// var yOffSet = 12;
// var zOffSet = 14;

//single leader
// var xOffSet = -4;
// var yOffSet = 8;
// var zOffSet = 12;

//multiple leaders
var xOffSet = -4;
var yOffSet = 8;
var zOffSet = 8;

var initialParticlesIdx = 0;

var initialParticles = {};

[
    // {x: xOffSet, y: yOffSet, z: zOffSet}, //center

    // {x: 2   + xOffSet, y: 2 + yOffSet, z: zOffSet}, //around
    // {x: 2   + xOffSet, y: -2 + yOffSet, z: zOffSet},
    // {x: -2  + xOffSet, y: -2 + yOffSet, z: zOffSet},
    // {x: -2  + xOffSet, y: 2 + yOffSet, z: zOffSet},

    // {x: xOffSet, y: 2 + yOffSet, z: 2 + zOffSet}, //forward
    // {x: xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
    // {x: -2  + xOffSet, y: yOffSet, z: 2 + zOffSet},
    // {x: 2   + xOffSet, y: yOffSet, z: 2 + zOffSet},
    //
    // {x: xOffSet, y: 2 + yOffSet, z: -2 + zOffSet}, //back
    // {x: xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
    // {x: -2  + xOffSet, y: yOffSet, z: -2 + zOffSet},
    // {x: 2   + xOffSet, y: yOffSet, z: -2 + zOffSet},

//
//     {x: 4   + xOffSet, y: 4 + yOffSet, z: zOffSet},
//     {x: 4   + xOffSet, y: yOffSet, z: zOffSet},
//     {x: 4   + xOffSet, y: -4 + yOffSet, z: zOffSet},
//     {x: xOffSet, y: 4 + yOffSet, z: zOffSet},
//     {x: xOffSet, y: -4 + yOffSet, z: zOffSet},
//     {x: -4  + xOffSet, y: 4 + yOffSet, z: zOffSet},
//     {x: -4  + xOffSet, y: yOffSet,  z: zOffSet},
//     {x: -4  + xOffSet, y: -4 + yOffSet, z: zOffSet},
//
//     {x: 6   + xOffSet, y: 2 + yOffSet, z: zOffSet},
//     {x: 6   + xOffSet, y: -2 + yOffSet, z: zOffSet},
//     {x: -6  + xOffSet, y: 2 + yOffSet, z: zOffSet},
//     {x: -6  + xOffSet, y: -2 + yOffSet, z: zOffSet},
//     {x: 2   + xOffSet, y: 6 + yOffSet, z: zOffSet},
//     {x: -2  + xOffSet, y: 6 + yOffSet, z: zOffSet},
//     {x: 2   + xOffSet, y: -6 + yOffSet, z: zOffSet},
//     {x: -2  + xOffSet, y: -6 + yOffSet, z: zOffSet},
//
// //{x:   0     + xOffSet, y: 8 + yOffSet, z: 0 + zOffSet},
// //{x:   0     + xOffSet, y: -8 + yOffSet, z: 0 + zOffSet},
// //{x:   8     + xOffSet, y: 0 + yOffSet, z: 0 + zOffSet},
// //{x:   -8    + xOffSet, y: 0 + yOffSet, z: 0 + zOffSet},
//
//
//     {x: 4   + xOffSet, y: 2 + yOffSet, z: 2 + zOffSet},
//     {x: 4   + xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
//     {x: -4  + xOffSet, y: 2 + yOffSet, z: 2 + zOffSet},
//     {x: -4  + xOffSet, y: -2 + yOffSet, z: 2 + zOffSet},
//     {x: 2   + xOffSet, y: 4 + yOffSet, z: 2 + zOffSet},
//     {x: 2   + xOffSet, y: -4 + yOffSet, z: 2 + zOffSet},
//     {x: -2  + xOffSet, y: 4 + yOffSet, z: 2 + zOffSet},
//     {x: -2  + xOffSet, y: -4 + yOffSet, z: 2 + zOffSet},
//
//     {x: 4   + xOffSet, y: 2 + yOffSet, z: -2 + zOffSet},
//     {x: 4   + xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
//     {x: -4  + xOffSet, y: 2 + yOffSet, z: -2 + zOffSet},
//     {x: -4  + xOffSet, y: -2 + yOffSet, z: -2 + zOffSet},
//     {x: 2   + xOffSet, y: 4 + yOffSet, z: -2 + zOffSet},
//     {x: 2   + xOffSet, y: -4 + yOffSet, z: -2 + zOffSet},
//     {x: -2  + xOffSet, y: 4 + yOffSet, z: -2 + zOffSet},
//     {x: -2  + xOffSet, y: -4 + yOffSet, z: -2 + zOffSet},
//
//     {x: 6   + xOffSet, y: yOffSet, z: 2 + zOffSet},
//     {x: xOffSet, y: 6 + yOffSet, z: 2 + zOffSet},
//     {x: -6  + xOffSet, y: yOffSet, z: 2 + zOffSet},
//     {x: xOffSet, y: -6 + yOffSet, z: 2 + zOffSet},
//
//     {x: 6   + xOffSet, y: yOffSet, z: -2 + zOffSet},
//     {x: xOffSet, y: 6 + yOffSet, z: -2 + zOffSet},
//     {x: -6  + xOffSet, y: yOffSet, z: -2 + zOffSet},
//     {x: xOffSet, y: -6 + yOffSet, z: -2 + zOffSet},
//
//     {x: xOffSet, y: yOffSet, z: 4 + zOffSet},
//     {x: 2   + xOffSet, y: 2 + yOffSet, z: 4 + zOffSet},
//     {x: 2   + xOffSet, y: -2 + yOffSet, z: 4 + zOffSet},
//     {x: -2  + xOffSet, y: -2 + yOffSet, z: 4 + zOffSet},
//     {x: -2  + xOffSet, y: 2 + yOffSet, z: 4 + zOffSet},
//
//     {x: 4   + xOffSet, y: yOffSet, z: 4 + zOffSet},
//     {x: xOffSet, y: -4 + yOffSet, z: 4 + zOffSet},
//     {x: -4  + xOffSet, y: yOffSet, z: 4 + zOffSet},
//     {x: xOffSet, y: 4 + yOffSet, z: 4 + zOffSet},
//
//     {x: xOffSet, y: 6 + yOffSet, z: 6 + zOffSet},
//     {x: xOffSet, y: 8 + yOffSet, z: 8 + zOffSet},
//     {x: xOffSet, y: 4 + yOffSet, z: 8 + zOffSet},
//
//     {x: xOffSet, y: 8 + yOffSet, z: 8 + zOffSet},
//     {x: xOffSet, y: 10 + yOffSet, z: 10 + zOffSet},
//     {x: xOffSet, y: 6 + yOffSet, z: 10 + zOffSet},
//
//     {x: 2 + xOffSet, y: 6 + 2 + yOffSet, z: 6 + zOffSet},
//     {x: 2 + xOffSet, y: 8 + 2 + yOffSet, z: 8 + zOffSet},
//     {x: 2 + xOffSet, y: 4 + 2 + yOffSet, z: 8 + zOffSet},
//
//     {x: 2 + xOffSet, y: 8 + 2 + yOffSet, z: 8 + zOffSet},
//     {x: 2 + xOffSet, y: 10 + 2 + yOffSet, z: 10 + zOffSet},
//     {x: 2 + xOffSet, y: 6 + 2 + yOffSet, z: 10 + zOffSet},
//
//     {x: -2 + xOffSet, y: 6 + 2 + yOffSet, z: 6 + zOffSet},
//     {x: -2 + xOffSet, y: 8 + 2 + yOffSet, z: 8 + zOffSet},
//     {x: -2 + xOffSet, y: 4 + 2 + yOffSet, z: 8 + zOffSet},
//
//     {x: -2 + xOffSet, y: 8 + 2 + yOffSet, z: 8 + zOffSet},
//     {x: -2 + xOffSet, y: 10 + 2 + yOffSet, z: 10 + zOffSet},
//     {x: -2 + xOffSet, y: 6 + 2 + yOffSet, z: 10 + zOffSet},
//
//
//     {x: xOffSet, y: yOffSet, z: -4 + zOffSet},
//     {x: 2   + xOffSet, y: 2 + yOffSet, z: -4 + zOffSet},
//     {x: 2   + xOffSet, y: -2 + yOffSet, z: -4 + zOffSet},
//     {x: -2  + xOffSet, y: -2 + yOffSet, z: -4 + zOffSet},
//     {x: -2  + xOffSet, y: 2 + yOffSet, z: -4 + zOffSet},
//
//     {x: 4   + xOffSet, y: yOffSet, z: -4 + zOffSet},
//     {x: xOffSet, y: -4 + yOffSet, z: -4 + zOffSet},
//     {x: -4  + xOffSet, y: yOffSet, z: -4 + zOffSet},
//     {x: xOffSet, y: 4 + yOffSet, z: -4 + zOffSet},
//
//     {x: xOffSet, y: 2 + yOffSet, z: 6 + zOffSet},
//     {x: xOffSet, y: -2 + yOffSet, z: 6 + zOffSet},
//     {x: -2  + xOffSet, y: yOffSet, z: 6 + zOffSet},
//     {x: 2   + xOffSet, y: yOffSet, z: 6 + zOffSet},
//     {x: xOffSet, y: 2 + yOffSet, z: -6 + zOffSet},
//     {x: xOffSet, y: -2 + yOffSet, z: -6 + zOffSet},
//     {x: -2  + xOffSet, y: yOffSet, z: -6 + zOffSet},
//     {x: 2   + xOffSet, y: yOffSet, z: -6 + zOffSet},
].forEach(function(pos){
    createRhombicObject(pos);
});

// createRhombicDode(10, {x: xOffSet, y: yOffSet, z: zOffSet});
// fillRectangleFace({x: xOffSet, y: yOffSet, z: zOffSet}, 5, 3, 10, 10)
let startOffset = getPosAtFace({x: xOffSet, y: yOffSet, z: zOffSet}, 7, 4);


createCube(216,startOffset);

function createRhombicObject(position){
    var initialParticle = new Particle();
    initialParticle.head.position.set(position.x, position.y, position.z);
    initialParticle.tail.position.set(position.x, position.y, position.z);
    initialParticle.convertToRole("Inactive");
    initialParticles[initialParticlesIdx] = initialParticle;
    initialParticlesIdx++;
}

// function createRhombicDode(sideLength, centerPos){
//     // for (let i = 0; i < 12; i++) {
//     //     createRhombicObject(getPosAtFace({x: xOffSet, y: yOffSet, z: zOffSet}, i, size))
//     // }
//     createRhombicDodeSkeleton(sideLength, centerPos)
// }

// function createRhombicDodeSkeleton(sideLength, centerPos){
//     for (let i = 1; i < sideLength; i++) {
//         let cornerPos = getPosAtFace(centerPos, 0, i);
//         // createRhombicObject(cornerPos)
//         fillSquareFace(cornerPos, 5, 7, i+1)
//     }
// }
var sidePos = [];
function createCube(numberParticles, cornerPosition, quadrant= 0){
    var cubeSideSize = Math.floor(Math.cbrt(numberParticles));
    // var cubeSideSize = 10;
    let cornerPos = new THREE.Vector3(cornerPosition.x, cornerPosition.y, cornerPosition.z);
    let oldCornerPos;
    fillRectangleFace(cornerPos, 5, 3, cubeSideSize, cubeSideSize);
    for (let i = 1; i < cubeSideSize; i++) {
        oldCornerPos = cornerPos;
        if(i%2 === 0){
            cornerPos = getPosAtFace(oldCornerPos, 6,1);
            // cubePositionList.push(new THREE.Vector3(cornerPosition.x, cornerPosition.y, cornerPosition.z));
        }else{
            cornerPos = getPosAtFace(oldCornerPos, 0,1);
            // cubePositionList.push(new THREE.Vector3(cornerPosition.x, cornerPosition.y, cornerPosition.z));
        }
        fillRectangleFace(cornerPos, 5, 3, cubeSideSize, cubeSideSize);
    }

}

function fillRectangleFace(cornerPosition, lengthDir, widthDir, lengthSize, widthSize ){
    for (let i = 0; i < lengthSize; i++) {
        let lineStart = getPosAtFace(cornerPosition, lengthDir, i);
        for (let j = 0; j < widthSize; j++) {
            createRhombicObject(getPosAtFace(lineStart, widthDir, j));
        }

    }

    // cubePositionList.pop();
}


function getPosAtFace(position, faceIdx, distance){
    let nbrPos = new THREE.Vector3(0,0,0);
    switch(faceIdx) {
        case 0:
            nbrPos.set( position.x, position.y + 2*distance, position.z + 2*distance);
            break;
        case 1:
            nbrPos.set( position.x + 2*distance, position.y, position.z + 2*distance);
            // code block
            break;
        case 2:
            nbrPos.set( position.x, position.y - 2*distance, position.z + 2*distance);
            // code block
            break;
        case 3:
            nbrPos.set( position.x - 2*distance, position.y, position.z + 2*distance);
            // code block
            break;
        case 4:
            nbrPos.set( position.x, position.y - 2*distance, position.z - 2*distance);
            // code block
            break;
        case 5:
            nbrPos.set( position.x - 2*distance, position.y, position.z - 2*distance);
            // code block
            break;
        case 6:
            nbrPos.set( position.x, position.y + 2*distance, position.z - 2*distance);
            // code block
            break;
        case 7:
            nbrPos.set( position.x + 2*distance, position.y, position.z - 2*distance);
            // code block
            break;
        case 8:
            nbrPos.set( position.x - 2*distance, position.y + 2*distance, position.z);
            // code block
            break;
        case 9:
            nbrPos.set( position.x - 2*distance, position.y - 2*distance, position.z);
            // code block
            break;
        case 10:
            nbrPos.set( position.x + 2*distance, position.y + 2*distance, position.z);
            // code block
            break;
        case 11:
            nbrPos.set( position.x + 2*distance, position.y - 2*distance, position.z);
            // code block
            break;
        default:
            console.log("Error, get nbr particle to face failed");
            return nbrPos;
    }
    return nbrPos;
}




function renderInitialParticles(scene){
    for (let j = 0; j < Object.keys(initialParticles).length; j++) {
        scene.add(initialParticles[j].head);
        scene.add(initialParticles[j].tail);
        scene.add(initialParticles[j].headTailConnection);
        scene.add(initialParticles[j].target0);
    }
}

function moveInitialParticles(){
    xOffSet = -6;
    yOffSet = 8;
    zOffSet = 10;
}