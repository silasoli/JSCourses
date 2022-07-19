const propl = 'Digital Innovation One';

const obj1 = {
    propl: propl
};

console.log(obj1)

const obj2 = {
    propl
};

console.log(obj2)

function method1(){
    console.log('method called');
}

const obj3 = {
    method1
}

obj3.method1();

const obj4 = {
    sum: function sum(a,b){
        return a + b;
    }
}

console.log(obj4.sum(5,5));

const obj5 = {
    sum: function(a, b){
        return a + b;
    }
}

console.log(obj5.sum(5,5));

const obj6 = {
    sum(a, b){
        return a + b;
    }
}

console.log(obj6.sum(5,5));

const propName = 'teste';

const obj7 = {}

obj7[propName] = 'prop value';

console.log(obj7)

obj7[propName+'concat'] = 'prop value';

console.log(obj7)


const obj8 = {
    [propName]: 'prop value 8'
}

console.log(obj8)
