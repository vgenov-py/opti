```bash
    1  sudo apt update && sudo apt install nodejs npm -y
    2  apt install nodejs npm -y
    3  sudo apt install nodejs npm -y
    4  sudo apt update && sudo apt install nodejs npm -y
    5  exit
    6  sudo apt update && sudo apt install nodejs npm -y
    7  git --version
    8  git clone https://github.com/vgenov-py/opti
    9  ls
   10  cd opti
   11  node app.js 
   12  npm init
   13  node app.js 
   14  npm init -y
   15  node app.js 
   16  npm install
   17  node app.js 
   18  npm install -g pm2
   19  sudo npm install -g pm2
   20  pm2 start app.js
   21  pm2 save
   sudo apt install nginx
   24  sudo nano /etc/nginx/sites-available/opti
   25  sudo ln -s /etc/nginx/sites-available/opti /etc/nginx/sites-enabled/
   26  sudo nginx -t
   27  sudo systemctl reload nginx
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