# Guide to Generate this API client for Brain Commerce Ingestor API

# Download the `openapi.json`
```shell
wget https://brain-ingestors.dev.eu2.rezolve.com/shopify/openapi.json
```
# Install `openapi-generator` CLI
Check [official installation guide](https://openapi-generator.tech/docs/installation) for full detail.

To install using homebrew:
```shell
brew install openapi-generator
```

# Generate the client library
## delete old files and directories
```shell
.openapi-generator
docs
src
test
.babelrc
.travis.yml
.openapi-generator-ignore
.gitignore
git_push.sh
mocha.opts
README.md
package.json
```
## Update `config.yaml`
Update `config.yaml` as required.

## Run `openapi-generator`

```shell
openapi-generator generate -c ./config.yaml
```
