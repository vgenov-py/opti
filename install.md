### Instalación Node.js

```bash
    sudo apt update
    sudo apt install nodejs npm -y
    git clone <tu_repo>
    ls
    cd <directorio_proyect>
    npm install
    node app.js 
    npm install -g pm2
    sudo npm install -g pm2
    pm2 start app.js
    pm2 save
    sudo apt install nginx
    sudo nano /etc/nginx/sites-available/<app>
    sudo ln -s /etc/nginx/sites-available/<app> /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
```

```nginx
server {
	listen 80;
	server_name 95.111.234.50;

	location /static/ {
		alias /home/u3000/opti/public/;
		index index.html;
		try_files $uri $uri/ =404;
	}

	location / {
		proxy_pass http://localhost:3000;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}
}
```