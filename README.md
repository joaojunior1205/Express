# API-Express

- Cadastro de usuários <br /> 
- Autenticação: authMiddlewar;, jsonwebtoken <br />
- Criptografia de senha: bcryptjs <br />
- Bando de dados: MongoDB <br />

<br />

1. Clone o projeto
2. Utilize o comando `npm install` na pasta API-Express
3. Utilize o comando `sudo node src/index.js` para startar o servidor na porta 3001

Estrutura<br />
URL Base: http://localhost:3001

1. Criar usuário: `[POST]` : `http://localhost:3001/auth/register`
-name: String <br />
-email: String <br />
-password: String <br />
**Exemplo JSON**
```
{
	"name": "Nome"
	"email": "email"
	"password": "senha"
}

```

2. Gerar token auth: `[POST]` : `http://localhost:3001/auth/authenticate` <br />
-email: String <br />
-password: String <br />
**Exemplo JSON**
```
{
	"email": "email",
	"password": "senha"
}
```

3. Validação de usuário: `[GET]` : `http://localhost:3001/projects` <br />
**Exemplo JSON**
```
{
  "ok": true,
  "id_user": "61460a4d8bc0e8d42b220c2a"
}	
```

4. Esqueceu a senha? Solicite um token para redefinição: `[POST]` : `http://localhost:3001/auth/forgot_password` <br />
-email: String <br />
**Exemplo JSON**
```
{
	"email": "email cadastrado"
}
```

4. Esqueceu a senha? Solicite um token para redefinição: `[POST]` : `http://localhost:3001/auth/reset_password` <br />
**Exemplo JSON**
-email: String <br />
-token: String <br />
-password: String <br />
```
{
	"email": "email",
	"token": "token recebido no e-mail",
	"password": "Nova senha"
}	
```
