### Prerequistes:
You should have the following:
- Node version 12 (has been tested on v12.21.0) installed.
- CSV File to process should be in a format similar to below. The headers must match those specified in the sample below.
```
id,code,value,short_code,campaign_id,created_at
00066bdc-512f-4c27-bf81-d4223c9beeee,BARV81BJUTC,3.000000000000000000,BAR,0fda8f4a-0890-4101-bcb0-c5df053d02b6,2020-06-18 15:17:13
001b1086-5d1f-4196-a6cb-27f13469e321,BARV2U1FRIS,3.000000000000000000,BAR,0fda8f4a-0890-4101-bcb0-c5df053d02b6,2020-06-18 15:19:13
002ebdb0-23bd-499c-97f5-843a12bcfae6,BARVUBQ03I6,3.000000000000000000,BAR,0fda8f4a-0890-4101-bcb0-c5df053d02b6,2020-06-18 15:21:13
003fc0a0-2b14-49f9-aee7-c19e0cea40e4,BARV3ZYP69A,3.000000000000000000,BAR,0fda8f4a-0890-4101-bcb0-c5df053d02b6,2020-06-18 15:19:13
```
- A public key obtained from Rakuten Blockchain Lab


### Usage
- Inside source directory run `npm install` in order to install relevant packages
- Run the following command inside the source directory:
`node index.js ./Socios_vouchers.csv ./publicKey.pem ./output.json`
- The first parameter is the path to the CSV to be processed
- The second parameter is the path to the public key you have been provided. 
- The third parameter is the path to the json output file you are creating

### Output
- On successful creation of the output file you should see a log message containing something like the following message `Successfully created ./output.json`
- The JSON file created should be created in the path you have specified ready to be sent to Rakuten Blockchain Lab

### Contact
For issues with this tool contact: `ciaran.duncan@rakuten.com`
