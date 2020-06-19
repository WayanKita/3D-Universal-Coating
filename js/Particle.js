function Particle(){
    this.role = "temp";
    this.color = "#00ff00";
    this.moveDir = -1;
    this.material = new THREE.MeshPhongMaterial( { color: "#00ff00", wireframe: false, flatShading: true} );
    this.headRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.tailRhombic = new THREE.Mesh( RhombicDodecahedronGeometry, this.material);
    this.headPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.tailPoint = new THREE.Mesh( new THREE.SphereGeometry( 0.5, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.orientation = 0;
    this.head = new THREE.Object3D().add(this.headRhombic, this.headPoint);
    this.tail = new THREE.Object3D().add(this.tailRhombic, this.tailPoint);
    this.target = [];
    this.targetConnection = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineDashedMaterial({color: 0x000000, dashSize: 0.1, gapSize: 0.05 }));
    this.headTailConnection = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints( [this.head.position, this.tail.position] ), new THREE.MeshBasicMaterial({color: 0x000000 }));
    this.isContracted = true;
    this.moveBrancDir = -1;

    // this.contractParticle = function(){
    //     this.isContracted = true;
    //     this.tail.visible = false;
    // }

    // this.pullParticle = function(particle){
    //     if(this.isContracted){
    //         particle.tail.position.set(particle.head.position.x, particle.head.position.y, particle.head.position.z);
    //         particle.tail.visible = true;
    //         particle.head.position.set(particle.target.x, particle.target.y, particle.target.z);
    //         particle.headTailConnection.geometry.setFromPoints([particle.head.position, particle.tail.position]);
    //         particle.headTailConnection.visible = true;
    //         particle.isContracted = false;
    //         particle.target = [this.head.position];
    //     }else{
    //         console.log("Can't pull particle because this is not contracted");
    //     }
    //
    // }

    this.contractParticle = function () {
        this.tail.position.set(this.head.position.x, this.head.position.y, this.head.position.z);
        this.tail.visible = false;
        this.headTailConnection.visible = false;
        this.isContracted = true;
    }

    this.expandParticle = function(destinationNode){

        this.tail.position.set(this.head.position.x, this.head.position.y, this.head.position.z);
        this.tail.visible = true;
        this.head.position.set(destinationNode.x, destinationNode.y, destinationNode.z);
        this.headTailConnection.geometry.setFromPoints([this.head.position, this.tail.position]);
        this.headTailConnection.visible = true;
        this.isContracted = false;
    }


    this.moveParticle = function(destinationNode){
        this.headRhombic.position.set(destinationNode.x, destinationNode.y, destinationNode.z)
    }

    this.convertToRole = function(role){
        switch (role) {
            case "Inactive":
                this.role = "Inactive";
                this.setParticleColor(0x6C757D);
                break;
            case "Retired":
                this.role = "Retired";
                this.setParticleColor(0x121417);
                break;
            case "Follower":
                this.role = "Follower";
                this.setParticleColor(0x477AC2);
                break;
            case "Coater":
                this.role = "Coater";
                this.setParticleColor(0x1D3557);
                break;
            case "Leader":
                this.role = "Leader";
                this.setParticleColor(0xCF2626);
                break;
            case "SmallLeader":
                this.role = "SmallLeader";
                this.setParticleColor(0xEA6C1B);
                break;
            case "Branch":
                this.role = "Branch";
                this.setParticleColor(0x583B23);
                break;
            case "SmallBranch":
                this.role = "SmallBranch";
                this.setParticleColor(0x754E2F);
                break;
            case "Leaf":
                this.role = "Leaf";
                this.setParticleColor(0x04471C);
                break;
            case "Boundary":
                this.role = "Boundary";
                this.setParticleColor(0x000000);
                break;
            default:
                this.role = "Inactive"
                this.setParticleColor(0x000000);

        }
    }

    this.setParticleColor = function(color){
        this.headRhombic.material.color.set(color);
        this.headPoint.material.color.set(color);
        this.tailRhombic.material.color.set(color);
        this.tailPoint.material.color.set(color);
        this.headTailConnection.material.color.set(color);
    }

    this.getPosAtFaceI = function(faceNumber){
        var particlePos = this.head.position;
        var nbrParticlePos = new THREE.Vector3( 0, 0, 0 );
        switch(faceNumber) {
            case 0:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z + 2 );
                break;
            case 1:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z + 2 );
                // code block
                break;
            case 2:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z + 2 );
                // code block
                break;
            case 3:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z + 2 );
                // code block
                break;
            case 4:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 5:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 6:
                nbrParticlePos.setX( particlePos.x );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 7:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y );
                nbrParticlePos.setZ( particlePos.z - 2 );
                // code block
                break;
            case 8:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 9:
                nbrParticlePos.setX( particlePos.x - 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 10:
                nbrParticlePos.setX( particlePos.x + 2);
                nbrParticlePos.setY( particlePos.y + 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            case 11:
                nbrParticlePos.setX( particlePos.x + 2 );
                nbrParticlePos.setY( particlePos.y - 2 );
                nbrParticlePos.setZ( particlePos.z );
                // code block
                break;
            default:
                return nbrParticlePos;
        }
        return nbrParticlePos;

    }



}

