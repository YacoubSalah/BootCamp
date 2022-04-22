const humanDB = function () {
    _human = ["Quimby"]

    AddNew = (newName) => { this._human.push(newName) }

    return {
        human: _human,
        addNew: AddNew
    }
}
