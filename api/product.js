const express = require('express')
const router = express.Router()

router.get('', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'It works (:',
    })
  } catch (e) {
    // handle error

    console.log(e)
    res.json({
      status: 500,
      message: 'It does not work :(',
    })
  }
})

module.exports = router
