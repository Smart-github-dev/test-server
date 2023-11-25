const express = require("express");
const router = express.Router();

const { TENANT_ID, CLIENT_ID } = require("./setting");
const axios = require("axios");

router.get("/auth/login", async (req, res) => {

  const authEndpoint =
    "https://login.microsoftonline.com/common/oauth2/authorize";
  const redirectUri = "https://localhost/myapp/";
  const clientId = CLIENT_ID;
  const scope = "https://analysis.windows.net/powerbi/api/Report.Read.All";
  const responseType = "code";

  const authUrl = `${authEndpoint}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  const authorize = await axios.get(authUrl);

  //   const token = await axios.get(
  //     `https://login.microsoftonline.com/${TENANT_ID}/oauth2/token`
  //   );

  console.log(authorize);
  res.json({ authorize });
  //   } catch (error) {
  //     console.log(error, { color: "red" });
  //     res.status(404).json(error);
  //   }
});

module.exports = router;
