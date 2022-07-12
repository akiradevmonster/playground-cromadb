# ChromaDB Markdown Search

TypeScriptで実装されたMarkdownファイル検索アプリケーション。ChromaDBを使用してベクトルデータベースを構築し、OpenAIのembedding APIを使用してテキストをベクトル化します。

## 機能

- ローカルのMarkdownファイルからテキストを抽出
- OpenAIのtext-embedding-3-smallモデルを使用してテキストをベクトル化
- ChromaDBを使用してベクトルデータを永続化
- キーワードや文章による類似検索

## 前提条件

- Node.js (v18以上)
- pnpm
- Docker と Docker Compose
- OpenAI API キー

## セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd playground-cromadb
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 環境変数の設定

`.env`ファイルをプロジェクトルートに作成し、以下の内容を追加します：

```
OPENAI_API_KEY=your_openai_api_key
```

### 4. ChromaDBサーバーの起動

Docker Composeを使用してChromaDBサーバーを起動します：

```bash
docker compose up -d
```

## 使用方法

### アプリケーションの実行

```bash
# TypeScriptのコンパイル
pnpm build

# Markdownファイルの処理と登録のみを実行
pnpm dev:process
# または
node dist/processor.js

# 検索機能のみを実行
pnpm dev:search
# または
node dist/index.js

# 処理と検索を順番に実行（通常の使用方法）
pnpm dev
```

### 検索

アプリケーションを実行すると、CLIインターフェースが表示されます。検索クエリを入力して、類似するMarkdownコンテンツを検索できます。

### メモリプロファイリング

メモリ使用量を分析するためのプロファイリングツールが含まれています：

```bash
# メモリプロファイリングの実行
pnpm profile

# エンベディング生成も含めたプロファイリング
pnpm profile:embeddings
```

プロファイリング結果は `profiling_data` ディレクトリに保存されます。

### ChromaDBサーバーの停止

```bash
docker compose down
```

## プロジェクト構成

```
/playground-cromadb
  ├── .env                      # 環境変数
  ├── package.json              # npmパッケージ設定
  ├── tsconfig.json             # TypeScript設定
  ├── docker-compose.yml        # Docker設定
  ├── src/
  │   ├── index.ts              # 検索機能のエントリーポイント
  │   ├── processor.ts          # Markdown処理と登録のエントリーポイント
  │   ├── config.ts             # 設定管理
  │   ├── db/
  │   │   ├── chroma-client.ts  # ChromaDBクライアント
  │   │   └── collections.ts    # コレクション管理
  │   ├── embedding/
  │   │   └── openai.ts         # OpenAI Embedding管理
  │   ├── markdown/
  │   │   ├── loader.ts         # Markdownファイルローダー
  │   │   ├── parser.ts         # Markdownパーサー
  │   │   ├── semantic-parser.ts # セマンティック解析
  │   │   └── adaptive-chunker.ts # 適応型チャンカー
  │   ├── profiling/
  │   │   └── memory-profile.ts # メモリプロファイリング
  │   ├── utils/
  │   │   └── memory-monitor.ts # メモリ使用量モニタリング
  │   └── search/
  │       └── query.ts          # 検索ロジック
  ├── data/
  │   └── markdown/             # サンプルMarkdownファイル
  ├── chroma_db/                # ChromaDB永続化ストレージ（Dockerにマウント）
  ├── profiling_data/           # プロファイリング結果
  └── dist/                     # コンパイル済みJavaScriptファイル
```

## アーキテクチャ

```
                                  ┌─> HTTP API (port 8080) ─> ChromaDB Dockerコンテナ
                                  │
Markdown処理モジュール (processor.ts) ─> OpenAI API
                                  │
                                  └─> 処理済みデータ
                                        │
                                        v
検索モジュール (index.ts) ──────────────┘
                │
                v
            OpenAI API
```

機能が分離されたアーキテクチャ：

1. **Markdown処理モジュール (processor.ts)**
   - Markdownファイルを読み込み
   - OpenAI APIを使用してテキストをベクトル化
   - HTTP経由（ポート8080）でChromaDBコンテナに接続し、ベクトルデータを保存

2. **検索モジュール (index.ts)**
   - ChromaDBに接続して保存されたベクトルデータにアクセス
   - 検索クエリをベクトル化し、類似検索を実行
   - 結果を表示

## 最適化戦略

このプロジェクトでは、以下の戦略で処理の最適化を行っています：

### メモリ使用効率の向上
- ストリーミング処理によるメモリ効率の改善
- 適切なチャンクサイズでの処理
- 明示的なGCヒントの提供

### セマンティック処理の強化
- Markdownの構造を認識したチャンキング
- 文脈を保持した適応的なチャンクサイズ調整
- 意味的な関連性を保つオーバーラップ戦略

### パフォーマンス分析
- メモリ使用量のリアルタイムモニタリング
- 処理戦略の比較分析
- ヒープスナップショットによるメモリリークの検出

## トラブルシューティング

- **OPENAI_API_KEY not set error**: .envファイルにAPIキーが正しく設定されているか確認してください。
- **ChromaDB client connection error**: ChromaDBサーバーが起動しているか確認してください。`docker compose ps`で状態を確認できます。
- **Database permission errors**: chroma_dbディレクトリの権限を確認してください。
- **Database corruption**: 問題が発生した場合は、`chroma_db`ディレクトリを削除して新しく作成することができますが、すべてのインデックスデータが削除されることに注意してください。
- **Memory issues**: Node.jsのメモリ制限を調整するか、チャンクサイズを小さくすることを検討してください。プロファイリングツールを使用してボトルネックを特定できます。
