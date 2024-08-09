class Cadastro:
    def __init__(self, nome,idade,sexo,email,telefone,endereco):
        self.nome = nome
        self.idade = idade
        self.sexo = sexo
        self.email = email
        self.telefone = telefone
        self.endereco = endereco

   

    def __str__(self):
     return f'Seu nome: {self.nome}   Sua idade: {self.idade}   Seu sexo: {self.sexo}   Seu email: {self.email}   Seu telefone: {self.telefone}   Seu endereco: {self.endereco} '

cad1 = Cadastro ('Lucas',16,'masc','lucasoliv@gmail.com','41 99999-8888','rua 14')
               

print (cad1)