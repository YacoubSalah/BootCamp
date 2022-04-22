const humanDB = function () {
    _human = ["Quimby"]

    AddNew = (newName) => { this._human.push(newName) }

    RemoveEntry = (entryIndex) => {this._human.splice(entryIndex , 1)}

    return {
        human: _human,
        addNew: AddNew,
        removeEntry: RemoveEntry
    }
}
