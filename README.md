This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## CI/CD Setup

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow**: Runs on pull requests and pushes to the main branch

  - Lints code with ESLint
  - Checks code formatting with Prettier
  - Builds the application to ensure it compiles correctly

- **CD Workflow**: Automatically deploys to Vercel when changes are pushed to the main branch

### Code Formatting

We use Prettier for code formatting. You can format your code by running:

```bash
npm run format
```

To check if your code is properly formatted without making changes:

```bash
npm run format:check
```

## Deploy on Vercel

The project is configured for automatic deployment to Vercel through GitHub Actions.

For manual deployment, you can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Vercel Deployment Setup

To set up the Vercel deployment with GitHub Actions:

1. Create a Vercel account and link your GitHub repository
2. Generate a Vercel token from your account settings:

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click on your profile picture in the top right corner
   - Select "Settings"
   - Go to "Tokens" tab
   - Create a new token with a descriptive name (e.g., "GitHub Actions")
   - Copy the generated token

3. Get your Vercel Organization ID and Project ID:

   - Go to your project in the Vercel dashboard
   - Click on "Settings"
   - Scroll down to find your "Project ID"
   - For Organization ID, go to the General Settings of your organization

4. Add the following secrets to your GitHub repository:
   - Go to your GitHub repository
   - Click on "Settings" > "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `VERCEL_ORG_ID`: Your Vercel Organization ID
     - `VERCEL_PROJECT_ID`: Your Vercel Project ID

## Environment Variables

This project uses environment variables for configuration. Follow these steps to set them up:

### Local Development

1. Copy the `.env.example` file to create a new `.env.local` file:

   ```bash
   cp .env.example .env.local
   ```

2. Edit the `.env.local` file with your specific configuration values.

3. For different environments, you can create:
   - `.env.development` - Used during `npm run dev`
   - `.env.production` - Used during `npm run build` and `npm run start`
   - `.env.test` - Used during testing

### Vercel Environment Variables

For deployment on Vercel, you need to configure environment variables in the Vercel dashboard:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add the required environment variables
4. You can specify different values for Production, Preview, and Development environments

### GitHub Actions Environment Variables

For GitHub Actions workflows, add sensitive environment variables as repository secrets:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the required secrets (e.g., `VERCEL_TOKEN`)

These secrets can then be accessed in your workflows using the `${{ secrets.SECRET_NAME }}` syntax.
