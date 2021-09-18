# API-Express

1. Clone o projeto
2. Utilize o comando `npm install` na pasta API-Express
3. Utilize o comando `sudo node src/index.js` para startar o servidor na porta 3001

Estrutura
URL Base: http://localhost:3001

1. Criar usuário: `[POST]` : `http://localhost:3001/auth/register`

name: String
email: String
password: String

**Exemplo JSON**
```
{
	"name": "Nome"
	"email": "email"
	"password": "senha"
}

```

2. Gerar token auth: `[POST]` : `http://localhost:3001/auth/authenticate`
**Exemplo JSON**
```
{
	"email": "email",
	"password": "senha"
}
```

3. Validação de usuário: `[GET]` : `http://localhost:3001/projects`
**Exemplo JSON**
```
{
  "ok": true,
  "id_user": "61460a4d8bc0e8d42b220c2a"
}	
```
