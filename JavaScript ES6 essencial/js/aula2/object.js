let user = {
    name: "Guilherme"
  };
  
  // Alterando a propriedade de um objeto
  console.log(user)
  user.name = "Outro nome 1";
  user["name"] = "Outro nome 2";

  console.log(user)
  const prop = "name";
  user[prop] = "Outro nome 3";
  
  // function getProp(prop) {
  //     return user[prop];
  // }
  
  // Criando uma propriedade
  console.log(user)
  user.lastName = "Cabrini da Silva";
  
  // Deletando uma propriedade
  console.log(user)
  delete user.name;
  console.log(user)