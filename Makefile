PKG_MANAGER ?= npm

install:
	$(PKG_MANAGER) install

dev:
	$(PKG_MANAGER) start

build:
	$(PKG_MANAGER) run build

format:
	$(PKG_MANAGER) run format

deploy:
	$(PKG_MANAGER) run deploy

clean:
	rm -rf node_modules build
