const sequency = {
    _value: 1,      // Convention to say that variable is private.      
    get value() {
        return this._value++;
    },
    set value(value) {
        if(value > this._value) {
            this._value = value;
        }
    }
};

//Call implicitly get
console.log(sequency.value, sequency.value);

//Call implicitly set
sequency.value = 1000;
console.log(sequency.value, sequency.value);
sequency.value = 900;
console.log(sequency.value, sequency.value);