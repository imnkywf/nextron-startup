// renderer/pages/_app.tsx
import '../styles/global.css'  // ✅ 正确：全局样式只在 _app.tsx 引入

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}