const csvtojson = require('csvtojson');
const fs = require('fs')
const crypto = require('crypto');
const md5 = require('md5');

async function encryptData(data) {
    const buffer = Buffer.from(data);
    const encryptedCrypto = crypto.publicEncrypt({
        key: fs.readFileSync(process.argv.slice(2)[1], 'utf8'),
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, 
        buffer);
    const encryptedDataFromCrypto = encryptedCrypto.toString('base64');
    return encryptedDataFromCrypto;
}

(async () => {
    const jsonArray = await csvtojson().fromFile(process.argv.slice(2)[0]);
    let coupons = [];

    for (data of jsonArray) {
        const objToHash = {
            encryptedRedemptionDetails: await encryptData(
                JSON.stringify(
                    { redemptionCode: data.code }
                )
            ),
            couponId: data.id,
            type: data.short_code,
            amount: Math.trunc(data.value).toString(),
        }

        coupons.push({
            ...objToHash,
            hash: md5(JSON.stringify(objToHash))
        });
    }

    const objectToReturn = {
        publicKeyPem: fs.readFileSync(process.argv.slice(2)[1], 'utf8'),
        coupons,
    }

    fs.writeFile(process.argv.slice(2)[2], JSON.stringify(objectToReturn), function (err) {
        console.log(`Successfully created ${process.argv.slice(2)[2]}`);
    });
})().catch((e) => {
    console.log(e);
});
