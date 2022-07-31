# 夏休みに頑張るあなたへ
これはnext.jsのプロジェクトです

まずNodeのインストールを済ませてください  
このプロジェクトを作成した際のNode.jsのバージョンは  
Node.js v16.15  
npm 8.11.0  
になります　　

次にnextプロジェクトを作成します　 
```console
$ npx create-next-app プロジェクト名 --ts  
```  
これでtypescriptのNext.jsのプロジェクトが作成できます
ここで作成したプロジェクトのディレクトリに移動し  
```console
$ npm run dev
```  
を実行しhttp://localhost:3000にアクセスしてください　　

ここまででうまくいかない時はNext.js　プロジェクト作成　とかでググって

動作してたら一息休憩

ここからTailwindcssを導入します  
Next.jsにインストールするときはtailwindcssだけじゃだめっぽくて他にも２つくらいインストールしないといけないっぽい
```console
$ npm install -D tailwindcss@latest postcs@latest autoprefixer@latest  
```
```console
$ npx tailwindscc init -p
```
これをやるとtailwindcssの設定ファイルが出現する
この設定ファイルを編集する
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
contentの中に適用したいディレクトリのパスを書いてやる
そして/styles/にあるglobal.cssの頭に　　
```console
@tailwind base;
@tailwind components;
@tailwind utilities;
```
上記を書く
これで
index.tsxを適当に書き換えて
```javascript
export default function tekitou() {
return (
  <div className='text-center text-red-500'>
    tekitou
  </div>
 )
}
```
こんな感じに書き換えてtekitouに色がついてたら成功  
ここで動作しなかったことが何回もある大体原因は  
tailwindcss.config.jsのcontentのパスを誤解して書いてる  
確認してください  
ここまででできなかったら[ここ](https://tailwindcss.com/docs/guides/nextjs)  

次にreact-leafletを導入します  
```console
$ npm install leaflet react-leaflet --save
```
```console
$ npm install -D @types/leaflet
```
https://dev.classmethod.jp/articles/tried-react-leaflet-with-nextjs/  
これを参考に適当に地図を表示させてみてください
できなかったら俺のやつ参考にしてください