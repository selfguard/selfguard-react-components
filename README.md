

<div align='center'>
  <img src='https://bafybeigfziugbx7542fy63mjyyeqtbbdpkbwj6mqu6gelkovgryvhbrglm.ipfs.w3s.link/selfguard.png'>
  <h1 align='center'> SelfGuard</h1>
  <h3 align='center'>Universal API For Encryption</h3>
  <p align='center'> SelfGuard allows you to easily encrypt and tokenize data  in a secure and compliant manner. </p>
  <p align='center'> <b>Get your API-Key</b> at <a href='https://selfguard.xyz'> https://selfguard.xyz </a>
</div>

## Description

This NPM Module allows you to directly import SelfGuard's pre-built react components. The first one being encrypted notifications. 

<div align='center'>
  <img src='https://bafybeibk7ac6wfiu5rtofwawiuf2vhc62d45scg3g2hlmnp45r4swqook4.ipfs.w3s.link/Screen%20Shot%202022-10-04%20at%2012.16.48%20PM.png'>
</div>

## Installation

  `npm install selfguard-react-components`

## Notifications Component

### Import Notifications Module

```javascript

import {Notifications} from 'selfguard-react-components';

```

### Embed

```javascript
<div>
	<Notifications userAddress={address}  api_key={API_KEY}  />
</div>

```

## Notifications API
Once users have signed up for notifications on your dapp, you will be able to see the list of your users in the SelfGuard dashboard. You can then send them notifications using the following APIS.

### Send SMS
```javascript

await sg.sendSMS({address:'0xadfb..',text:'Example Text'});

```

### Send Email
```javascript

await sg.sendEmail({address:'0xadfb..',from:'example@test.com',fromName:'test',replyTo:'reply@test.com', reployToName:'test',subject:'Test Subject', html:'This is the content of the email'});

```