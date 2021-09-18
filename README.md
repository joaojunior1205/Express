# API-Express

- Cadastro de usuários <br /> 
- Autenticação: authMiddlewar;, jsonwebtoken <br />
- Criptografia de senha: bcryptjs <br />
- Bando de dados: MongoDB <br />
- Mailtrap <br />
- crypto <br />
- Path, fs <br />
- Nodemailer <br />
- Handlebars <br />

<br />

1. Clone o projeto
2. Utilize o comando `npm install` na pasta API-Express
3. Utilize o comando `sudo node src/index.js` para startar o servidor na porta 3001

<br />

**Estrutura**
<br />

URL Base: `http://localhost:3001`

1. Criar usuário: <br />
`[POST]` `http://localhost:3001/auth/register`<br />

- name: String <br />
- email: String <br />
- password: String <br />

**Exemplo JSON**
<br />
```
{
	"name": "Nome"
	"email": "email"
	"password": "senha"
}

```

2. Gerar token auth: <br />
`[POST]` `http://localhost:3001/auth/authenticate` <br />

- email: String <br />
- password: String <br />
- 
**Exemplo JSON**
<br />
```
{
	"email": "email",
	"password": "senha"
}
```

3. Validação de usuário: <br />
`[GET]` `http://localhost:3001/projects`<br />

**Exemplo JSON**
<br />
```
{
  "ok": true,
  "id_user": "id_usuer"
}	
```

4. Esqueceu a senha? Solicite um token para redefinição: <br />
`[POST]` `http://localhost:3001/auth/forgot_password` <br />

- email: String <br />

**Exemplo JSON**
<br />
```
{
	"email": "email cadastrado"
}
```

4. Esqueceu a senha? Solicite um token para redefinição:<br />
`[POST]` `http://localhost:3001/auth/reset_password`<br />

**Exemplo JSON**
<br />

- email: String <br />
- token: String <br />
- password: String <br />
```
{
	"email": "email",
	"token": "token recebido no e-mail",
	"password": "Nova senha"
}	
```
