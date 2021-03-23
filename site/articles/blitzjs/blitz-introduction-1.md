# Blitz.js 入门教程：基于 Next.js 的下一代 React 全栈框架

## 译者序

苦 JS 生态久已。在 2020 年后，一直徘徊于该为自己构建怎样的技术栈，迟迟没有太多落地成果——库太多了，一个小场景就能有很多个解决方案；方向也太多了，哪怕大前端三个字，现今都能拆分为很多的细分领域。直到遇到了 Rome，看到社区已经开始尝试整合重构 Node 生态的前端工具链；又遇到了 Deno，直接摆脱 Node 的历史遗留问题来建设更贴近现代标准的 JavaScript/TypeScript 运行时；现在又遇到了 Blitz.js，一站式 React 全栈框架，在 Next.js 之上赋能更多的后端场景...于是自己的很多方向性问题都豁然开朗：通过建立不同的 Repo 来专攻不同的方向，且每个 Repo 都能有代表性的同时，覆盖更多的场景。于是——

- [Deno 钻研之术](https://github.com/hylerrix/deno-tutorial)：看未来，学标准。Node 也不落下。
- [Deno 算法之旅](https://github.com/hylerrix/deno-algorithm)：刷算法，玩测试。
- [ECMAScript 面试宝典](https://github.com/hylerrix/es-interview)：备面试，打基础；
- [Blitz.js + React 全栈开发手册](https://github.com/hylerrix/blitzjs-tutorial)：搞工程，尝全栈。深入 React，实战 Next.js，掌握后端开发。
- 以及还有一切弃坑的 repo......

当然，Blitz.js 还有很多吸引人的特性：

- **一体式全栈架构**：在一个 Monorepo 里从数据库到用户端全搞定，也没用重复性代码。试想前后端分离的架构下，如果你喜欢 TypeScript 的话，很可能得写两套相同 TS...且这种一体式架构很容易让自己的项目灵感从头到尾地快速落地。
- **API 不再必须**：REST 和 GraphQL？或许都不需要，交给 Blitz.js 来在编译时构建。当需要提供 API 给更多端使用时，再结合相关库来生成 API。
- **更轻松的开箱体验**：脚手架初始化后直接提供登录注册甚至重置密码功能，直接支持最基本的后端环境，开箱即用的体验不能再好，同时甚至能通过强大的 blitz generate CLI 快速植入生态圈中的主流库到项目中。
- **并不会“学不动了”**：基于 Next.js，前端 React，后端 Prisma 等库，Blitz.js 构建于各种已经主流化的生态之上。
- **拥抱未来**：Blitz.js 预计将于下个月（2021 年 4 月）发布 v1.0 版本。

本文属于《[Blitz.js + React 全栈开发手册](https://github.com/hylerrix/blitzjs-tutorial)》系列，原文翻译内容会同步更新到 [Blitz.js 中文仓库](https://github.com/blitz-js/zh-hans.blitzjs.com) 上。欢迎 Star 和 Watch：[https://github.com/hylerrix/blitzjs-tutorial](https://github.com/hylerrix/blitzjs-tutorial)。

## 快速入手

### 配置你的环境

你需要使用 Node 12 或者更新的版本。

### 安装 Blitz

执行 `npm install -g blitz`

### 创建一个新项目

1. `blitz new myAppName`
1. `cd myAppName`
1. `blitz dev`
1. 访问你的新项目 [http://localhost:3000](http://localhost:3000)

### 欢迎来到 Blitz 社区 👋

Blitz 社区是个温暖、安全、多样化、包容也不失有趣的社区！ LGBTQ+、女生和少数派欢迎你们的到来。

[加入我们的 Discord 社区](https://discord.blitzjs.com)，我们会在这里帮助每个人搭建 Blitz 应用。这里也是我们协作共建 Blitz 本身的重要场地。

对于提问以及会花费较长时间的讨论，[可以发帖到我们的论坛中](https://github.com/blitz-js/blitz/discussions)。

有关完整的介绍，请阅读 社区是如何运作的。文中包括了如何获得帮助、如何报告错误以及如何提出新功能建议等的详细指导。

**欢迎你的帮助来使 Blitz 变得更好！ 🤝**

我们有一个很棒的社区正在共同努力让 Blitz 成为世界上一流的框架。

你该如何提供帮助：

1. 通过 [在 GitHub 上提交 issue](https://github.com/blitz-js/blitz/issues/new/choose) 来反馈 Bug。
1. 贡献代码： 阅读贡献指南，以了解如何开始。
1. [赞助 & 捐赠](https://github.com/blitz-js/blitz#sponsors-and-donations)，可以从 $5/月 开始。
1. 以及你觉得可以的其它任何方式！我们非常感谢你的任何贡献（如文档、视频、博客等）。如果你遇到任何阻碍，欢迎来 Discord 上与我们交流！:)

### 下一步

#### 教程

教程篇 是有关 Blitz 所有基本内容的完整练习，其中包括将模型添加到数据库以及从前端读取和更新数据。

#### 学习

这里有你想要熟悉的 Blitz 的关键概念：

- 如何 新建页面
- 如何 使用文件路由系统
- 如何设置并 使用数据库
- 如何使用 Blitz Queries 和 Mutations 来读写你的数据库。
- 如何通过 `blitz generate` 命令来用脚手架生成数据库模型
的所有代码。

## 入门教程

在本教程中，我们将会指导你创建一个简易的投票系统。

我们将假设你已经 安装了 Blitz。你可以通过在终端运行以下命令来确定 Blitz 是否已经安装或检查安装的版本号：

```bash
blitz -v
```

如果 Blitz 已经安装成功，你应该能看到安装的版本号。否则你会收到一条像这样的错误提示：“command not found: blitz”。

### 创建一个新应用

在命令行中，`cd` 进入你想要创建应用的根目录文件夹后，执行以下命令：

```sh
blitz new my-blitz-app
```

Blitz 会在你当前的文件夹中创建一个 `my-blitz-app` 文件夹。你接着会收到一个选择表单库的提示。本教程中将选择其中推荐的 `React Final Form` 库。

让我们看看 `blitz new` 命令创建了什么：

```markdown
my-blitz-app
├── app/
│   ├── api/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   ├── mutations/
│   │   │   ├── changePassword.ts
│   │   │   ├── forgotPassword.test.ts
│   │   │   ├── forgotPassword.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── resetPassword.test.ts
│   │   │   ├── resetPassword.ts
│   │   │   └── signup.ts
│   │   ├── pages/
│   │   │   ├── forgot-password.tsx
│   │   │   ├── login.tsx
│   │   │   ├── reset-password.tsx
│   │   │   └── signup.tsx
│   │   └── validations.ts
│   ├── core/
│   │   ├── components/
│   │   │   ├── Form.tsx
│   │   │   └── LabeledTextField.tsx
│   │   ├── hooks/
│   │   │   └── useCurrentUser.ts
│   │   └── layouts/
│   │       └── Layout.tsx
│   ├── pages/
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.test.tsx
│   │   └── index.tsx
│   └── users/
│       └── queries/
│           └── getCurrentUser.ts
├── db/
│   ├── index.ts
│   ├── schema.prisma
│   └── seeds.ts
├── integrations/
├── mailers/
│   └── forgotPasswordMailer.ts
├── public/
│   ├── favicon.ico*
│   └── logo.png
├── test/
│   ├── setup.ts
│   └── utils.tsx
├── README.md
├── babel.config.js
├── blitz.config.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── types.d.ts
├── types.ts
└── yarn.lock
```

上述文件有：

- `app/` 文件夹是项目中绝大多数功能的容器。你可以在这里放置任何页面或 API 路由。
- `app/pages/` 文件夹是主要的页面文件夹。如果你使用过 Next.js 你将会立即注意到两者的不同。在 Blitz 中，你可以有许多 `pages` 文件夹，它们将在构建时合并在一起。
- `app/core/` 文件夹是放置整个应用中使用到的通用组件、Hooks 等的主要位置。
- `db/` 是数据库配置所在的位置。如果你正在编写模型或检查迁移情况，可以来这里。
- `public/` 文件夹可以让你放置任何静态资源。如果你有要在应用中使用的图像、文件或视频等，都可以放置在其中。
- `.babelrc.js`、`.env` 等（“dotfiles 文件”）是各种 JavaScript 工具需要用到的配置文件。
- `blitz.config.js` 用于 Blitz 的高级自定义配置，与 `next.config.js` 相同
- `tsconfig.json` 是我们推荐的 TypeScript 设置。

### 开发环境服务器

现在，如果你还没有在 `my-blitz-app` 文件夹下，确保切换到其中，并运行以下命令：

```sh
blitz dev
```

你将会在命令行中看到如下输出：

```sh
✔ Compiled
Loaded env from /private/tmp/my-blitz-app/.env
warn  - You have enabled experimental feature(s).
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use them at your own risk.

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Using external babel configuration from /my-blitz-app/babel.config.js
event - compiled successfully
```

现在服务器已成功运行，浏览器中访问 [localhost:3000](http://localhost:3000)。你将会看到带有 Blitz logo 的欢迎页面。成功了！

### 以用户身份注册

Bliz 应用让用户登录和注册开箱即用！现在让我们来尝试一下。点击 **注册** 按钮，输入任何电子邮件和密码，然后单击 **创建账户** 后，你将被重定向到用户主页，并在其中可以看到你的用户 `id` 和 `role`。

如果需要，你也可以尝试注销并重新登录。或在登录页面上单击 **忘记密码**，以尝试重置密码流程。

### 编写你的第一个页面

接下来让我们创建你的第一个页面。

打开 `app/pages/index.tsx` 文件然后替换掉 `Home` 组件的所有内容为这段代码：

```jsx
//...

const Home: BlitzPage = () => {
  return (
    <div>
      <h1>Hello, world!</h1>

      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>
    </div>
  )
}

//...
```

保存文件后你将会看到浏览器页面进行了更新。你可以如你所愿地添加需要的各种自
定义项，。准备就绪后，请转到下一节。

### 数据库配置

好消息是，已经为你建立好了 SQLite 数据库！你可以在终端中运行 `blitz prisma studio` 来打开一个可以查看数据库数据的 Web 界面。

请注意，在开始第一个实际项目时，你可能希望使用可扩展性更高的数据库（如 PostgreSQL），以避免在将来切换数据库时产生的麻烦。有关更多信息，请参见 数据库概述 篇。目前，我们将继续使用默认的 SQLite 数据库。

### 模型的脚手架代码

Blitz 提供了一个方便的 CLI 命令 `generate` 来构建样板代码。我们将使用 `generate` 来创建两个模型：`Question`（问题） 和 `Choice`（选择）。`Question` 包含问题内容和选择列表。`Choice` 包含选择内容、投票计数以及相关的问题。Blitz 将为这两个模型自动生成一个 id、一个创建时间戳以及一个最新更新的时间戳。

#### 首先，我们将生成与 `Question` 模型有关的所有信息：

```bash
blitz generate all question text:string
```

当出现提示框时，按 **Enter** 以运行 `prisma migrate`，这将使用新的模型来更新你的数据库架构。此时会要求一个名称，可以输入“add question”之类的值。

```bash
CREATE    app/pages/questions/[questionId].tsx
CREATE    app/pages/questions/[questionId]/edit.tsx
CREATE    app/pages/questions/index.tsx
CREATE    app/pages/questions/new.tsx
CREATE    app/questions/components/QuestionForm.tsx
CREATE    app/questions/queries/getQuestion.ts
CREATE    app/questions/queries/getQuestions.ts
CREATE    app/questions/mutations/createQuestion.ts
CREATE    app/questions/mutations/deleteQuestion.ts
CREATE    app/questions/mutations/updateQuestion.ts

✔ Model for 'question' created in schema.prisma:

> model Question {
>   id        Int      @default(autoincrement()) @id
>   createdAt DateTime @default(now())
>   updatedAt DateTime @updatedAt
>   text      String
> }

? Run 'prisma migrate dev' to update your database? (Y/n) › true
```

```bash
Environment variables loaded from .env
Prisma schema loaded from db/schema.prisma
Datasource "db": SQLite database "db.sqlite" at "file:./db.sqlite"

✔ Name of migration … add question
The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20210217035805_add_question/
    └─ migration.sql

✔ Generated Prisma Client (2.17.0) to ./node_modules/@prisma/client in 103ms

Everything is now in sync.
```

`generate` 命令搭配 `all` 类型将生成相关的模型、queries、mutation 和页面文件。请参见 Blitz generate 页面查询更多可用的类型选项。

#### 接下来，我们将生成带有相应 queries 和 mutations 的 `Choice` 模型。

这次我们搭配 `resource` 类型，因为我们不需要为 `Choice` 模型生成页面：

```bash
blitz generate resource choice text votes:int:default=0 belongsTo:question
```

同样，在系统提示你进行迁移时，按 **Enter** 后输入迁移的名称。

```bash
CREATE    app/choices/queries/getChoice.ts
CREATE    app/choices/queries/getChoices.ts
CREATE    app/choices/mutations/createChoice.ts
CREATE    app/choices/mutations/deleteChoice.ts
CREATE    app/choices/mutations/updateChoice.ts

✔ Model for 'choice' created in schema.prisma:

> model Choice {
>   id         Int      @default(autoincrement()) @id
>   createdAt  DateTime @default(now())
>   updatedAt  DateTime @updatedAt
>   text       String
>   votes      Int      @default(0)
>   question   Question @relation(fields: [questionId], references: [id])
>   questionId Int
> }

? Run 'prisma migrate dev' to update your database? (Y/n) › true
```

#### 最后，让我们更新 `Question` 模型以关联到 `Choice` 上。

打开 `db/schema.prisma` 并在 `Question` 模型中添加 `choices Choice[]`。

```diff
model Question {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  text      String
+ choices   Choice[]
}
```

然后运行 `blitz prisma generate` 来更新 prisma 客户端以同步 schema 的更改。这里不涉及数据库迁移，因为数据库中没有实际字段添加到 `Question` 模型中。

### 访问 Prisma 数据库客户端

现在，让我们跳进 Blitz 交互式 Shell 中，并使用 Blitz 为你提供的 Primsa 数据库客户端。要启动 Blitz 控制台，请使用以下命令：

```bash
blitz console
```

一旦你进入控制台后，浏览数据库客户端：

```bash
# No questions are in the system yet.
⚡ > await db.question.findMany()
[]

# Create a new Question:
⚡ > let q = await db.question.create({data: {text: "What's new?"}})
undefined

# See the entire object:
⚡ > q
{
  id: 1,
  createdAt: 2020-06-15T15:06:14.959Z,
  updatedAt: 2020-06-15T15:06:14.959Z,
  text: "What's new?"
}

# Or, access individual values on the object:
⚡ > q.text
"What's new?"

# Change values by using the update function:
⚡ > q = await db.question.update({where: {id: 1}, data: {text: "What's up?"}})
{
  id: 1,
  createdAt: 2020-06-15T15:06:14.959Z,
  updatedAt: 2020-06-15T15:13:17.394Z,
  text: "What's up?"
}

# db.question.findMany() now displays all the questions in the database:
⚡ > await db.question.findMany()
[
  {
    id: 1,
    createdAt: 2020-06-15T15:06:14.959Z,
    updatedAt: 2020-06-15T15:13:17.394Z,
    text: "What's up?"
  }
]
```

### 更新模型属性生成的代码

> 在再次运行该应用之前，我们需要自定义一些已生成的代码。最终这些修复过程将不再需要——但就目前而言，我们需要解决结果未解决的问题。

自动生成的页面，当前并未使用你在生成过程中定义的实际模型的属性。以后会支持，但现在，需要我们手动修复生成的页面。

#### Question 页面

进入 `app/pages/questions/index.tsx`. 请注意到一个 `QuestionsList` 组件已经为你生成了：

```jsx
// app/pages/questions/index.tsx

export const QuestionsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{questions, hasMore}] = usePaginatedQuery(getQuestions, {
    orderBy: {id: "asc"},
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({query: {page: page - 1}})
  const goToNextPage = () => router.push({query: {page: page + 1}})

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link href={`/questions/${question.id}`}>
              <a>{question.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}
```

不过目前跑不通的！请记住我们创建的 `Question` 模型上面没有任何“name”字段。
要解决此问题，请替换 `question.name` 为 `question.text`。

```diff
// app/pages/questions/index.tsx

export const QuestionsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{questions, hasMore}] = usePaginatedQuery(getQuestions, {
    orderBy: {id: "asc"},
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({query: {page: page - 1}})
  const goToNextPage = () => router.push({query: {page: page + 1}})

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link href={`/questions/${question.id}`}>
-              <a>{question.name}</a>
+              <a>{question.text}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}
```

接下来，我们将类似的修复方法应用于 `app/questions/components/QuestionForm.tsx` 中。在表单提交中，将 `LabeledTextField` 中 `name` 变为 `text`。

```diff
export function QuestionForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>,
) {
  return (
    <Form<S> {...props}>
-     <LabeledTextField name="name" label="Name" placeholder="Name" />
+     <LabeledTextField name="text" label="Text" placeholder="Text" />
    </Form>
  )
}
```

#### `createQuestion` mutation

在 `app/questions/mutations/createQuestion.ts` 中，我们需要更新 `CreateQuestion` zod 验证模式，使用 `text` 而不是 `name`。

```diff
// app/questions/mutations/createQuestion.ts

const CreateQuestion = z
  .object({
-   name: z.string(),
+   text: z.string(),
  })
  .nonstrict()
// ...
```

#### `updateQuestion` mutation

在 `app/questions/mutations/updateQuestion.ts` 中，我们需要更新 `UpdateQuestion` zod 验证模式，使用 `text` 而不是 `name`。

```diff
// app/questions/mutations/updateQuestion.ts

const UpdateQuestion = z
  .object({
    id: z.number(),
-   name: z.string(),
+   text: z.string(),
  })
  .nonstrict()
// ...
```

#### `deleteQuestion` mutation

Prisma 尚不支持“级联删除”。在本教程的上下文中，这意味着它在删除 `Question` 时不会删除相关的 `Choice`数据。我们需要临时改动生成的 `deleteQuestion` mutation，以便手动做这件事。在文本编辑框中打开 `app/questions/mutations/deleteQuestion.ts` 并将以下内容添加到函数主体的顶
部。

```typescript
await db.choice.deleteMany({where: {questionId: id}})
```

最终的效果应该为：

```diff
// app/questions/mutations/deleteQuestion.ts

export default resolver.pipe(
  resolver.zod(DeleteQuestion),
  resolver.authorize(),
  async ({id}) => {
+   await db.choice.deleteMany({where: {questionId: id}})
    const question = await db.question.deleteMany({where: {id}})

    return question
  },
)
```

现在，此 mutation 将在删除问题本身之前，删除与问题相关的选择。

#### 现在尝试创建、更新和删除问题

太棒了！现在确保你的程序正常运行。否则在你的终端中执行 `blitz dev`，然后访问 `localhost:3000/questions`。尝试创建问题并编辑、删除它们。

### 在问题表格中添加选择项

到目前为止，你做的很棒！我们要做的下一件事是在我们的问题中添加选择。在你的编辑器中打开 `app/questions/components/QuestionForm.tsx`。

添加另外三个 `<LabeledTextField>` 组件作为选择。

```diff
export function QuestionForm<S extends z.ZodType<any, any>>(
  props: FormProps<S>,
) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="text" label="Text" placeholder="Text" />
+     <LabeledTextField name="choices.0.text" label="Choice 1" />
+     <LabeledTextField name="choices.1.text" label="Choice 2" />
+     <LabeledTextField name="choices.2.text" label="Choice 3" />
    </Form>
  )
}
```

现在打开 `app/pages/questions/new.tsx` 并设置 `initialValues` 为如下：

```diff
      <QuestionForm
        submitText="Create Question"
-       // initialValues={{ }}
+       initialValues={{choices: []}}
        onSubmit={async (values) => {
          try {
            const question = await createQuestionMutation(values)
            router.push(`/questions/${question.id}`)
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
```

接下来打开 `app/questions/mutations/createQuestion.ts` 并更新 zod 模式，来让 mutation 接收 choice 数据。而且我们还需要更新 `db.question.create` 调用，以便 choice 也可以被创建。

```diff
// app/questions/mutations/createQuestion.ts

const CreateQuestion = z
  .object({
    text: z.string(),
+   choices: z.array(z.object({text: z.string()})),
  })
  .nonstrict()

export default resolver.pipe(
  resolver.zod(CreateQuestion),
  resolver.authorize(),
  async (input) => {
-   const question = await db.question.create({data: input})
+   const question = await db.question.create({
+     data: {
+       ...input,
+       choices: {create: input.choices},
+     },
+   })

    return question
  },
)
```

#### 试试看

现在你可以转到 `localhost:3000/questions/new` 并创建一个带有选择的新问题！

### 列出选择

该轻松一下了。返回浏览器中的 `localhost:3000/questions` 并查看你创建的所有问题。让我们在这些问题下列出相关的选择如何？首先，我们需要自定义问题查询函数。在 Prisma 中，你需要手动让客户端知道你需要查询的嵌套关系，将你的 `getQuestion.ts` 和 `getQuestions.ts` 文件更改为如下所示：

```diff
// app/questions/queries/getQuestion.ts

const GetQuestion = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetQuestion),
  resolver.authorize(),
  async ({id}) => {
-   const question = await db.question.findFirst({where: {id}})
+   const question = await db.question.findFirst({
+     where: {id},
+     include: {choices: true},
+   })

    if (!question) throw new NotFoundError()

    return question
  },
)
```

```diff
// app/questions/queries/getQuestions.ts

interface GetQuestionsInput
  extends Pick<
    Prisma.QuestionFindManyArgs,
    "where" | "orderBy" | "skip" | "take"
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({where, orderBy, skip = 0, take = 100}: GetQuestionsInput) => {
    const {items: questions, hasMore, nextPage, count} = await paginate({
      skip,
      take,
      count: () => db.question.count({where}),
      query: (paginateArgs) =>
        db.question.findMany({
          ...paginateArgs,
          where,
          orderBy,
+         include: {choices: true},
        }),
    })

    return {
      questions,
      nextPage,
      hasMore,
      count,
    }
  },
)
```

现在在浏览器中跳回我们主要的 Question 页面 (`app/pages/questions/index.tsx`)，我们可以列出每个问题的选择。并将此代码添加到我们 `QuestionsList` 中的 `Link` 下：

```diff
// app/pages/questions/index.tsx

// ...
{
  questions.map((question) => (
    <li key={question.id}>
      <Link href={`/questions/${question.id}`}>
        <a>{question.text}</a>
      </Link>
+     <ul>
+       {question.choices.map((choice) => (
+         <li key={choice.id}>
+           {choice.text} - {choice.votes} votes
+         </li>
+       ))}
+     </ul>
    </li>
  ))
}
// ...
```

现在在浏览器中访问 `/questions` 路由。**神奇吧！**

### 让我们允许用户对这些问题投票！

在浏览器中打开 `app/pages/questions/[questionId].tsx`。首先，我们将对该页面进行一些改造。

1. 替换 `<h1>Question {question.id}</h1>` 为 `<h1>{question.text}</h1>`.
1. 删除 `pre` 元素，并将如下复制到之前写的选择列表中：

```jsx
<ul>
  {question.choices.map((choice) => (
    <li key={choice.id}>
      {choice.text} - {choice.votes} votes
    </li>
  ))}
</ul>
```

如果返回浏览器，页面目前看起来像这样！

![](https://cdn.nlark.com/yuque/0/2021/png/86548/1616475118256-6e625fe9-db7f-44ec-9a07-68a3eced32c7.png#align=left&display=inline&height=285&margin=%5Bobject%20Object%5D&originHeight=570&originWidth=1134&size=0&status=done&style=none&width=567)

### 现在是时候来增加投票功能！

首先我们需要打开 `app/choices/mutations/updateChoice.ts`，更新 zod 模式，添加新增投票功能。

```diff
const UpdateChoice = z
  .object({
    id: z.number(),
-   name: z.string(),
  })
  .nonstrict()

export default resolver.pipe(
  resolver.zod(UpdateChoice),
  resolver.authorize(),
  async ({id, ...data}) => {
-   const choice = await db.choice.update({where: {id}, data})
+   const choice = await db.choice.update({
+     where: {id},
+     data: {votes: {increment: 1}},
+   })

    return choice
  },
)
```

返回到 `app/pages/questions/[questionId].tsx` 中进行如下更改：

在我们的 `li` 中，新增一个如下的 `button`：

```jsx
<li key={choice.id}>
  {choice.text} - {choice.votes} votes
  <button>Vote</button>
</li>
```

接下来，导入我们更新的 `updateChoice` mutation，并在页面中创建 `handleVote` 函数。

```diff
// app/pages/questions/[questionId].tsx
+import updateChoice from "app/choices/mutations/updateChoice"

//...

export const Question = () => {
  const router = useRouter()
  const questionId = useParam("questionId", "number")
  const [deleteQuestionMutation] = useMutation(deleteQuestion)
  const [question] = useQuery(getQuestion, {id: questionId})
+ const [updateChoiceMutation] = useMutation(updateChoice)
+
+ const handleVote = async (id: number) => {
+   try {
+     await updateChoiceMutation({id})
+     refetch()
+   } catch (error) {
+     alert("Error updating choice " + JSON.stringify(error, null, 2))
+   }
+ }

  return (
```

然后我们需要更新问题相关的 `useQuery` 调用以返回需要在 `handleVote` 内部使用的 `refetch` 函数。

```diff
// app/pages/questions/[questionId].tsx

//...
- const [question] = useQuery(getQuestion, {id: questionId})
+ const [question, {refetch}] = useQuery(getQuestion, {id: questionId})
//...
```

最后，我们将告诉新的 `button` 来条用该函数！

```jsx
<button onClick={() => handleVote(choice.id)}>Vote</button>
```

最终的 `Question` 组件应该是这个样子：

```jsx
export const Question = () => {
  const router = useRouter()
  const questionId = useParam("questionId", "number")
  const [deleteQuestionMutation] = useMutation(deleteQuestion)
  const [question, {refetch}] = useQuery(getQuestion, {id: questionId})
  const [updateChoiceMutation] = useMutation(updateChoice)

  const handleVote = async (id: number) => {
    try {
      await updateChoiceMutation({id})
      refetch()
    } catch (error) {
      alert("Error updating choice " + JSON.stringify(error, null, 2))
    }
  }

  return (
    <>
      <Head>
        <title>Question {question.id}</title>
      </Head>

      <div>
        <h1>{question.text}</h1>
        <ul>
          {question.choices.map((choice) => (
            <li key={choice.id}>
              {choice.text} - {choice.votes} votes
              <button onClick={() => handleVote(choice.id)}>Vote</button>
            </li>
          ))}
        </ul>

        <Link href={`/questions/${question.id}/edit`}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteQuestionMutation({id: question.id})
              router.push("/questions")
            }
          }}
          style={{marginLeft: "0.5rem"}}
        >
          Delete
        </button>
      </div>
    </>
  )
}
```

### 最后，让我们支持编辑某问题下的一个选择

如果单击现有问题之一上的“编辑”按钮，你将看到它使用与创建问题相同的形式。至
此，该部分已经完成！我们只需要更新我们的 mutation。

打开 `app/questions/mutations/updateQuestion.ts` 并进行如下改动：

```diff
// app/questions/mutations/updateQuestion.ts
import {resolver} from "blitz"
import db from "db"
import * as z from "zod"

const UpdateQuestion = z
  .object({
    id: z.number(),
    text: z.string(),
+   choices: z.array(
+     z.object({id: z.number().optional(), text: z.string()}).nonstrict(),
+   ),
  })
  .nonstrict()

export default resolver.pipe(
  resolver.zod(UpdateQuestion),
  resolver.authorize(),
  async ({id, ...data}) => {
-   const question = await db.question.update({where: {id}, data})
+   const question = await db.question.update({
+     where: {id},
+     data: {
+       ...data,
+       choices: {
+         upsert: data.choices.map((choice) => ({
+           // Appears to be a prisma bug,
+           // because `|| 0` shouldn't be needed
+           where: {id: choice.id || 0},
+           create: {text: choice.text},
+           update: {text: choice.text},
+         })),
+       },
+     },
+   })

    return question
  },
)
```

`[upsert](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert)` 是一种特殊的操作，表示“如果存在此项目，请对其进行更新。否则创建它”。这对于
当前情况是完美的，因为我们不需要用户在创建问题时同时添加三个选择。所以如果
用户通过编辑问题添加另一个选择，则将在此处创建它。

### 结尾

🥳 恭喜！你创建了自己的 Blitz 应用！祝你玩得开心，也欢迎与你的朋友分享。现在，你已经完成了本教程，为什么不尝试使你的投票应用变得更好呢？你可以尝试：

- 添加样式 (提示, 试试 `blitz install tailwind` 或 `blitz install chakra-ui`)
- 显示更多有关选票的统计信息
- 在 Render 或 Vercel 上实时部署。

如果你想与全球 Blitz 社区分享你的项目，没有比 Discord 更好的地方了。

访问 [discord.blitzjs.com](https://discord.blitzjs.com)。然后，将连接发布到 **#built-with-blitz** 频道来与所有人共享！

## 译者结语

本文内容属于 [Blitz.js 官方文档](https://blitzjs.com/docs) - 简介章节的前半部分。总共十四个章节（简介、社区、基础、页面、路由、权限、数据库、Queries 和 Mutations、后端架构、部署、配方、配置、CLI 和模板）。未来不定期翻译其余章节，也可能会原创一些文章。

《[Blitz.js + React 全栈开发手册](https://github.com/hylerrix/blitzjs-tutorial)》系列专注探索 Blitz.js + React 全栈应用开发，原文翻译内容会同步更新到 [Blitz.js 中文仓库](https://github.com/blitz-js/zh-hans.blitzjs.com) 上。欢迎 Star、Watch 或关注公众号 (@ningowood) 来及时接收消息。

> 2021 © [https://github.com/hylerrix/blitzjs-tutorial](https://github.com/hylerrix/blitzjs-tutorial)
