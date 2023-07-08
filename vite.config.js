export default {
    server: {
      port: 3000, // Порт для разработки
    },
    
    build: {
      target: 'esnext', // Целевая версия JavaScript
      outDir: 'dist', 
      minify: 'terser', // Минификация кода
      sourcemap: true, // Генерация sourcemaps для отладки
      rollupOptions: {
        output: {
          manualChunks: undefined, // Отключить ручное разделение бандлов (для SplitChunks)
        },
      },
    },
  };
  const config = {
    stack: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'Vue.js',
        'Nuxt.js',
        'React',
        'Next.js',
        'MobX',
        'Redux',
        'React Native',
        'TypeScript',
        'npm',
        'yarn',
        'Git',
        'GitHub',
        'Gitlab',
        'BEM',
        'Grid',
        'Flexbox',
        'Express.js',
        'MongoDB',
        'Figma',
        'Node.js',
        'Responsive',
        'Jest',
        'REST API',
        'Android Studio',
        'XCode',
        'MacOS',
        'Styled Components',
        'Tailwind',
        'Ant Design',
        'Telegram API',
        'Telegram Bot API',
        'Team Work',
        'Jira',
        'Google'
    ]
}
