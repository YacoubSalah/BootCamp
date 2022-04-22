const Bank = function() {
    _money = 500

    Deposit = (amount) => {
        this._money += amount
    }

    ShowBalance = () => {
        console.log(this._money)
    }

    return {
        deposit: Deposit,
        showBalance: ShowBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950