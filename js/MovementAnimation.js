// MOVEMENT
var targetPosition = new THREE.Vector3();
targetPosition.x = coatingParticle.headRhombic.position.x;
targetPosition.y = coatingParticle.headRhombic.position.y;
targetPosition.z = coatingParticle.headRhombic.position.z;
function calculateParticleTestNewMovementPosition(){
    var movePos = coatingParticle.getPosAtFaceI(getRandomInt(0,11));
    if(doesPositionExistInPositionList(movePos, availableMovementPositions)){
        targetPosition.x = movePos.x;
        targetPosition.y = movePos.y;
        targetPosition.z = movePos.z;
    }
}

function round(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}

function adjustMovement(particle, target){
    adjustNegativeMovement(particle, target);
    adjustPositiveMovement(particle, target);
}

function adjustPositiveMovement(particle, target){
    if (particle.head.position.x < target.x) {
        particle.head.position.x = particle.head.position.x + speed;
    }
    if (particle.head.position.y < target.y) {
        particle.head.position.y = particle.head.position.y + speed;
    }
    if (particle.head.position.z < target.z) {
        particle.head.position.z = particle.head.position.z + speed;
    }
}

function adjustNegativeMovement(particle, target){
    if (particle.head.position.x > target.x) {
        particle.head.position.x = particle.head.position.x - speed;
    }
    if (particle.head.position.y > target.y) {
        particle.head.position.y = particle.head.position.y - speed;
    }
    if (particle.head.position.z > target.z) {
        particle.head.position.z = particle.head.position.z - speed;
    }
}

function hasObjectReachedTarget(head, target){
    if (Math.abs(head.position.x - target.x) <= speed ) {
        if (Math.abs(head.position.y - target.y) <= speed ) {
            if (Math.abs(head.position.z - target.z) <= speed ) {
                head.position.setX(Math.round(head.position.x));
                head.position.setY(Math.round(head.position.y));
                head.position.setZ(Math.round(head.position.z));
                return true;
            }
        }
    }
    return false;
}
