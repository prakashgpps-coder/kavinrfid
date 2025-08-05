export default function handler(req, res) {
  const { card_uid, device_token } = req.query;

  const validToken = "bf0bc0ed017874e9";

  const validCards = {
    "B37A512D": "kavin"
  };

  if (!card_uid || !device_token) {
    return res.status(400).send("missing parameters");
  }

  if (device_token !== validToken) {
    return res.status(403).send("invalid token");
  }

  const userName = validCards[card_uid];

  if (userName) {
    return res.status(200).send("login" + userName);
  } else {
    return res.status(401).send("invalid");
  }
}