# A Minimal Starter Kit for Wapo Gateway

This is a minimal starter kit that build with [Hono](https://hono.dev/) and deploy with Wapo Gateway later on.

## Getting Started

### Prerequisites

- Node.js 16+
- Docker

### Installation

```bash
git clone https://github.com/wapo-io/wapo-starter-kit.git
cd wapo-starter-kit
npm install
```

### Usage

To start the local devserver (a.k.a testnet), run:

```bash
npm run dev
```

By default the devserver will listen on `http://localhost:8000`, and you can access via `http://localhost:8000/local`, and getting logs via this API:

```bash
curl http://localhost:8000/logs/all/local
```

We also can use vitest to run the test cases, this starter kit already setup shim for Wapo specified APIs:

```bash
npm run test
```

Or:

```bash
npm run ci
```

To build the artifact for deployment (a.k.a production bundle), run:

```bash
npm run build
```

Then you can upload the `dist/index.js` to IPFS.


## License

[Apache-2.0](LICENSE)
