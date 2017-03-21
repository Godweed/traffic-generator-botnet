![N|Solid](https://phantomjscloud.com/img/logo-600.png)   

# Deployment steps:
```sh
  $ apt-get update
  $ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
  $ apt-get install -y nodejs
  $ apt-get install git
  $ apt-get install nano
  
  
  $ apt-get install tor
  $ tor --hash-password mypassword
  $ nano /etc/tor/torrc
  >   (ControlPort 9051, HashedControlPassword ${ctrl+v you hashed password})
  $ /etc/init.d/tor restart
  
  $ apt-get install phantomjs
  $ apt-get install casperjs
  $ npm i -g phantomjs & npm i -g casperjs
  $ git clone + npm i
```
  
# Before ever run:
    $ export QT_QPA_PLATFORM=offscreen
    $ tor
    
    $ npm start
![N|Solid](https://pbs.twimg.com/profile_images/1884362265/phantomjs_400x400.png) 
