const plugins = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ],
  [
    'import',
    { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: "css" },
  
  ]
  // [
  //   'import',
  //   {
  //     libraryName: 'dcicework',
  //     libraryDirectory: 'lib',
  //     // style: true,
  //     camel2DashComponentName: false,
  //     camel2UnderlineComponentName: false,
  //     style: name => {
  //       const cssName = name.split('/')[2];
  //       return `dcicework/lib/style/${cssName}.css`;
  //     }
  //   },
  //   'dcicework'
  // ]
];

// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins
};
