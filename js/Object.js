var particles = {};
var layer = {};
var availablePositions = {};
var objectGroup = new THREE.Group();
var objectParticleList = [];
var objectPositionList = [];


function generateObject(size, scene){
    particles[0] = new THREE.Vector3(0,0,0);
    particles[0].set(0,0,0);
    layer[0] = particles;
    for (let i = 0; i < size; i++) {
        addBoundingLayer(i, scene);
    }
    renderObject(scene);
    availablePositions = calculateAvailablePositions();
    // for (let i = 0; i < objectParticleList.length; i++) {
    //     console.log(objectParticleList[i].head.position)
    // }
    return availablePositions;
}

var nbrPos = new THREE.Vector3( 0, 0, 0 );
function getNbrPositions(position, nbrPositionIndex){
        let particlePos = position;
        switch(nbrPositionIndex) {
            case 0:
                nbrPos.set( particlePos.x, particlePos.y + 2, particlePos.z + 2);
                break;
            case 1:
                nbrPos.set( particlePos.x + 2, particlePos.y, particlePos.z + 2);
                // code block
                break;
            case 2:
                nbrPos.set( particlePos.x, particlePos.y - 2, particlePos.z + 2);
                // code block
                break;
            case 3:
                nbrPos.set( particlePos.x - 2, particlePos.y, particlePos.z + 2);
                // code block
                break;
            case 4:
                nbrPos.set( particlePos.x, particlePos.y - 2, particlePos.z - 2);
                // code block
                break;
            case 5:
                nbrPos.set( particlePos.x - 2, particlePos.y, particlePos.z - 2);
                // code block
                break;
            case 6:
                nbrPos.set( particlePos.x, particlePos.y + 2, particlePos.z - 2);
                // code block
                break;
            case 7:
                nbrPos.set( particlePos.x + 2, particlePos.y, particlePos.z - 2);
                // code block
                break;
            case 8:
                nbrPos.set( particlePos.x - 2, particlePos.y + 2, particlePos.z);
                // code block
                break;
            case 9:
                nbrPos.set( particlePos.x - 2, particlePos.y - 2, particlePos.z);
                // code block
                break;
            case 10:
                nbrPos.set( particlePos.x + 2, particlePos.y + 2, particlePos.z);
                // code block
                break;
            case 11:
                nbrPos.set( particlePos.x + 2, particlePos.y - 2, particlePos.z);
                // code block
                break;
            default:
                console.log("Error, get nbr particle to face failed");
                return nbrPos;
        }
        return nbrPos;
}


function addBoundingLayer(layerIdx){
    var arrayIdx = 0;
    var particlesForLayer = {};
    var particleNbrPosition;
    if(layerIdx < 1){
        for (let i = 0; i < 12; i++) {
            particleNbrPosition = getNbrPositions(layer[layerIdx][0], i);
            particlesForLayer[arrayIdx] = new THREE.Vector3(0,0,0);
            particlesForLayer[arrayIdx].set(particleNbrPosition.x, particleNbrPosition.y, particleNbrPosition.z);
            arrayIdx++;
        }
        layer[layerIdx+1] = particlesForLayer;
    }else{
        // For each particle in Layer[layerIdx]
        for (let j = 0; j < Object.keys(layer[layerIdx]).length; j++) {
            // For each face of that particle
            for (let i = 0; i < 12; i++) {
                // Get position adjacent to face j
                particleNbrPosition = getNbrPositions(layer[layerIdx][j], i);
                if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx])){
                    if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx-1])){
                        if(!doesPositionExistInLayer(particleNbrPosition, particlesForLayer)) {
                            particlesForLayer[arrayIdx] = new THREE.Vector3(0,0,0);
                            particlesForLayer[arrayIdx].set(particleNbrPosition.x, particleNbrPosition.y, particleNbrPosition.z);
                            arrayIdx++;
                        }
                    }
                }
            }
        }
        layer[layerIdx+1] = particlesForLayer;
    }


}
function doesPositionExistInLayer(position, layer){
    for (let i = 0; i < Object.keys(layer).length; i++) {
        if(position.distanceTo(layer[i]) === 0) {
            return true;
        }
    }
    return false;
}

function doesPositionExistInPositionList(position, positionList){
    for (let i = 0; i < Object.keys(positionList).length; i++) {
        if(position.distanceTo(positionList[i]) === 0) {
            return true;
        }
    }
    return false;
}

function renderObject(scene){
    for (let j = 0; j < Object.keys(layer[Object.keys(layer).length-1]).length; j++) {
        // layer[Object.keys(layer).length-1][j].convertToRole("Boundary");
        var position = layer[Object.keys(layer).length-1][j];
        objectParticleList.push(new ObjectParticle());
        objectParticleList[j].head.position.set(position.x, position.y, position.z);
        objectParticleList[j].matrixAutoUpdate = false;
        // objectGroup.add(objectParticleList[j].head);
        scene.add(objectParticleList[j].head);
    }
    // console.log(objectParticleList.length);
    // scene.add(objectGroup);
}

function calculateAvailablePositions(){
    var layerIdx = Object.keys(layer).length-1;
    var avPosition = {};
    var arrayIdx = 0;
    // For each particle in Layer[layerIdx]
    for (let j = 0; j < Object.keys(layer[layerIdx]).length; j++) {
        // For each face of that particle
        for (let i = 0; i < 12; i++) {
            // Get position adjacent to face j
            particleNbrPosition = getNbrPositions(layer[layerIdx][j], i);
            if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx])){
                if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx-1])){
                    if(!doesPositionExistInPositionList(particleNbrPosition, avPosition)) {
                        avPosition[arrayIdx] = new THREE.Vector3(particleNbrPosition.x, particleNbrPosition.y, particleNbrPosition.z)
                        arrayIdx++;
                    }
                }
            }
        }
    }
    return avPosition;

}

