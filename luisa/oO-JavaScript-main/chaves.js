const cliente = {
    nome:"joao",
    idade:24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000","(41) 9988-0000"]
};

cliente.enderecos = [
{
    rua:"R. joseph climber",
    numero: 1337,
    apartamento:true,
    complemento:"ap 934",
},
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error("erro. e necessario ter um cadastro de endereco")
}