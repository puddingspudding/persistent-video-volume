#/bin/bash

DOCKER_IMAGE=node:14.12-buster
CONTAINER_NAME=pvv-build
MCW_VERSION=$1

echo "Build Material-Components-Web-$MCW_VERSION"

# Remove container if already exists
docker rm $CONTAINER_NAME > /dev/null
rm -r material-components-web-$MCW_VERSION

docker create --name $CONTAINER_NAME $DOCKER_IMAGE ./build-dep.sh $MCW_VERSION
docker cp . $CONTAINER_NAME:/
docker start -i $CONTAINER_NAME
docker cp $CONTAINER_NAME:/material-components-web-$MCW_VERSION ./
docker rm $CONTAINER_NAME
