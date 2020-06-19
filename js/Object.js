var particles = {};
var layer = {};
var availablePositions = {};
var object = new THREE.Group();

function generateObject(size, scene){
    particles[0] = new Particle();
    particles[0].head.position.set(0,0,0);
    layer[0] = particles;
    for (let i = 0; i < size; i++) {
        addBoundingLayer(i, scene);
    }
    renderObject(scene);
    availablePositions = calculateAvailablePositions();
    return availablePositions;
}


function addBoundingLayer(layerIdx){
    var arrayIdx = 0;
    var particlesForLayer = {};
    var particleNbrPosition;
    if(layerIdx < 1){
        for (let i = 0; i < 12; i++) {
            particleNbrPosition = layer[layerIdx][0].getPosAtFaceI(i);
            particlesForLayer[arrayIdx] = new Particle();
            particlesForLayer[arrayIdx].head.position.setX(particleNbrPosition.x);
            particlesForLayer[arrayIdx].head.position.setY(particleNbrPosition.y);
            particlesForLayer[arrayIdx].head.position.setZ(particleNbrPosition.z);
            arrayIdx++;
        }
        layer[layerIdx+1] = particlesForLayer;
    }else{
        // For each particle in Layer[layerIdx]
        for (let j = 0; j < Object.keys(layer[layerIdx]).length; j++) {
            // For each face of that particle
            for (let i = 0; i < 12; i++) {
                // Get position adjacent to face j
                particleNbrPosition = layer[layerIdx][j].getPosAtFaceI(i);
                if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx])){
                    if(!doesPositionExistInLayer(particleNbrPosition, layer[layerIdx-1])){
                        if(!doesPositionExistInLayer(particleNbrPosition, particlesForLayer)) {
                            particlesForLayer[arrayIdx] = new Particle();
                            particlesForLayer[arrayIdx].head.position.setX(particleNbrPosition.x);
                            particlesForLayer[arrayIdx].head.position.setY(particleNbrPosition.y);
                            particlesForLayer[arrayIdx].head.position.setZ(particleNbrPosition.z);
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
        if(position.distanceTo(layer[i].head.position) === 0) {
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
        scene.add(layer[Object.keys(layer).length-1][j].head)
    }
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

            particleNbrPosition = layer[layerIdx][j].getPosAtFaceI(i);
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

