# 基本設計
当アプリは「Vercel」以外のプラットフォームでホスティングする可能性も考慮して、SSRを一切使用せず全ページSSGの前提とする。その為、package.jsonのbuildコマンドは静的ファイルを生成する`next build && next export`にしている。
