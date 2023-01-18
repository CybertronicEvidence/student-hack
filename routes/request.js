const router = express().Router()
const request = require('../controllers/Request')


router.post('/', request)

module.exports = router