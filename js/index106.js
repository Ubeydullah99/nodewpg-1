function getUserID() {
    return 50;
}
function isUserValid() {
    getUserID();
    if (getUserID() > 30) {
        return true;
    } else {
        return false;
    }
}
console.log(isUserValid());