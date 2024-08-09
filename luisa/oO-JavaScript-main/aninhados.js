const cliente = {
    nome:"joao",
    idade:24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"]
};

cliente.endereco = {
    rua:"R. joseph climber",
    numero: 1337,
    apartamento:true,
    complemento:"ap 934",
};

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);