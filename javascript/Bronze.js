/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    if(nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
        console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 5');
    } else {
        if(nextCheckpointDist > 4000){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + " BOOST");
        } else if(nextCheckpointDist < 1050){
            console.log(nextCheckpointX + ' ' + nextCheckpointY + " 25");
        } else {
            console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 100');
        }    
    }
}
