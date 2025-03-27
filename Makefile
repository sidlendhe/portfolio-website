.PHONY: install build start clean

install:
	docker-compose build --no-cache
	docker-compose run --rm web npm install

build:
	docker-compose build

start:
	docker-compose up

clean:
	docker-compose down -v
	rm -rf node_modules