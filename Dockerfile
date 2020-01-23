FROM node:12.2.0 as build

WORKDIR /eventBookingSystemFrontEnd

COPY package*.json /eventBookingSystemFrontEnd/

RUN npm install 

COPY ./ /eventBookingSystemFrontEnd

RUN npm run build 


FROM nginx

COPY ./build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

