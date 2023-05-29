function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return obj =
    {
        status: msg
    }
}
console.log(getStatus(false));