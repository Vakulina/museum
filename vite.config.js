export default {
  server: {
    port: 3000, // Порт для разработки
  },

  build: {
    target: "esnext", // Целевая версия JavaScript
    outDir: "dist",
    minify: "terser", // Минификация кода
    sourcemap: true, // Генерация sourcemaps для отладки
    rollupOptions: {
      output: {
        manualChunks: undefined, // Отключить ручное разделение бандлов (для SplitChunks)
      },
    },
  },

  optimizeDeps: {
    include: ["mapbox-gl"],
  },
};
