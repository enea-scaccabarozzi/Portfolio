# 🌐 Enea's Portfolio

![GitHub issues](https://img.shields.io/github/issues/enea-scaccabarozzi/portfolio)
![GitHub forks](https://img.shields.io/github/forks/enea-scaccabarozzi/portfolio)
![GitHub stars](https://img.shields.io/github/stars/enea-scaccabarozzi/portfolio)
![GitHub license](https://img.shields.io/github/license/enea-scaccabarozzi/portfolio)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/enea-scaccabarozzi/portfolio/ci-cd-workflow.yml)

Welcome to the repository of my personal portfolio and blog! This monorepo 📦 contains all the components necessary to run my website which showcases my projects 🚀, blogs ✍️, and professional details 📄.

## 📌 Introduction

This project is my professional and personal showcase. It's where you can find my work portfolio, blog articles, and a bit more about who I am. I built it as a space to demonstrate my skills and share my knowledge.

### 🎉 Features

- **Portfolio**: A brief introduction to who I am and what I do.
- **Blog**: An aptempt to share my knowledge and experiences with the community.

## 🛠 Stack

Built with love and:

- **Monorepo Framework**: Leveraging [Nx](https://nx.dev/) for a streamlined workspace managed with pnpm.
- **Portfolio Frontend**: Crafted using [Next.js](https://nextjs.org/), beautified with [Tailwind CSS](https://tailwindcss.com/), and structured with TypeScript for robust development.
- **Blog Inspiration**: Drawing from [tailwind nextjs starter blog v2](https://github.com/timlrx/tailwind-nextjs-starter-blog) for a solid foundation.
- **Deployment**: Seamlessly deployed on AWS with [SST](https://sst.dev/) for scalability and performance.

## 📂 Folder Structure

The project is organized in the following scopes:

- **`portfolio`**: Contains all the main logic and components for the portfolio website.
- **`blog`**: Contains all the main logic and components for the blog. TODO: extract business logic into separate lib.
- **`deployer`**: Contains the deployment logic and configurations.
- **`shared`**: Contains shared components and utilities between all scopes.

Each scope follows the same hierarchical structure:

- **`features`**: Contains all the main features of the scope. It handles data fetching, business logic, and state management. The library of this type are allowed to import every other library in the allowed scopes
- **`ui`**: Contains all the presentational components of the scope. It handles the UI and the user interactions. The library of this type are allowed to import every other libraries in the allowed scopes except the `features` one.
- **`utils`**: Contains all the utilities and helpers of the scope. The library of this type are allowed to import only `utils` and `types` libraries inside the visible scopes.
- **`types`**: Contains all the types and interfaces of the scope. The library of this type are allowed to import only `types` libraries inside the visible scopes.

For more information about the monorepo structure, please refer to the [Nx documentation](https://nx.dev/concepts/more-concepts/applications-and-libraries) or read my take on this [article](https://blog.eneascaccabarozzi.xyz/blog/thinking-in-nx)

## ⚙️ CI/CD

Continuous Integration and Deployment (CI/CD) is handled using Github Actions. The workflow includes:

- **Automated Tests**: Runs tests to ensure reliability with each pull request.
- **Code Quality Checks**: Ensures adherence to coding standards and practices.
- **Automated Deployment**: Deploys the latest version to the correct environment after successful tests and reviews.

## 🚀 Getting Started

To set up the project locally, follow these steps:

1. Clone the repo:

   ```bash
   git clone https://github.com/enea-scaccabarozzi/portfolio.git
   ```

2. Navigate to the project:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Configure the environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env.local` file with the necessary environment variables.

   ```bash
    pnpm sst secrets set <SECRET_IDENTIFIER> "SECRET VALUE" --stage <DEPLOY_STAGE>
   ```

   Set the secrets for the required stage. See [values.ts](/apps/deployer/stacks/config/values.ts) to discover the required secrets and the [sst documentation](https://docs.sst.dev/config) for more information.

5. Run the development server:

   ```bash
   pnpm deploy:dev
   ```

   Start the [live lamda](https://docs.sst.dev/live-lambda-development) environment for the backend.

   ```bash
   pnpm nx dev portfolio
   ```

   Start the development server for the portfolio.

   ```bash
   pnpm nx dev blog
   ```

   Start the development server for the blog.

6. Deploy the project:

   ```bash
   pnpm deploy:prod
   ```

   Deploy the project to the production environment.

   ```bash
    pnpm deploy:demo
   ```

   Deploy the project to the demo environment.

Dive deeper into each command and setup in the respective project.json files under the apps folder.

## 👥 Contributing

Your contributions are welcome! Please feel free to submit pull requests or create issues for any enhancements, bug fixes, or discussions.

## 📜 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.
