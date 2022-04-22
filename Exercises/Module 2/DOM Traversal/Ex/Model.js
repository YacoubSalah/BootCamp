const computerDataBase = function () {
    _comp_id = []

    pushCompID = (compID) => { this._comp_id.push(compID) }
    displayDB = () => console.log(this._comp_id) // This need to be tested

    return {
        pushCompID,
        displayDB
    }
}