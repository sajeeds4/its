# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## 🚀 CI/CD Pipeline

This project includes a complete CI/CD pipeline using GitHub Actions that automatically:

- **Tests** code on multiple Node.js versions (18.x, 20.x)
- **Lints** code using ESLint
- **Type-checks** using TypeScript
- **Builds** the project
- **Deploys** to Vercel automatically
- **Creates preview deployments** for pull requests
- **Manages dependencies** with Dependabot

### GitHub Secrets Setup

To enable automatic deployment, add these secrets to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following repository secrets:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_USER_ID=npOMcFo9Bs5GoL9LueisfAnr
VERCEL_PROJECT_ID=prj_84F59JV5TP5MiKKW2gLXVrFrJqFd
```

**To get your Vercel token:**
1. Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
2. Create a new token with the scope you need
3. Copy the token value

### Workflow Triggers

- **Push to `main`**: Deploys to production
- **Pull Request**: Creates preview deployment
- **Weekly**: Security audit and dependency updates

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/framework-boilerplates/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
