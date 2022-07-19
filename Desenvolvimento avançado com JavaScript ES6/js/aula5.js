const arr1 = ['banana', 'orange', 'apple'];

const banana1 = arr1[0]
const orange1 = arr1[1]
const apple1 = arr1[2]

//destructuring

const [banana2, orange2, apple2]  = ['banana', 'orange', 'apple'];

const obj1 = { 
    name: 'silas',
    props: {
        age: 26,
    }
};

const { name } = obj1;

const { name: name2 } = obj1;

const { props: { age }} = obj1;