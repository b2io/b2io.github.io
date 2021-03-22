# base2.io

The Base Two website.

- [Jira Board](https://b2io.atlassian.net/jira/software/projects/B2IO/boards/7)
- [Design Files (Zeplin)](https://app.zeplin.io/project/5fff21e06012bf1d470820c3)
- [Design Files (Google Drive)](https://drive.google.com/drive/folders/1VpkOfCsSGP40DSx85mYPChncMDwlNiTV?usp=sharing)
- [Case Study Copy](https://drive.google.com/drive/folders/1jptdTwNI3IIGkf4HuCmWTYvk_4WYdNNP?usp=sharing)
- [Animation Guide](https://drive.google.com/file/d/19yUdEdYmql6whrRMhZ_Ai36hzEolJTBW/view?usp=sharing)
- [Styleguide / Brand Guidelines](https://drive.google.com/file/d/10ITrRxfICmhs3MP-dlMnzVh8TjJCZwOQ/view?usp=sharing)
- [Logos](https://drive.google.com/drive/folders/1RGmWu8Z7SLSWrsxI55wn55HIrmIbU-Nl?usp=sharing)

## Development

<details>
<summary>Prerequisites</summary>

You'll need to set up Git and NPM before you can run this project locally. The setup for these is slightly different depending on your OS.

1. Git - Follow the [Git instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git for your OS.

1. Clone the repo

   ```bash
   # Either using SSH
   > git clone git@github.com:b2io/base2.io.git

   # Or using HTTPS
   > git clone https://github.com/b2io/base2.io.git

   ```

1. Node - [download](https://nodejs.org/en/download/) or install via your OS's package manager

   - Mac users can install and maintain Node through the package manager [Homebrew](https://brew.sh/):

     ```
     brew install node
     ```

   - Windows users can install and maintain Node using the package manager [Chocolatey](https://chocolatey.org/install):

     ```
     choco install nodejs-lts -y
     ```

</details>

**Install Packages**

```
λ npm i
```

**Local Development**

Starts local development on port 3000.

```
λ npm run dev
```

**Build & Run**

Build and run built assets on port 3001.

```
λ npm run build
λ npm start
```

**Storybook**

Starts storybook on port 6006. Storybook is a demonstration home for the library of components and a good starting point for creating more.

```
λ npm run storybook
```
