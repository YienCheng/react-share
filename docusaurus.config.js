module.exports = {
  // 网站标题
  title: "React技术分享",
  // 网站的标语
  tagline: "Talk is cheap, show me the code",
  // 网站host域名
  url: "https://your-docusaurus-test-site.com",
  // 网站根路径
  baseUrl: "/",
  // 当检测到任何无效的链接时所应采取的行为
  onBrokenLinks: "throw",
  // 当检测到任何无效的链接时所应采取的行为
  onBrokenMarkdownLinks: "warn",
  // 网站图标
  favicon: "img/favicon.ico",
  // 组织名
  organizationName: "secoo",
  // 仓库名
  projectName: "react-share", // Usually your repo name.
  // 主题插件
  themes: ['@docusaurus/theme-live-codeblock'],
  // 主题配置
  themeConfig: {
    // 导航栏
    navbar: {
      // 导航栏title
      title: "React技术分享",
      // 导航栏logo
      logo: {
        alt: "React",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/",
      //       },
      //       {
      //         label: "Second Doc",
      //         to: "docs/doc2/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'jsx',
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/global.css"),
        },
      },
    ],
  ],
  // 自定义字段
  customFields: {},
  // 额外的script脚本
  scripts: [],
  // 额外的样式表
  stylesheets: [],
  // 额外的模块
  clientModules: [
    // require.resolve('./mySiteGlobalJs.js'),
    // require.resolve('./mySiteGlobalCss.css'),
  ],
  // title分割符
  titleDelimiter: "|"
};
