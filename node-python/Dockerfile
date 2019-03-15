FROM python:3.6-alpine

WORKDIR /app

COPY . /app

RUN apk update && apk add --update nodejs nodejs-npm vim

EXPOSE 80

CMD ["python", "testpy.py"]