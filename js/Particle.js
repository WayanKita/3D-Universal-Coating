function Particle(){
    this.role = "temp";
    this.color = "#00ff00";
    this.moveDir = -1;
    this.position = new THREE.Vector3(0, 0, 0);
    this.geometry = RhombicDodecahedronGeometry;
    this.material = new THREE.MeshPhongMaterial( { color: "#00ff00", wireframe: false, flatShading: true} );
    this.head = new THREE.Mesh( this.geometry, this.material);
    this.tail = new THREE.Mesh( this.geometry, this.material);
    this.point = new THREE.Mesh( new THREE.SphereGeometry( 0.2, 32, 32 ), new THREE.MeshBasicMaterial( {color: 0x000000, wireframe: false} ));
    this.orientation = 0;
    this.isContracted = true;
    this.moveBrancDir = -1;

    this.contractParticle = function(){
        this.isContracted = true;
    }

    this.expandParticle = function(destinationNode){

    }

    this.moveParticle = function(destinationNode){
        this.head.position.set(destinationNode.x, destinationNode.y, destinationNode.z)
    }

    this.convertToRole = function(role){
        switch (role) {
            case "Inactive":
                this.role = "Inactive";
                this.head.material.color.set(0x6C757D);
                this.point.material.color.set(0x6C757D);
                break;
            case "Retired":
                this.role = "Retired";
                this.head.material.color.set(0x121417);
                this.point.material.color.set(0x121417);
                break;
            case "Follower":
                this.role = "Follower";
                this.head.material.color.set(0x1D3557);
                this.point.material.color.set(0x1D3557);
                break;
            case "Coater":
                this.role = "Coater";
                this.head.material.color.set(0x1D3557);
                this.point.material.color.set(0x1D3557);
                break;
            case "Leader":
                this.role = "Leader";
                this.head.material.color.set(0xCF2626);
                this.point.material.color.set(0xCF2626);
                break;
            case "SmallLeader":
                this.role = "SmallLeader";
                this.head.material.color.set(0xEA6C1B);
                this.point.material.color.set(0xEA6C1B);
                break;
            case "Branch":
                this.role = "Branch";
                this.head.material.color.set(0x583B23);
                this.point.material.color.set(0x583B23);
                break;
            case "SmallBranch":
                this.role = "SmallBranch";
                this.head.material.color.set(0x754E2F);
                this.point.material.color.set(0x754E2F);
                break;
            case "Boundary":
                this.role = "Boundary";
                this.head.material.color.set(0x000000);
                this.point.material.color.set(0x000000);
                break;
            default:
                this.role = "Innactive"
                this.head.material.color.set(0x000000);
                this.point.material.color.set(0x000000);

        }
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

