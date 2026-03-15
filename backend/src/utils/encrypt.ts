import crypto from "crypto"

const algorithm = "aes-256-cbc"

const key = Buffer.from(process.env.AES_SECRET!)

export function encrypt(text: string) {

 const iv = crypto.randomBytes(16)

 const cipher = crypto.createCipheriv(
  algorithm,
  key,
  iv
 )

 let encrypted = cipher.update(text)

 encrypted = Buffer.concat([
  encrypted,
  cipher.final()
 ])

 return iv.toString("hex") +
 ":" +
 encrypted.toString("hex")

}